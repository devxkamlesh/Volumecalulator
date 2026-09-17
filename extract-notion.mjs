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

async function extractAll() {
  let r = await callNotion('/api/v3/loadPageChunk', {
    pageId: '3ddd091a-6ee7-8034-adb6-e1d04befe170',
    limit: 100,
    cursor: { stack: [] },
    chunkNumber: 0,
    verticalColumns: false
  });

  const json = JSON.parse(r.data);
  const blocks = json.recordMap.block;
  console.log('=== ALL BLOCKS IN PAGE ===');
  for (const [id, block] of Object.entries(blocks)) {
    const val = block.value;
    if (!val) continue;
    console.log(`\n--- Block: ${val.type} (ID: ${id}) ---`);
    if (val.properties) {
      console.log('Properties:', JSON.stringify(val.properties, null, 2));
    }
    if (val.content) {
      console.log('Child Block IDs:', val.content);
    }
  }
}

extractAll();
