export function useCommaNumber(number:number):string[]{
    let resultNumber = "";
    const reverseNumber = number.toString().split('').reverse();
    let pos = 0;
    for(let i = 0; i<reverseNumber.length; i++){
        resultNumber += reverseNumber[i];
        pos++;
        if(pos == 3 && i+1<reverseNumber.length){
            pos = 0;
            resultNumber += ',';
        }
    }
    return resultNumber.split('').reverse();
}