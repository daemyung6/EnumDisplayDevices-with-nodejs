const exec = require('child_process').exec;

function getInfo(callback) {
  exec(".\\bin\\getDeviceList.exe", function(err, stdout, stderr) {
    if(err) { callback(err); return; }
    if(stderr) { callback(stderr); return; }
    
    let strlist = stdout.split("\r\n");
    let nowDevice;
    let isChildren = false;;
    let nowchildren;
    let info = [];
    let childCount = 0;
    for (let i = 0; i < strlist.length; i++) {
      if(strlist[i] == "deviceSTART") {
        nowDevice = { children : [] };
        continue;
      }
      if(strlist[i] == "deviceEND") {
        info.push(nowDevice);
        continue;
      }
      if(strlist[i] == "  childSTART") {
        isChildren = true;
        nowchildren = {};
        continue;
      }
      if(strlist[i] == "  childEND") {
        ++childCount
        nowDevice.children.push(nowchildren);
        isChildren = false;
        continue;
      }
      if(!isChildren) {
        if(strlist[i].split(":")[0].indexOf("DeviceName") != -1) {
            nowDevice.deviceName = strlist[i].split(":")[1];
        }
        if(strlist[i].split(":")[0].indexOf("DeviceString") != -1) {
            nowDevice.deviceString = strlist[i].split(":")[1];
        }
        if(strlist[i].split(":")[0].indexOf("StateFlags") != -1) {
            nowDevice.stateFlags = strlist[i].split(":")[1];
        }
        if(strlist[i].split(":")[0].indexOf("DeviceID") != -1) {
            nowDevice.deviceID = strlist[i].split(":")[1];
        }
        if(strlist[i].split(":")[0].indexOf("DeviceKey") != -1) {
            nowDevice.deviceKey = strlist[i].split(":")[1];
        }
      }
      else {
        if(strlist[i].split(":")[0].indexOf("DeviceName") != -1) {
            nowchildren.deviceName = strlist[i].split(":")[1];
        }
        if(strlist[i].split(":")[0].indexOf("DeviceString") != -1) {
            nowchildren.deviceString = strlist[i].split(":")[1];
        }
        if(strlist[i].split(":")[0].indexOf("StateFlags") != -1) {
            nowchildren.stateFlags = strlist[i].split(":")[1];
        }
        if(strlist[i].split(":")[0].indexOf("DeviceID") != -1) {
            nowchildren.deviceID = strlist[i].split(":")[1];
        }
        if(strlist[i].split(":")[0].indexOf("DeviceKey") != -1) {
            nowchildren.deviceKey = strlist[i].split(":")[1];
        }
      }
    }
    callback(info);
  });
}
module.exports = {
  getInfo : getInfo,
}