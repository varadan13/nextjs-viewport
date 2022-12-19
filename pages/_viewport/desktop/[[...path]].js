import { useRouter } from "next/router";
import * as R from "ramda";

const { identity } = R;

export default function Desktop() {
  const router = useRouter();
  console.log(R.map(identity, [1, 2, 3]));
  if (router.isReady) {
    console.log(router);
  }

  return "This loads on desktop";
}
