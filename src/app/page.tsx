import Link from "next/link";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen">
      <main>
        <Link href="/search">Click here to search sailings</Link>
      </main>
    </div>
  );
}
