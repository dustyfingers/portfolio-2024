"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import PageContainer from "@/components/PageContainer";

export const metadata = {
  title: "Louie Williford | Software Engineer",
  description: "Built with love in 2024 :)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <CacheProvider>
          <ChakraProvider>
            {/* <Navbar /> */}
            <PageContainer>{children}</PageContainer>
            {/* <Footer /> */}
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
