# KualiDays '17: Functional Programming Workshop

## Presenter: BJ Neilsen (@localshred everywhere)

![Sweet!](./napoleon.gif)

### Install Node and Package Dependencies

In order to work on the code in this workshop you will need the following:

+ Get a copy of NodeJS, preferrably anything older than 7.x. I used v8.2.1 for this workshop. [Download Instructions](https://nodejs.org/en/download/)
+ Once you have node installed: `npm install -g yarn`
+ Then install dependencies: `yarn`
+ You _should_ be good to go. To run your tests, run: `yarn test`. You should get a bunch of green tests. If so, congratulations, you are ready to rock!

### Exercises

All of the exercises are in... you guessed it, the `exercises` folder. The first 5 exercises contain some code in the `index.js` file
which should be refactored based on the concepts you've been learning in the workshop. I've provided some cheater answers
in each exercise if you need some help, but do your best to figure it out on your own. The first 5 exercises also have an
accompanying test to verify that the function still operates as expected through your refactoring. You should avoid changing
the tests to fit your implementation.

The last two exercises are from the popular coding challenge site [Advent of Code](http://adventofcode.com/2015/) (for year 2015).
They are distinctly Christmas themed for your problem solving enjoyment. The point of this workshop is to start learning to program
in a more functional manner, so try to avoid solving these problems with object-oriented techniques. Really try to apply the lessons
you've been learning today.

1. Map: [Cube a list of numbers](./exercises/01-cube-numbers/index.js)
2. Filter: [Get the odd numbers from a list of numbers](./exercises/02-odd-numbers/index.js)
3. Reduce: [Get an object of character counts from a sentence](./exercises/03-count-characters/index.js)
4. Currying & Partial Application: [Add a number to all numbers in a list](./exercises/04-map-add/index.js)
5. Pipes & Composition: [Process a string containing a list of names](./exercises/05-names-processor/index.js)
6. [Advent of Code 2015 Day 1](./exercises/06-advent-day-1/index.js)
7. [Advent of Code 2015 Day 2](./exercises/07-advent-day-2/index.js)
8. ...

-----

You can contact me via [github](https://github.com/localshred), [twitter](https://twitter.com/localshred), or email (bj at kuali dot co) if you have
any additional questions about this workshop. Happy learning!

