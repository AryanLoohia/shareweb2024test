import "./globals.css";
import Nav from "./NavBar";
import Footer from "./Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Nav></Nav>
        <main>
          <div className="mt-20 overflow-auto custom-scrollbar">{children}</div>
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
