const assert = require("assert");

console.log("Test Started");

function multiply(a,b){
    return a*b;
}

try {

    assert.strictEqual(multiply(2,3),6);

    console.log("Test Passed");

} catch(error){

    console.log("Test Failed");

    process.exit(1);
}
