import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "カミオカンデ探検 - ニュートリノ観測の世界",
  description: "カミオカンデ、スーパーカミオカンデ、ハイパーカミオカンデについてわかりやすく学べるアプリ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-gradient-to-b from-blue-900 to-black min-h-screen">
        {children}
      </body>
    </html>
  );
}