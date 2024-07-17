type Increment = (x: number) => number;
const increment: Increment = (x) => x + 1;

type Tostring = (x: number) => string;
const tostring: Tostring = (x) => `${x}`;

type IncrementThenString = (x: number) => string;
const increment_then_string: IncrementThenString = (x) =>
  tostring(increment(x));

type Compose = <A, B, C>(f: (x: B) => C, g: (x: A) => B) => (x: A) => C;

const compose: Compose = (f, g) => (x) => f(g(x));

const increment_then_string2 = compose(tostring, increment);
