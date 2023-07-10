import { Inter } from "next/font/google";
import { Footer } from "@/Components/Footer";
import { Main } from "@/Components/Main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Main page="index" />
      <Footer />
    </main>
  );
}
