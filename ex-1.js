//Exercise 1
let lightBulbStatus = "On";

// Start coding here.
let message;
function checkStatus(status) {
  if (status === "On") message = "Light bulb is On.";
  else if (status === "Off") message = "Light bulb is Off.";
  else message = "error";
}
checkStatus(lightBulbStatus);
console.log(message);
