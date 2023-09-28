import { Inter } from "next/font/google";
import { Footer } from "src/Components/Footer";
import { Main } from "src/Components/Main";
import { Header } from "src/Components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />
      <Main page="about" />
      <Footer />
    </main>
  ); 
}
