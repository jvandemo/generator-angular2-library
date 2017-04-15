/* eslint-disable */
const watch = require('node-watch');
const spawn = require('child_process').spawn;
const path = require('path');
const debounceTime = 300;
let timeoutId;

watch('./src', {recursive: true}, function (event, name) {
  if(timeoutId){
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(runBuildProcess, debounceTime);
});

function runBuildProcess(){
  const timestamp = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
  console.log(timestamp + ' start build process');
  const ls = spawn(path.join(__dirname, 'build.sh'));
  ls.on('close', (code) => {
    if (code === 0) {
      const timestamp = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
      console.log(timestamp + ' finished build process, dist directory was successfully updated');
    }
  });
}
