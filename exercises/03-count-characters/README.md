# Exercise 3: Count Characters

### Goal

To refactor the [index.js](./index.js) file to use [reduce](./helpers/reduce-stateless.js) to count the number of occurences of all characters in the provided string, removing as many references to any in-function state as possible while maintaining readability.

### Bonus Points

+ Use [R.reduce](http://ramdajs.com/docs/#reduce) instead.
+ Study the simplified stateful and stateless reducers in the [helpers](./helpers/) directory and figure out the differences.

### Test

```
$ yarn jest exercises/03-count-characters
```
