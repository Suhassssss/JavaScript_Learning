function primeNumber(numberToCheck) {
    for (let index = 2; index < numberToCheck; index++) {
        if(numberToCheck%index==0){
            return false;
        }
    }
    return true;

}
const array = [6,7,11,23,46,77];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element,": ",primeNumber(element));
}