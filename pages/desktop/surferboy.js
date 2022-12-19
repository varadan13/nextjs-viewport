import * as R from "ramda";

const Index = () => {
  const greet = R.replace("{name}", R.__, "Hello, {name}!");
  greet("Alice"); //=> 'Hello, Alice!'

  R.add(2, 3); //=>  5
  R.add(7)(10); //=> 17

  //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']

  R.adjust(1, R.toUpper, ["a", "b", "c", "d"]); //=> ['a', 'B', 'c', 'd']
  R.adjust(-1, R.toUpper, ["a", "b", "c", "d"]); //=> ['a', 'b', 'c', 'D']

  const equals3 = R.equals(3);
  R.all(equals3)([3, 3, 3, 3]); //=> true
  R.all(equals3)([3, 3, 1, 3]); //=> false

  return <div>surferboy</div>;
};

export default Index;
