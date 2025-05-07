import { NextResponse } from "next/server";

export function GET() {
  const content =
    "google.com, pub - 5774823019100179, DIRECT, f08c47fec0942fa0"; 
  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
