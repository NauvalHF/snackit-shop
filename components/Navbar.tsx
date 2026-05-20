import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-foreground/5 bg-background/60 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
         
        <Link href="/" className="text-2xl font-black tracking-tighter text-secondary">
          SNACK<span className="text-foreground">SHOP.</span>
        </Link>
 
        <div className="flex items-center gap-2">
          <ul className="hidden md:flex items-center space-x-1">
            {['Home', 'About', 'Menu', 'Contact'].map((item) => (
              <li key={item}>
                <Link 
                  href={`#${item.toLowerCase().replace(' ', '')}`} 
                  className="group relative px-4 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-foreground"
                >
                  {item} 
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-secondary transition-all duration-300 group-hover:w-1/2" />
                </Link>
              </li>
            ))}
          </ul> 
          <div className="flex items-center border-l border-foreground/10 ml-4 pl-4 gap-4">
            <ThemeToggle /> 
          </div>
        </div>
      </div>
    </nav>
  );
}