function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

var arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
console.log(bubbleSort(arr));

function selectionSort(arr) {
  var len = arr.length;
  var minIndex, temp;
  for (var i = 0; i < len - 1; i++) {
    minIndex = i;
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {     // 寻找最小的元素
        minIndex = j;
      }
    }
    if (i !== minIndex) {               // 元素交换
      temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}
var arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
console.log(selectionSort(arr));

function insertionSort(arr) {
  var len = arr.length;
  var preIndex, current;
  for (var i = 1; i < len; i++) {
    preIndex = i - 1;
    current = arr[i];
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
  }
  return arr;
}
var arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
console.log(insertionSort(arr));

function shellSort(arr){
  var len = arr.length,
      temp,
      gap = 1;
  while(gap < len/5){
    gap = gap*5 + 1;
  }
  for(gap; gap > 0; gap = Math.floor(gap/5)){
    for(var i = gap; i < len; i++){
      temp = arr[i];
      for(var j = i - gap; j >= 0 && arr[j] > temp; j-=gap){
        arr[j + gap] = arr[j];
      }
      arr[j + gap] = temp;
    }
  }
  return arr;
}
var arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
console.log(shellSort(arr));

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var middle = Math.floor(arr.length / 2),
      left = arr.slice(0, middle),
      right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  var result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
}
var arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
console.log(mergeSort(arr));

function quickSort(arr,left, right) {
  var len = arr.length,
      partitionIndex,
      left = typeof left != 'number' ? 0 : left,
      right = typeof right != 'number' ? len - 1 : right;
  if (left < right) {
    partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}
function partition(arr, left, right) {
  var pivot = left,
      index = pivot + 1;
  for (var i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index);
      index++;
    }
  }
  swap(arr, pivot, index - 1);
  return index - 1;
}
function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
var arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
console.log(quickSort(arr));

function heapSort(arr) {
  var len = arr.length;
  buildMaxHeap(arr);
  for (var i = len - 1; i > 0; i--) {
    swap(arr, 0, i);
    len--;
    maxHeapify(arr, 0, len);
  }
  return arr;
}
function buildMaxHeap(arr) {
  var len = arr.length;
  for (var i = Math.floor(len / 2); i >= 0; i--) {
    maxHeapify(arr, i, len);
  }
}
function maxHeapify(arr, i, len) {
  var left = 2 * i + 1,
      right = 2 * i + 2,
      largest = i;
  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest !== i) {
    swap(arr, i, largest);
    maxHeapify(arr, largest, len);
  }
}
var arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
console.log(heapSort(arr));

function countingSort(arr,maxValue){
  var bucket = new Array(maxValue+1),
      sortedIndex = 0;
  for(var i = 0; i < arr.length; i++){
    if(!bucket[arr[i]]){
      bucket[arr[i]] = 0;
    }
    bucket[arr[i]]++;
  }
  for(var j = 0; j < bucket.length; j++){
    while(bucket[j] > 0){
      arr[sortedIndex++] = j;
      bucket[j]--;
    }
  }
  return arr;
}
var arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
console.log(countingSort(arr,345));

function bucketSort(arr,bucketSize){
  if(arr.length <= 1){
    return arr;
  }
  var i,
      minValue = arr[0],
      maxValue = arr[0],
      bucketSize = bucketSize || 5;
  for(i = 1; i < arr.length; i++){
    if(arr[i] < minValue){
      minValue = arr[i];
    }else if(arr[i] > maxValue){
      maxValue = arr[i];
    }
  }
  // 桶的初始化
  var bucketCount = Math.floor((maxValue - minValue)/bucketSize) + 1;
  var buckets = new Array(bucketCount);
  for(i = 0; i < buckets.length; i++){
    buckets[i] = [];
  }
  // 利用映射函数将数据分配到各个桶中
  for(i = 0; i < arr.length; i++){
    buckets[Math.floor((arr[i] - minValue)/bucketSize)].push(arr[i]);
  }
  arr.length = 0;
  for(i = 0; i < buckets.length; i++){
    insertionSort(buckets[i]);
    for(var j = 0; j < buckets[i].length; j++){
      arr.push(buckets[i][j]);
    }
  }
  return arr;
}
var arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
console.log(bucketSort(arr));

function radixSort(arr,maxDigit){
  var counter = [];
  var mod = 10;
  var dev = 1;
  for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
    for(var j = 0; j < arr.length; j++) {
      var bucket = parseInt((arr[j] % mod) / dev);
      if(counter[bucket]==null) {
        counter[bucket] = [];
      }
      counter[bucket].push(arr[j]);
    }
    var pos = 0;
    for(var j = 0; j < counter.length; j++) {
      var value = null;
      if(counter[j]!=null) {
        while ((value = counter[j].shift()) != null) {
          arr[pos++] = value;
        }
      }
    }
  }
  return arr;
}
var arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
radixSort(arr,5643)
