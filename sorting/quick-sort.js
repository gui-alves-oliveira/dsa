function quickSort(arr, left, right) {
  if (left < right) {
    let p = partition(arr, left, right);

    quickSort(arr, left, p - 1);
    quickSort(arr, p + 1, right);
  }
}

function partition(arr, left, right) {
  let { pivot, pivotPosition } = getMedianOfTree(arr, left, right);
  swap(arr, pivotPosition, right);

  let i = left - 1;

  for (let j = left; j <= right - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }

  swap(arr, i + 1, right);
  return i + 1;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function getMedianOfTree(arr, left, right) {
  let middle = Math.floor((left + right) / 2);

  let medianArray = [
    { value: arr[left], position: left },
    { value: arr[middle], position: middle },
    { value: arr[right], position: right }
  ];

  medianArray.sort((a, b) => a.value - b.value);

  return {
    pivot: medianArray[1].value,
    pivotPosition: medianArray[1].position
  };
}

let arr = [5, 2, 23, 44, 51, 3, 66, 102, 77, 33, 13, 15, 21];
quickSort(arr, 0, arr.length - 1);

console.log("sorted array: ", JSON.stringify(arr));
