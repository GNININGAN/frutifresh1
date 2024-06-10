import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ReduxProvider } from "@/redux/provider";
import { Toaster } from "@/components/ui/toaster";
const josefin = Josefin_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "FrutiFresh",
  description: "Platforme ecommerce de venter des plats de frut et de reception des commandes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={josefin.className}>
        <ReduxProvider>
          <AntdRegistry>
            <Toaster />
            {children}
          </AntdRegistry>
        </ReduxProvider>


      </body>
    </html>
  );
}
