import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Gill Cleaning Services | Commercial Cleaning NZ",
  description: "Professional cleaning services across Auckland.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="pt-24">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
