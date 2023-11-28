
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Section from './components/Section'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import Section2 from './components/Section2'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
     <Section/>
     <AboutUs/>
      <Section2/>
     <Footer/>
    

    </>
  )
}
