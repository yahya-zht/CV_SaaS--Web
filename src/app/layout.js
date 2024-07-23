import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Inter } from "next/font/google";
import "./globals.css";
import { COLORS } from "@/constants/theme";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: COLORS.bg }}>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
