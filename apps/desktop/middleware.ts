/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-else-return */
import { NextResponse, userAgent } from "next/server";

const { MOBILE_URL } = process.env;

const testRequestObject = (request) => {
  const paths = ["/demo"];
  return paths.some((path) => request.nextUrl.pathname.startsWith(path));
};

export function middleware(request) {
  const { device } = userAgent(request);
  const url = request.nextUrl.clone();

  if (testRequestObject(request)) {
    if (device.type === "mobile") {
      let path = `/mobile${url.pathname}`;
      //   console.log(url.pathname, MOBILE_URL);
      return NextResponse.redirect(new URL(path, MOBILE_URL));
    }
  }

  return NextResponse.next();
}

export default {};
