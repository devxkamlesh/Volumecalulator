import https from 'https';
import fs from 'fs';

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
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
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

async function run() {
  const spaceId = '96dd091a-6ee7-810d-a6d0-000394dd70f7';
  const collections = [
    {
      id: '62f8c7e5-d4d1-470a-b586-588accea95a3',
      viewId: '7fd9fb38-38ca-497d-8894-ce73ba55a0ff',
      name: 'Table 1'
    },
    {
      id: '7a62e380-05c1-496c-bb88-5257bb57f76f',
      viewId: '7b935077-f296-4109-91c6-086df8e05948',
      name: 'Table 2'
    }
  ];

  let outputMarkdown = '# Notion: Volume Calculator Page Content\n\n';

  for (const c of collections) {
    const res = await callNotion('/api/v3/queryCollection', {
      collection: { id: c.id, spaceId },
      collectionView: { id: c.viewId, spaceId },
      loader: {
        type: 'reducer',
        reducers: {
          collection_group_results: { type: 'results', limit: 200 }
        },
        sort: [],
        searchQuery: '',
        userTimeZone: 'UTC'
      }
    });

    const json = JSON.parse(res.data);
    const colRaw = json.recordMap?.collection?.[c.id]?.value;
    const collectionInfo = colRaw?.value || colRaw;
    const colName = collectionInfo?.name ? collectionInfo.name.map(x => x[0]).join('') : c.name;
    const schema = collectionInfo?.schema || {};

    outputMarkdown += `## ${colName}\n\n`;

    const blockIds = json.result?.reducerResults?.collection_group_results?.blockIds || [];
    outputMarkdown += `**Total Records:** ${blockIds.length}\n\n`;

    const blocks = json.recordMap?.block || {};
    
    const colKeys = Object.keys(schema);
    const colHeaders = colKeys.map(k => schema[k]?.name || k);
    
    outputMarkdown += `| ${colHeaders.join(' | ')} |\n`;
    outputMarkdown += `| ${colHeaders.map(() => '---').join(' | ')} |\n`;

    for (const bId of blockIds) {
      const bRaw = blocks[bId]?.value;
      const bVal = bRaw?.value || bRaw;
      if (!bVal) continue;
      const props = bVal.properties || {};
      const row = colKeys.map(k => {
        const val = props[k];
        if (!val) return '';
        let str = '';
        if (Array.isArray(val)) {
          str = val.map(x => (Array.isArray(x) ? x[0] : x)).join('');
        } else if (typeof val === 'object') {
          str = JSON.stringify(val);
        } else {
          str = String(val);
        }
        return str.replace(/\|/g, '\\|').replace(/\n/g, ' ').trim();
      });
      outputMarkdown += `| ${row.join(' | ')} |\n`;
    }

    outputMarkdown += '\n\n';
  }

  fs.writeFileSync('notion_extracted_content.md', outputMarkdown);
  console.log('Successfully saved to notion_extracted_content.md');
}

run();
