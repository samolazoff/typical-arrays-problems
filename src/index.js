let sor = function (a,b){
    return a-b
}
exports.min = function min (array) {
    if(array!=undefined&&array.length!=0){
        return array.sort(sor)[0];
     }else{
         return 0;
     }
}

exports.max = function max (array) {
    if(array!=undefined&&array.length!=0){
        return array.sort(sor)[array.length-1];
     }else{
         return 0;
     }
}

exports.avg = function avg (array) {
    if(array!=undefined&&array.length!=0){
        return array.reduce((accumulator, currentValue) => accumulator + currentValue)/array.length;
     }else{
         return 0;
     }
}
