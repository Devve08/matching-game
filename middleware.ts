import { NextResponse } from "next/dist/server/web/spec-extension/response";

export default function middleware(req: any) {
  let verify = req.cookies.get("loggedInUser");
  let url = req.url;

  if (!verify && url.includes("/home")) {
    if (url == "http://localhost:3000/home") {
      return NextResponse.redirect("http://localhost:3000/");
    }
    if (url == "https://memory-game-blond-nine.vercel.app/home") {
      return NextResponse.redirect(
        "https://memory-game-blond-nine.vercel.app/"
      );
    }
  }
  if (
    verify &&
    (url == "http://localhost:3000/" ||
      url == "https://memory-game-blond-nine.vercel.app/")
  ) {
    if (url == "http://localhost:3000/") {
      return NextResponse.redirect("http://localhost:3000/home");
    }
    if (url == "https://memory-game-blond-nine.vercel.app/") {
      return NextResponse.redirect(
        "https://memory-game-blond-nine.vercel.app/home"
      );
    }
  }
}
