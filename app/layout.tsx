import "./globals.css";
import Nav from "./NavBar";
import Footer from "./Footer";

export const metadata = {
  title: "SHARE - IIT Kharagpur",
  description:
    "SHARE IIT Kharagpur provides expert finance and consulting services tailored for students. Get financial planning, investment advice, and consulting services from industry professionals at IIT Kharagpur.",
  icons: {
    icon: "/favicon.ico",
  },
};
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
