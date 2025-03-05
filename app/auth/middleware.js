import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("access_token")?.value;

  if (!token && request.nextUrl.pathname.startsWith("/profile")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*"],
};
