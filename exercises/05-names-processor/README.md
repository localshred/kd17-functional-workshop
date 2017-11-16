# Exercise 5: Process a string of names

### Goal

To refactor the [index.js](./index.js) so that each name in the given string has been sorted and the first letter capitalized. You also don't want to make the mistake of leaving my name as `Bj`, at least if you don't want to suffer the consequences :). BJ's my name, don't wear it out. To accomplish this task you should use [R.pipe](http://ramdajs.com/docs/#pipe) in addition to all of the skills we've developed thus far.

___Tip___: Ramda's [compose](http://ramdajs.com/docs/#compose) function works similarly to `pipe`. The main difference is that `compose` works right-to-left, where `pipe` works left-to-right. I find `compose` usually confuses more people than not, so I _almost always_ use `pipe`. But you should know about `compose`, as most functional languages and libraries use it extensively.

### Test

```
$ yarn jest exercises/05-names-processor
```
