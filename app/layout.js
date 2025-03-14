import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/footer";
import { Toaster } from "sonner";

const bricolageGrotesque = Bricolage_Grotesque({subsets:["latin"],
  weight: ["400", "500", "700"],
})

export const metadata = {
  title: "SwtFyn",
  description: "Keep Your Spending In Check",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${bricolageGrotesque.className}`}
      >
        {/*header*/}
        <Header />
        <main className="min-h-screen">{children}</main>
        <Toaster richColors/>
        {/*footer*/}
        <Footer />
      </body>
    </html>
    </ClerkProvider>
  );
}