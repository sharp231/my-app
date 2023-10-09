import { Inter } from "next/font/google";
import { Footer } from "src/Components/Footer";
import { Main } from "src/Components/Main";
import { Header } from "src/Components/Header";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const handleClick = (e) => {
  console.log(e.target.href);
  e.preventDefault();
  alert(foo);
};

export default function Home() {
  const foo = 1;

  // const handleClick = (e) => {
  //   console.log(e.target.href);
  //   e.preventDefault();
  //   alert(foo);
  // };

  return (
    <main>
      <Header />
      <Link
        href="/about"
        onClick={handleClick}
      >ボタン</Link>

      <Main page="index" />
      <Footer />
    </main>
  );
}
