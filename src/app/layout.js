import './globals.css'
import { Raleway } from 'next/font/google'
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import {AuthProvider} from "@/components/AuthProvider/AuthProvider";

const raleway = Raleway({ subsets: ['latin'] })


export const metadata = {
    title: {default:"Jeremy Ianne's portfolio"},
    description: 'My personal blog and portfolio detailing all my projects as well as my adventures in tech.',
    themeColor: "black",
    authors: [{name: "Jeremy Ianne"}],
    openGraph: {
        title: "Jeremy Ianne's portfolio",
        type: "website",
        description: 'My personal blog and portfolio detailing all my projects as well as my adventures in tech.',
        image: "https://jviguy.vercel.app/thumb.png",
        url: "https://jviguy.vercel.app/",
        locale: 'en_US',
        authors: ["Jeremy Ianne"]
    },
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    twitter: {
        card: 'summary_large_image',
    },
    verification: {
        google: "gUYUVb2H8vWS9FQlBUl-rVPTjzjgrlvwgFerNBi_nAo"
    }
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
          <body className={raleway.className}>
            <AuthProvider>
              <div className="container">
                  <Navbar/>
                  {children}
                  <Footer/>
              </div>
            </AuthProvider>
          </body>
        </html>
    )
}
