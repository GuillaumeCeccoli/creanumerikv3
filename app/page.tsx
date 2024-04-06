import HomePage from "@/components/widgets/home";
import NavBar from "@/components/widgets/navbar";

export default function Home() {
  return (
    <main className="background-image p-5 lg:p-10">
      <div className="relative border border-white rounded-lg min-h-screen flex flex-col items-center">
        <NavBar />
        <section className="my-20">
          <HomePage />
        </section>
      </div>
    </main>
  );
}

