import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "エンジニアスキルシート",
  description: "エンジニアの技術スキルと経歴を見やすくまとめたスキルシート",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
