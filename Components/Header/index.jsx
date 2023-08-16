import Link from "next/link";

export function Header() {
  return (
    <header>
      <Link href="/">
        {/* Linkコンポートネントは高速で読み込みができる */}
        Index
      </Link>
      <Link href="/about">
        About
      </Link>
    </header>
  );
}
