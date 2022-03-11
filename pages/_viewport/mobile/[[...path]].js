import { useRouter } from "next/router"

export default function Mobile() {
  const router = useRouter()

  if (router.isReady) {
    console.log(router)
  }

  return "This loads on mobile"
}
