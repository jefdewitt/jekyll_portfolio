---
layout: post
title:  "Array .sort Method"
image: sort.jpg
date: 2018-01-01 09:32:11 -0400
categories: JavaScript
---
Sorting arrays used to give me the heebies. Hell, arrays used to give me the heebies when I first started out less than 
three years ago. But I've gotten a *lot* better since then or I've become a lot less afraid -- take your pick ;)

Back to the matter at hand; sorting arrays. Good ol' JavaScript has a built in array `.sort()` method that takes all the
pain out of lining your ducks up in a row. But there's a gotcha to watch out for and I'm here to show ya how to deal with
it.

## Array.prototype.sort()

The `.sort()` sorts the elements inside an array and returns that array. Meaning the array itself is changed. Use it 
like so:

```javascript
var rando = ['blue', 'apples', 2, 10];
rando.sort(); // ['apples', 'blue', 10, 2];
```

Did ya spot the gotcha?? An interesting thing about this method is that the elements of the array are converted to 
strings. So, '1' *and* '0' come before '2' (instead of being interpreted as the number 10) and end up sorted before it in the resulting sorted array. And I'm not finished. The sorting actually occurs via Unicode code points, which I don't know exactly what that means, but I do know that will also result in uppercase words sorting before lowercase words. For more info check out this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort){:target="_blank"}.

## The Compare Function

The ace in the hole is an optional callback you can pass the `.sort()` to iron out these Unicode quirks. By adding a 
simple compare function that compares the values of two items in the array we can ensure that numerical and alphabetical
integrity is maintained. Ha! 'Alphabetical integrity'. [Shaking my head] The stuff I come up with.

Basically what this does when two values are compared is the compare function returns a positive, equal, or negative value. 
An equal return value results in no change. A negative return value means the first value is smaller than the second 
value so it is sorted before the second value (the order remains the same). A positive return value means the first value is 
larger than the second and that results in the first value being sorted after the second value. During the next iteration of 
the sort, while the first value remains as before, the second value now becomes the next item in the array.

```javascript
var rando = ['blue', 'apples', 2, 10];

function sortFunction(rando) {

  var clone = source.slice(0);
  var sorted = clone.sort(CompareForSort);

  function CompareForSort(first, second) {  
    return (first - second)  
  }  
}
var sortedArray = sortFunction(rando);
console.log(sortedArray); // ['apples', 'blue', 2, 10];
```
