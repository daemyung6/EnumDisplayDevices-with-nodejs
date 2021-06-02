const displayInfo = require("./displayInfo.js");

displayInfo.getInfo((err, info) => {
  if(err) {
    console.log(err);
    return;
  }
  console.log(info);
})

// print ...
//
// [
//   {
//     "children":[
//       {
//         "deviceName":" \\\\.\\DISPLAY1\\Monitor0",
//         "deviceString":" Generic PnP Monitor",
//         "stateFlags":" 3",
//         "deviceID":" MONITOR\\PHL08E1\\{4d36e96e-e325-11ce-bfc1-08002be10318}\\0007",
//         "deviceKey":" ...\\Control\\Class\\{4d36e96e-e325-11ce-bfc1-08002be10318}\\0007"
//       }
//     ],
//     "deviceName":" \\\\.\\DISPLAY1",
//     "deviceString":" NVIDIA GeForce GTX 1080 Ti",
//     "stateFlags":" 5",
//     "deviceID":" PCI\\VEN_10DE&DEV_1B06&SUBSYS_36071462&REV_A1",
//     "deviceKey":" ...\\Control\\Video\\{B6D9B0C8-9038-11EB-ABD7-309C23A426D8}\\0000"
//   },
//   {
//     "children":[],
//     "deviceName":" \\\\.\\DISPLAY2",
//     "deviceString":" NVIDIA GeForce GTX 1080 Ti",
//     "stateFlags":" 0",
//     "deviceID":" PCI\\VEN_10DE&DEV_1B06&SUBSYS_36071462&REV_A1",
//     "deviceKey":" ...\\Control\\Video\\{B6D9B0C8-9038-11EB-ABD7-309C23A426D8}\\0001"
//   },
//   {
//     "children":[],"deviceName":" \\\\.\\DISPLAY3",
//     "deviceString":" NVIDIA GeForce GTX 1080 Ti",
//     "stateFlags":" 0",
//     "deviceID":" PCI\\VEN_10DE&DEV_1B06&SUBSYS_36071462&REV_A1",
//     "deviceKey":" ...\\Control\\Video\\{B6D9B0C8-9038-11EB-ABD7-309C23A426D8}\\0002"
//   },
//   {
//     "children":[],"deviceName":" \\\\.\\DISPLAY4",
//     "deviceString":" NVIDIA GeForce GTX 1080 Ti",
//     "stateFlags":" 0",
//     "deviceID":" PCI\\VEN_10DE&DEV_1B06&SUBSYS_36071462&REV_A1",
//     "deviceKey":" ...\\Control\\Video\\{B6D9B0C8-9038-11EB-ABD7-309C23A426D8}\\0003"
//   }
// ]