
exports.min = function min (arr) {
  if(arr == null || arr.length==0){
    return 0;}
     var min = arr[0];
     for(var i=1; i<arr.length; i++){
       if(arr[i] < min){
         min = arr[i];   
       }
      }
    return min;
}

exports.max = function max (arr) {
  if(arr == null || arr.length==0){
    return 0}
    var min = arr[0]
     var max = arr[0];
     for(var i=1; i<arr.length; i++){
       if(arr[i] > max){
         max = arr[i];   
       }
      }
    return max;
}

exports.avg = function avg (arr) {
  if(arr == null || arr.length==0){
    return 0}
     var sum = 0;
     for(var i=0; i<arr.length; i++){
       if(i!= arr.length){
         sum += arr[i];  
       }
      }
    return sum/arr.length;
}
