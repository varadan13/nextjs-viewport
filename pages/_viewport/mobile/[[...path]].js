import { useRouter } from "next/router";
import { chunk } from "lodash";

export default function Mobile() {
  const router = useRouter();
  console.log(chunk(["a", "b", "c", "d"], 2));
  if (router.isReady) {
    console.log(router);
  }

  return "This loads on mobile";
}
