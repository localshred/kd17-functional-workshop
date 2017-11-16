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

## Where do I go from here?

+ Tutorials / Blog Posts
  + [Professor Frisby's Mostly Adequate Guide To Functional Programming](https://drboolean.gitbooks.io/mostly-adequate-guide/) - The first 6 or 7 chapters are pure gold, and the others make me want to learn to be an astronaut so I can understand them one day too. Well worth the time invested to take it slow and really soak it in. I've gone through it multiple times and each time I understand more and more. Written by a pillar of the FP community, [@drboolean](https://twitter.com/drboolean).
  + [Favoring Curry](http://fr.umio.us/favoring-curry/)
  + [Why Curry Helps](https://hughfdjackson.com/javascript/why-curry-helps/)
  + [Hey Underscore, You're Doing It Wrong!](https://www.youtube.com/watch?v=m3svKOdZijA&app=desktop)
  + [Introducing Ramda](http://buzzdecafe.github.io/code/2014/05/16/introducing-ramda)
  + [Why Ramda?](http://fr.umio.us/why-ramda/)
  + [Thinking In Ramda](http://randycoulman.com/blog/categories/thinking-in-ramda) - Whole series of posts, highly recommended.
  + [Transducers Explained, Part 1](http://simplectic.com/blog/2014/transducers-explained-1/) - Really insightful post that finally helped me _get_ transducers. [Part 2 here](http://simplectic.com/blog/2014/transducers-explained-pipelines/).
+ Languages
  + Elm - Haskell-like language that "compiles" to front-end JavaScript, wicked fast performance often beating React in benchmarks. But that's not why you should look at it. Elm is a game changer and it'll change how you think and build programs.
  + Clojure - A LISP built on the JVM with phenomenal Java interop.
  + Elixir - If Erlang and Ruby had a baby (ignoring all of Ruby's OO tools), it would be Elixir. Initially funky but nearly instantly loveable, Elixir (really because of Erlang) will also change the way you think about building distributed applications.
  + Erlang - Because for all it's syntactic difficulties, the Erlang community wrote the book on distributed programming with rock solid resiliency.
  + Haskell - Because it'll simultaneously scare you to death but also woo you into thinking the fabric of the universe was written with it. (But unfortunately it was mostly [perl](https://xkcd.com/224/).)
+ Books
  + _Seven Languages in Seven Weeks_ (Tate, [Amazon](http://a.co/eKjUzNj)) - Really great resource for getting a shallow view of a bunch of languages. This book covers Clojure, Haskell, Io, Prolog, Scala, Erlang, and Ruby.
  + _Seven More Languages in Seven Weeks_ (Tate, [Amazon](http://a.co/d1k1PMr)) - This book covers much more esoteric (at the time) languages than it's predecessor. It covers Lua, Factor, Elixir, Elm, Julia, MiniKanren, and Idris. Both Elm and Elixir have gone on to see some really significant adoption in the last few years.
  + Any book written for one of the languages above.

-----

You can contact me via [github](https://github.com/localshred), [twitter](https://twitter.com/localshred), or email (bj at kuali dot co) if you have any additional questions about this workshop. Happy learning!
