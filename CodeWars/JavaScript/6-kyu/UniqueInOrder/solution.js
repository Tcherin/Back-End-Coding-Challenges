var uniqueInOrder = function (iterable) {
    var arr = [];
    for(var i = 0; i < iterable.length;i++ ){
    if(iterable[i] !== iterable[i+1]){
    arr.push(iterable[i]);
             }
         }
    return arr;
    }

// refactored

var uniqueInOrder=function(iterable){
    return [...iterable].filter((char, index) => char !== iterable[index-1])
}

console.log(uniqueInOrder("Jennifer"))