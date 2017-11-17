# KualiDays '17: Functional Programming Workshop

## Presenter: BJ Neilsen (@localshred everywhere)

+ [Here are the Slides](https://docs.google.com/presentation/d/1H0Du-Qanr6ZdWiyy4HkCBw68_RkfcFxdSpg889L-Jt0/edit?usp=sharing)

![Sweet!](./napoleon.gif)

### Install Node and Package Dependencies

In order to work on the code in this workshop you will need the following:

+ Get a copy of NodeJS, preferrably anything older than 7.x. I used v8.2.1 for this workshop. [Download Instructions](https://nodejs.org/en/download/)
+ Once you have node installed: `npm install -g yarn`
+ Then install dependencies: `yarn`
+ You _should_ be good to go. To run your tests, run: `yarn jest`. You should get a bunch of green tests. If so, congratulations, you are ready to rock!

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
  + [Introducing Ramda](http://buzzdecafe.github.io/code/2014/05/16/introducing-ramda)
  + [Why Ramda?](http://fr.umio.us/why-ramda/)
  + [Thinking In Ramda](http://randycoulman.com/blog/categories/thinking-in-ramda) - Whole series of posts, highly recommended.
  + [Transducers Explained, Part 1](http://simplectic.com/blog/2014/transducers-explained-1/) - Really insightful post that finally helped me _get_ transducers. [Part 2 here](http://simplectic.com/blog/2014/transducers-explained-pipelines/).
  + [Object Oriented Programming is an expensive disaster which must end](http://www.smashcompany.com/technology/object-oriented-programming-is-an-expensive-disaster-which-must-end) - Pretty flame-baity title that goes to a lot of trouble to absolutely demolish the OO paradigm. Not for the faint of heart, but I found it a really instructive article, certainly worth consideration. No paradigm is without its flaws, FP included. YMMV. :)
+ Intro Videos
  + [Functional Programming Patterns for the Non-Mathmatician](https://www.youtube.com/watch?v=AvgwKjTPMmM)
  + [Oh Composable World!](https://www.youtube.com/watch?v=SfWR3dKnFIo)
  + [A Million Ways to Fold in JS](https://www.youtube.com/watch?v=JZSoPZUoR58)
  + [Hey Underscore, You're Doing It Wrong!](https://www.youtube.com/watch?v=m3svKOdZijA&app=desktop)
  + [How I learned to Stop Worrying and Love Higher-Order Functions](https://www.youtube.com/watch?v=d1KPN2YQpSs)
+ Advanced Videos
  + [Reactive Game Development for the Discerning Hipster](https://www.youtube.com/watch?v=x8mmAu7ZR9Y&t=727s)
  + [PureScript (maybe this time we get JavaScript right)](https://www.youtube.com/watch?v=yIlDBPiMb0o)
+ Languages
  + [Elm](http://elm-lang.org/) - Haskell-like language that "compiles" to front-end JavaScript, wicked fast performance often beating React in benchmarks. But that's not why you should look at it. Elm is a game changer and it'll change how you think and build programs.
  + [Clojure](https://clojure.org/) - A LISP built on the JVM with phenomenal Java interop.
  + [Elixir](http://elixir-lang.github.io/) - If Erlang and Ruby had a baby (ignoring all of Ruby's OO tools), it would be Elixir. Initially funky but nearly instantly loveable, Elixir (really because of Erlang) will also change the way you think about building distributed applications.
  + [Erlang](https://www.erlang.org/) - Because for all it's syntactic difficulties, the Erlang community wrote the book on distributed programming with rock solid resiliency.
  + [Haskell](https://haskell-lang.org/) - Because it'll simultaneously scare you to death but also woo you into thinking the fabric of the universe was written with it. (But unfortunately it was mostly [perl](https://xkcd.com/224/).)
+ Books
  + [Seven Languages in Seven Weeks (Tate)](http://a.co/eKjUzNj) - Really great resource for getting a shallow view of a bunch of languages. This book covers Clojure, Haskell, Io, Prolog, Scala, Erlang, and Ruby. Som of these languages are not strictly Functional languages, but will simply give you a broader perspective of langauges and language design.
  + [Seven More Languages in Seven Weeks (Tate)](http://a.co/d1k1PMr) - This book covers much more esoteric (at the time) languages than it's predecessor. It covers Lua, Factor, Elixir, Elm, Julia, MiniKanren, and Idris. Both Elm and Elixir have gone on to see some really significant adoption in the last few years. Som of these languages are not strictly Functional languages, but will simply give you a broader perspective of langauges and language design.
  + [The Little Schemer](http://a.co/etVBNdu) - MIT book on learning Scheme, an early LISP.
  + [Land of LISP](http://a.co/cX4s2yr) - Really fun book to work through to learn CommonLISP by building little games.
  + [Functional Javascript (Fogus)](http://a.co/54blhtW)
  + Any book written for one of the languages above.

-----

You can contact me via [github](https://github.com/localshred), [twitter](https://twitter.com/localshred), or email (bj at kuali dot co) if you have any additional questions about this workshop. Happy learning!
