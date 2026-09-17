import https from 'https';

function callNotion(path, body) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(body);
    const req = https.request({
      hostname: 'tar-patient-487.notion.site',
      port: 443,
      path: path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve({ status: res.statusCode, data }));
    });
    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

async function fetchCollections() {
  const collections = [
    {
      name: 'Collection 1',
      collectionId: '62f8c7e5-d4d1-470a-b586-588accea95a3',
      collectionViewId: '7fd9fb38-38ca-497d-8894-ce73ba55a0ff'
    },
    {
      name: 'Collection 2',
      collectionId: '7a62e380-05c1-496c-bb88-5257bb57f76f',
      collectionViewId: '7b935077-f296-4109-91c6-086df8e05948'
    }
  ];

  for (const c of collections) {
    console.log(`\n================== Querying ${c.name} (${c.collectionId}) ==================`);
    const res = await callNotion('/api/v3/queryCollection', {
      collection: { id: c.collectionId },
      collectionView: { id: c.collectionViewId },
      loader: {
        type: 'reducer',
        reducers: {
          collection_group_results: {
            type: 'results',
            limit: 100
          }
        },
        searchQuery: '',
        userTimeZone: 'UTC'
      }
    });

    console.log('Status:', res.status);
    try {
      const json = JSON.parse(res.data);
      const schema = json.recordMap?.collection?.[c.collectionId]?.value?.schema || {};
      console.log('SCHEMA COLUMNS:');
      for (const [colId, colDef] of Object.entries(schema)) {
        console.log(`  - ${colDef.name} (${colDef.type}) [id: ${colId}]`);
      }

      console.log('\nROWS / RECORDS:');
      const blocks = json.recordMap?.block || {};
      for (const [bId, bVal] of Object.entries(blocks)) {
        const item = bVal.value;
        if (!item || item.type !== 'page') continue;
        const props = item.properties || {};
        const rowData = {};
        for (const [colId, val] of Object.entries(props)) {
          const colName = schema[colId]?.name || colId;
          rowData[colName] = Array.isArray(val) ? val.map(v => v[0]).join('') : val;
        }
        console.log(`Row [${item.id}]:`, JSON.stringify(rowData, null, 2));
      }
    } catch(e) {
      console.error('Error parsing:', e, res.data.substring(0, 300));
    }
  }
}

fetchCollections();
