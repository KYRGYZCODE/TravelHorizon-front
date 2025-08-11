import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header />

      <section className="relative min-h-[92vh]">
        <div className="absolute inset-0">
          <img src="/hero.jpg" alt="" className="h-full w-full object-cover" />
        </div>

        <div className="h-16" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="pt-[44vh] md:pt-[44vh] xl:pt-[48vh] text-white uppercase font-semibold tracking-wide leading-[0.98] text-5xl md:text-7xl xl:text-8xl drop-shadow">
            Travel in<br /> Central Azia<br /> with us
          </h1>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/35" />
      </section>
    </main>
  );
}
