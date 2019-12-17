# example exercises

## Insertion sort
### Description:
Sort an array using insertion sort, and return the array with the elements in order
### Test data
```
group 1: 54,12,413,321
group 2: 12,2,43,76,54
```
### Example Code Language
python
### Example Code
```
def insertionSort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j=i-1
        while j >=0 and key < arr[j]:
            arr[j+1]=arr[j]
            j=j-1
        arr[j+1]=key
    return arr

```
### Expected Return
```
12, 54, 321, 413
2, 12, 43, 54, 76
```

## Fibonacci serie
### Description:
Get the nth number of the fibonacci serie. The function takes an int paramter and returns an int value.
### Test data
```
group 1: 3
group 2: 4
group 3: 5
```
### Example Code Language
javascript
### Example Code
```
function fib(n) { 
    if (n < 2) {
    return 1;
    }
    
    var a = 1, b = 1; 
    for (var i = 2; i < n - 1 ;i++ ) { 
        b = a + b;
        a = b - a; 
        } 
        return a + b; 
        }

```
### Expected Return
```
 2
 3
 4
```

## Concat string
### Description:
Concat two strings and print the string. The function takes two string paramters and prints an string without return value.
### Test data
```
group 1: "hel","lo"
group 2: "wor","ld"
```
### Example Code Language
javascript
### Example Code
```
function concatStr(a,b){
    console.log(a+b)
}

```
### Expected Return
```
 hello
 world
```

## Get os type in javascript
### Description:
Print the os type by using os module
### Example Code Language
javascript
### Example Code
```
var os = require('os')
console.log(os.type())

```
### Expected Return
```
 Linux
```

## Get os type in python
### Description:
Print the os type by using sys module
### Example Code Language
python
### Example Code
```
import sys
print(sys.platform)

```
### Expected Return
```
 linux2
```
