import { Inter } from "next/font/google";
import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import "./base.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create React App",
  description: "Generated by create react app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
