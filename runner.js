const cp = require('child_process')
if (process.env.NODE_ENV === 'production')
 cp.exec('node ./bin/www', (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }
  console.log(stdout);
});
else 
  cp.exec('nodemon ./bin/www', (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }
  console.log(stdout);
});