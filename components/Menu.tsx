import SnackCard from "./Card";

export default function Menu() {
  return (
    <section id="menu" className="py-20 px-6 bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Our Best Sellers
        </h2>

        {/*  Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <SnackCard
            name="Basreng Pedas Daun Jeruk"
            price="Rp 15.000"
            image="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800&auto=format&fit=crop"
            tag="Best Seller"
          />{" "}
          <SnackCard
            name="Basreng Pedas Daun Jeruk"
            price="Rp 15.000"
            image="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800&auto=format&fit=crop"
            tag="Best Seller"
          />{" "}
          <SnackCard
            name="Basreng Pedas Daun Jeruk"
            price="Rp 15.000"
            image="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800&auto=format&fit=crop"
            tag="Best Seller"
          />{" "}
          <SnackCard
            name="Basreng Pedas Daun Jeruk"
            price="Rp 15.000"
            image="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800&auto=format&fit=crop"
            tag="Best Seller"
          />
        </div>
      </div>
    </section>
  );
}
