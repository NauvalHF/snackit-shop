export default function Hero() {
  return (
    <section id="hero" className="flex h-screen">
      <img
        alt="Hero Background"
        className="absolute inset-0 h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1646565741744-9f798eb40271?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-bold text-foreground md:text-7xl">
          Find your favorite snack
        </h1>
        <p className="mt-4 text-xl text-foreground/80">
          the most complete snack
        </p>
        <button className="mt-8 rounded bg-secondary px-8 py-3 font-bold text-foreground hover:brightness-110">
          Check Out
        </button>
      </div>
    </section>
  );
}
