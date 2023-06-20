import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
      <Header />
      <Main />
      <Footer />
    </main>
  );
}
