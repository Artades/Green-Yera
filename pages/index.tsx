import Hero from '@/components/hero/Hero'
import Main from '@/components/main/Main'

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
