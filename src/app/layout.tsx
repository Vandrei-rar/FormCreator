'use client';
import { ColorModeScript } from "@chakra-ui/react";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <ColorModeScript initialColorMode="dark" />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}