function doAssignment(callback) {
    console.log("I am doing assignment and it is done now...");
    callback();

}

function copyAssignment() {
    console.log("Hey bro... Thank you. Let me copy");
}

doAssignment(copyAssignment);

console.log("=========================");
function display() {
    console.log("Display function");
}
setInterval(display,1000);
