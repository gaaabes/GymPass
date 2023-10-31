import type { Metadata } from "next"

import { Providers } from "./providers"

export const metadata: Metadata = {
  title: "Treine - Admin",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
