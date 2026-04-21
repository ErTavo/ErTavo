"use client";

import Layout from "@/components/Layout";
import HeadComponent from "@/components/Head";
import PropTypes from "prop-types";
import "@/styles/themes.css";
import "@/styles/global.css";
import { LanguageProvider } from "@/context/LanguageContext";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <HeadComponent title="Gustavo Gutiérrez | Portfolio" />
      <body className={inter.className}>
        <LanguageProvider>
          <Layout>
            {children}
          </Layout>
        </LanguageProvider>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
