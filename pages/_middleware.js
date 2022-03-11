import { NextResponse } from "next/server"

/**
 * @todo Add your own logic here to differentiate on the user's device
 * @param {import("next/server").NextRequest["ua"]} ua
 */
function getViewport(ua) {
  const mobiles = ["android", "ios"]
  const name = ua.os.name.toLowerCase()
  return mobiles.includes(name) ? "mobile" : "desktop"
}

/** @type {import("next/server").NextMiddleware} */
export function middleware(req) {
  const url = req.nextUrl.clone()

  // Prevent internals from being accessed canonically
  // (i.e. if you try to go to example.com/_viewport it should give a 404)
  if (url.pathname.startsWith(`/_viewport`)) {
    return new Response(null, { status: 404 })
  }

  // Add your own logic to split
  const viewport = getViewport(req.ua)

  url.pathname = `_viewport/${viewport}${url.pathname}`

  console.log(url.toString())
  return NextResponse.rewrite(url)
}
