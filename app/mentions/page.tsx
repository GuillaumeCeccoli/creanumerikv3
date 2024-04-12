import Footer from "@/components/widgets/footer";
import NavBar from "@/components/widgets/navbar";

export default function Mentions() {
  return (
    <main className="relative background-image p-5 lg:p-10">
      <div className="lg:border lg:border-white rounded-lg min-h-screen flex flex-col items-center">
        <NavBar />
        <section className="flex flex-col items-center gap-4 my-40">
          <h1 className="text-white font-bold">Mentions légales : </h1>
          <div className="flex flex-col items-center text-white gap-8 text-sm text-center">
            <h2 className="underline">Editeur du site : </h2>
            <p>
              <strong>Nom et prénom :</strong> Guillaume Ceccoli
            </p>
            <p>
              <strong>Entreprise : </strong>CréaNumerik04
            </p>
            <p>
              <strong>Adresse : </strong>
              86 chemin de la muraille neuve 04230 Saint-Etienne-Les-Orgues
            </p>
            <p>
              <strong>Pays : </strong>France
            </p>
            <p>
              <strong>Courriel : </strong>contact@creanumerik04-gc.fr
            </p>
            <p>
              <strong>Téléphone : </strong>06 75 97 31 18
            </p>
            <p>
              <strong>SIRET :</strong> 98036273500014
            </p>
            <p>
              <strong>Non assujetti à la TVA</strong>
            </p>
          </div>
        </section>
        <footer className="mb-10">
          <Footer />
        </footer>
      </div>
    </main>
  );
}

