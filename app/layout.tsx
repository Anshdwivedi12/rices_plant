import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rice Mill Machinery Installation | Turnkey Solutions | India",
  description: "Expert rice mill machinery installation, supply, and commissioning services. Turnkey rice milling plants from 2 TPH to 200 TPD. Trusted by 1000+ clients across India.",
  keywords: "rice mill machinery, rice mill installation, turnkey rice mill, rice mill plant India, parboiled rice plant, rice mill machinery supplier",
  authors: [{ name: "Rice Mill Machinery Company" }],
  openGraph: {
    title: "Rice Mill Machinery Installation | Turnkey Solutions",
    description: "Expert rice mill machinery installation, supply, and commissioning services across India.",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Rice Mill Pro",
    description: "Leading rice mill machinery installation, supply, and commissioning services across India",
    url: "https://yourdomain.com",
    logo: "https://yourdomain.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-1800-274-1355",
      contactType: "Customer Service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "4, IDA Mallapur Rd, Ravindra Nagar, Nacharam",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500076",
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans">
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

