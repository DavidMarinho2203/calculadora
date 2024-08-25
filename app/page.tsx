"use client"
import Link from "next/link";



export default function Home() {

  return (
    <div id="main">
      <Link href="/Calculator" id="btn_Start">Start Calculator</Link>
    </div>
  );
}
