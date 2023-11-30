//Exercise 2
let lightBulbStatus = "Broken";

// Start coding here.
let message;
function checkStatus(status) {
  if (status === "On") message = "Light bulb is On.";
  else if (status === "Off") message = "Light bulb is Off.";
  else if (status === "Broken") message = "Light bulb is Broken.";
  else message = "Please choose the correct input (On/Off/Broken)";
}
checkStatus(lightBulbStatus);
console.log(message);
