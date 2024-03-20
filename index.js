const node_redeployment_orchestrator = require('node-redeployment-orchestrator');
const node_redeployment_booster = require('node-redeployment-booster');
const underscore = require('underscore');
const debug = require('debug');
const react_redux = require('react-redux');
const dotenv = require('dotenv');
const lodash = require('lodash');
const jest = require('jest');
const multer = require('multer');
const async = require('async');
const fs_extra = require('fs-extra');
const solc = require('solc');

const url = require('url');
const myUrl = new URL('https://example.com/foo/bar?query=string');
console.log('Pathname:', myUrl.pathname);
console.log('Query:', myUrl.searchParams.get('query'));

// Convert an object to query string parameters
const params = { name: 'John', age: 30 };
const queryString = new URLSearchParams(params).toString();
console.log('Query string:', queryString);

// Convert a CSV string to an array of objects
const csvString = `Name, Age, Country\nJohn Doe, 30, USA\nJane Smith, 25, Canada`;
const csvToArray = (csv) => {
  const lines = csv.split('\n');
  const headers = lines[0].split(',').map(header => header.trim());
  const data = [];
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',').map(value => value.trim());
    const entry = {};
    headers.forEach((header, index) => {
      entry[header] = values[index];
    });
    data.push(entry);
  }
  return data;
}
console.log('CSV to Array:', csvToArray(csvString));

const dns = require('dns');
dns.resolve4('www.google.com', (err, addresses) => {
  if (err) throw err;
  console.log('Addresses: ' + JSON.stringify(addresses));
});

for (let i = 0; i < 5; i++) {
    console.log(`Loop iteration: ${i}`);
}

const path = require('path');
console.log(`Current working directory: ${path.resolve()}`);

// Create a JWT token using jsonwebtoken library
const jwt = require('jsonwebtoken');
const generateJWTToken = (payload, secret, options) => {
  return jwt.sign(payload, secret, options);
}
const userPayload = { userId: 12345, username: 'john_doe' };
const jwtSecret = 'secret_key';
const jwtOptions = { expiresIn: '1h' };
const token = generateJWTToken(userPayload, jwtSecret, jwtOptions);
console.log('JWT Token:', token);