import * as R from "ramda";

const Index = () => {
  const greet = R.replace("{name}", R.__, "Hello, {name}!");
  greet("Alice"); //=> 'Hello, Alice!'

  R.add(2, 3); //=>  5
  R.add(7)(10); //=> 17

  const mapIndexed = R.addIndex(R.map);
  mapIndexed((val, idx) => idx + "-" + val, ["f", "o", "o", "b", "a", "r"]);
  //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']

  const equals3 = R.equals(3);
  R.all(equals3)([3, 3, 3, 3]); //=> true
  R.all(equals3)([3, 3, 1, 3]); //=> false

  return <div>surferboy</div>;
};

export default Index;
