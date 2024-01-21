import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/app/components/navigation";
import AuthContext from "@/app/context/AuthContext";
import getCurrentUser from "@/app/actions/getCurrentUser";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prima Auth",
  description: "Prisma Auth Tutorial",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ログインユーザー情報を取得
  const currentUser = await getCurrentUser();
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <div className="flex min-h-screen flex-col">
            <Navigation
              // currentUser={currentUser}
            /> {/* ログインユーザーの情報を渡す */}

            <main className="container mx-auto max-w-screen-sm flex-1 px-1 py-5">{children}</main>

            <footer className="py-5">
              <div className="text-center text-sm">
                Copyright &copy; All rights reserved | Pan
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
