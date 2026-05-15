export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        
        {/* The Main "Split" Card */}
        <div className="flex flex-col md:flex-row items-center overflow-hidden rounded-3xl bg-secondary/5 border border-foreground/10 shadow-2xl">
          
          {/* Left Side: Picture */}
          <div className="w-full md:w-1/2 h-[300px] md:h-[500px] relative">
            <img 
              src="https://images.unsplash.com/photo-1534422298391-e4f8c170db76?q=80&w=2070&auto=format&fit=crop" 
              alt="Our Story"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Subtle overlay to match the cinematic vibe */}
            <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply" />
          </div>

          {/* Right Side: Description */}
          <div className="w-full md:w-1/2 p-8 md:p-16">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">
              Our Story
            </span>
            <h2 className="text-4xl font-bold text-foreground mt-4 mb-6 leading-tight">
              Bikin Ngemil Jadi <br /> Pengalaman Berbeda.
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-8">
              Dimulai dari dapur kecil, kami percaya bahwa setiap gigitan punya cerita. 
              Kami meracik bumbu rahasia untuk memastikan setiap tekstur macaroni 
              dan basreng kami memberikan kepuasan maksimal buat teman nonton kamu.
            </p>
            
            <div className="flex gap-6">
              <div>
                <h4 className="text-2xl font-bold text-secondary">100%</h4>
                <p className="text-sm text-foreground/50 uppercase">Higenis</p>
              </div>
              <div className="border-l border-foreground/20 pl-6">
                <h4 className="text-2xl font-bold text-secondary">Premium</h4>
                <p className="text-sm text-foreground/50 uppercase">Ingredients</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}