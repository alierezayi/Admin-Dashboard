import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import SideMenu from "@/components/SideMenu/SideMenu";
import NextAuthProvider from "@/providers/NextAuthProvider";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";
import { CssBaseline } from "@mui/material";
import ThemeRegistry from "../providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin-Dashboard",
  description: "",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <ThemeRegistry options={{ key: "mui" }}>
            <Header />
            {session && <SideMenu />}
            {children}
          </ThemeRegistry>
        </NextAuthProvider>
      </body>
    </html>
  );
}
