import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-black w-screen min-h-screen flex flex-col">
      <Navbar />
      <div className="w-full max-w-400 mx-auto px-6 pt-16 flex-1">
        {children}
      </div>
      <Footer />
    </div>
  );
}
