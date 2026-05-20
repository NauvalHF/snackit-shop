export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground">Ready to Crunch?</h2>
          <p className="text-foreground/60 mt-4">Order now or ask us anything about our snacks.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
           
          <div className="space-y-8">
            <div className="bg-secondary/5 border border-foreground/10 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Info</h3>
              
              <div className="space-y-6">
                <a href="https://wa.me/yournumber" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center transition-transform group-hover:scale-110">
                    <span className="text-background text-xl">📱</span>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/50 uppercase font-bold">WhatsApp</p>
                    <p className="text-lg text-foreground">+62 812-XXXX-XXXX</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-foreground/10 flex items-center justify-center">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/50 uppercase font-bold">Location</p>
                    <p className="text-lg text-foreground">Malang, East Java, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
 
            <div className="bg-secondary p-8 rounded-3xl text-background">
              <h4 className="text-xl font-bold">Beli 3, Diskon 10%!</h4>
              <p className="opacity-90">Promo khusus buat kamu yang lagi marathon film.</p>
            </div>
          </div>
 
          <form className="bg-secondary/5 border border-foreground/10 p-8 rounded-3xl space-y-4">
            <div>
              <label className="text-sm font-bold text-foreground/70 mb-2 block">Name</label>
              <input 
                type="text" 
                className="w-full bg-background border border-foreground/10 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm font-bold text-foreground/70 mb-2 block">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-background border border-foreground/10 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors"
                placeholder="I want to order the Spicy Basreng..."
              />
            </div>
            <button className="w-full bg-foreground text-background font-bold py-4 rounded-xl hover:bg-secondary transition-all active:scale-95">
              Send Message
            </button>
          </form>
        </div>
 
        <footer className="mt-24 pt-8 border-t border-foreground/10 text-center text-foreground/40 text-sm">
          <p>© 2026 Your Snack Shop. Created with passion in Indonesia.</p>
        </footer>
      </div>
    </section>
  );
}