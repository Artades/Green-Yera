import Hero from '@/components/hero/Hero'
import Main from '@/components/main/Main'
import Navbar from '@/components/navbar/Navbar'
import MetaHead from '@/meta/MetaHead'



export default function Home() {
  return (
    <>
     <MetaHead title={'Главная'} />
     <Hero />
     <Main />
    </>
  )
}
