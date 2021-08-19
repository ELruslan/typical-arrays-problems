
exports.min = function min (array) {
  result=0
  for(i=0;i<array.length;i++)
  if(array[i]<0){
    result= Math.min.apply(null, array)
  }return result;
  
}

exports.max = function max (array) {
  for(i=0;i<array.length;i++)
  if(array[i]>0){
    result= Math.max.apply(null, array)}
  return result;
}

exports.avg = function avg (array) {
  for(i=0;i<array.length;i++)
  if(array[i]>0){
    result= array.reduce((a,b) => a + b, 0) / array.length}
  return result;
}
