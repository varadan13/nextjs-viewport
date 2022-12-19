import { chunk, differenceWith, isEqual } from "lodash";

const Index = () => {
  chunk(["a", "b", "c", "d"], 2);
  var objects = [
    { x: 1, y: 2 },
    { x: 2, y: 1 },
  ];

  differenceWith(objects, [{ x: 1, y: 2 }], isEqual);
  // => [{ 'x': 2, 'y': 1 }]
  return <div>surferboy</div>;
};

export default Index;
