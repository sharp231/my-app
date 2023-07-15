import { Inter } from "next/font/google";
import { Footer } from "@/Components/Footer";
import { Main } from "@/Components/Main";
import { Header } from "@/Components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Main page="index" />
      <Footer />
      <Header />
    </main>
  );
}
