import HomePage from "@/components/widgets/home";
import NavBar from "@/components/widgets/navbar";
import Realisations from "@/components/widgets/realisations";
import Skills from "@/components/widgets/skills";

export default function Home() {
  return (
    <main className="relative background-image p-5 lg:p-10">
      <div className="border border-white rounded-lg min-h-screen flex flex-col items-center">
        <NavBar />
        <section className="mt-20">
          <HomePage />
        </section>
        <section className="mb-20">
          <Realisations />
        </section>
        <section className="mb-20">
          <Skills />
        </section>
      </div>
    </main>
  );
}

