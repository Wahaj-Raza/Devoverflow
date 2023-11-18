import { ClerkProvider } from "@clerk/nextjs";
import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
import React from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weights: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variables: "--font-inter",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weights: ["300", "400", "500", "600", "700"],
  variables: "--font-spaceGrotesk",
});
export const metadata: Metadata = {
  title: "DevOverflow",
  description:
    "A community-driven platform for asking and answering programming questions. Get help, share knowledge and collaborate with developers from around the world. Explore topics in Web Development, mobile app development, algorithms, data science, data structures and more",
  icons: { icon: "/assets/images/site-logo.svg" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: "primary-gradient",
          footerActionLink: "primary-test-gradient hover:test-primary-500",
        },
      }}
    >
      <html lang="en">
        <body className={"${inter.variable} ${spaceGrotesk.variable}"}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
