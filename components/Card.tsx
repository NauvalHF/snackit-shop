"use client"

interface SnackCardProps {
  name: string;
  price: string;
  image: string;
  tag?: string;
}

export default function SnackCard({ name, price, image, tag }: SnackCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-secondary/5 border border-foreground/10 transition-all hover:border-secondary/50 hover:shadow-2xl hover:shadow-secondary/20">
      
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        {tag && (
          <span className="absolute top-3 left-3 z-10 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-background">
            {tag}
          </span>
        )}
        <img 
          src={image} 
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Subtle dark overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-foreground mb-1">
          {name}
        </h3>
        <p className="text-lg font-medium text-secondary">
          {price}
        </p>
        
        <button className="mt-4 w-full rounded-xl bg-foreground py-3 font-bold text-background transition-all active:scale-95 hover:bg-secondary hover:text-background">
          Add to Cart
        </button>
      </div>
    </div>
  );
}