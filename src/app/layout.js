import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import AppProvider from "../components/AppContext";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({ subsets: ["latin"], weight: ['400', '500', '700'] });

export const metadata = {
  title: "Ordering App",
  description: "An application that makes it easy to order",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={roboto.className}>
        <main className="max-w-4xl mx-auto p-4">
          <AppProvider>
            <Toaster />
            <Header/>
            {children}
            <footer className="border-t p-8 text-center text-gray-500 mt-16">
              <div className="container mx-auto">
                &copy; 2024 All right reserved
              </div>
            </footer>
          </AppProvider>
        </main> 
      </body>
    </html>
  );
}