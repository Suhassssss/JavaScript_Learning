var globalVariable = 300;
function outer() {
    let outerFunVariable = 100;
    let innerFun = function(){
        let innerFunVariable = 200;
        console.log(innerFunVariable, outerFunVariable, globalVariable);
    }
    return innerFun;
}
let returnValue = outer();
returnValue();