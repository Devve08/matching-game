import { NextResponse } from "next/dist/server/web/spec-extension/response";

export default function middleware(req: any) {
  ;
  let verify = req.cookies.get("loggedInUser");
  let url = req.url;

  if (!verify && url.includes("/home")) {
    return NextResponse.redirect("http://localhost:3000/");
  }
  if (verify && url == "http://localhost:3000/") {
    return NextResponse.redirect("http://localhost:3000/home");
  }
}
