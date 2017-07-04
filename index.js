#!/usr/bin/env node

const fs = require('fs');
const spec = require('swagger-tools').specs.v2;
const console = require('console');

const file = process.argv[2];
let output = process.argv[3];

if (!file) {
  console.log('file name should be provided as a script argument');
  process.exit(1);
}

fs.readFile(file, { encoding: 'utf8' }, (err, schema) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log('parsing schema for:');
  const schemaJSON = JSON.parse(schema);
  console.log(schemaJSON.host);
  console.log('resolving $refs');
  spec.resolve(schemaJSON, (resolveErr, res) => {
    if (resolveErr) {
      console.log('resolve error:');
      console.log(JSON.stringify(resolveErr));
      process.exit(1);
    } else {
      console.log(`saving resolved file to: resolved-${file}`);
      output = output || `resolved-${file}`;
      fs.writeFileSync(output, JSON.stringify(res));
      process.exit();
    }
  });
});
