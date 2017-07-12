'use strict';

function quickSort(input) {

//to check input is null
if(input.constructor === Array || input == null )
{
	//throw "empty list";
}

if(input==null)
{
	return input;
}
else if(input.length==1)
{
	return input;
}
else if(input.length> 1)
{
	var index=input.length;
	
	var resultarray=SelectionSort(input,input[0],input[index -1 ])
	
	return resultarray;
}
};

function SelectionSort(arr, left, right){
   var len = arr.length, 
   pivot =arr.left,
   partitionIndex;


  if(left < right){
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);
    
   //sort left and right
   SelectionSort(arr, left, partitionIndex - 1);
   SelectionSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

function partition(arr, pivot, left, right){
   var pivotValue = arr[pivot],
       partitionIndex = left;

   for(var i = left; i < right; i++){
    if(arr[i] < pivotValue){
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

function swap(arr, i, j){
   var temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}
    
   
module.exports = quickSort;