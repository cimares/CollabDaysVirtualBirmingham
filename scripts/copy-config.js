const fs = require('fs');
const path = require('path');

console.log('Copy config - START');
fs.copyFileSync(path.join(__dirname, '../event-config.json'), path.join(__dirname, '../public', 'config.json'));
console.log('Copy config - COMPLETED');