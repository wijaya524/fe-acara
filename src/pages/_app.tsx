import "@/styles/globals.css";
import { cn } from "@/utils/cn";
import { HeroUIProvider } from "@heroui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";


const inter = Inter({
  subsets: ["latin"],
  weight: ["100","200","300", "400", "500", "600", "700"],
})

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    }
  }
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
    <HeroUIProvider>
      <main className={cn(inter.className,
        "flex h-screen w-screen flex-col items-center justify-center gap-10",
      )}>
      <Component {...pageProps} />;
      </main>
    </HeroUIProvider>
    </QueryClientProvider>
  )
}
