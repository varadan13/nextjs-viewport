/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-else-return */
import { NextResponse, userAgent } from "next/server";

const testRequestObject = (request) => {
  const paths = ["/newboy", "/surferboy"];
  return paths.some((path) => request.nextUrl.pathname.startsWith(path));
};

export function middleware(request) {
  const { device } = userAgent(request);
  const url = request.nextUrl.clone();
  if (testRequestObject(request)) {
    if (device.type === "mobile") {
      return NextResponse.rewrite(
        new URL(`/mobile${url.pathname}`, request.url)
      );
    } else {
      return NextResponse.rewrite(
        new URL(`/desktop${url.pathname}`, request.url)
      );
    }
  }

  return NextResponse.next();
}

export default {};
