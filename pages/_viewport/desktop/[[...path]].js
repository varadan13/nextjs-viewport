import { useRouter } from "next/router"

export default function Desktop() {
  const router = useRouter()

  if (router.isReady) {
    console.log(router)
  }

  return "This loads on desktop"
}
