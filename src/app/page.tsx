import { ContractsSection } from '@/core/widgets/elements/contracts-sections'
import { HeroSection } from '@/core/widgets/elements/hero-section'
import { TrustUsSection } from '@/core/widgets/elements/trust-us'

async function getContracts() {
  const res = await fetch('http://localhost:3000/api/contracts', {
    cache: 'no-store', 
  })

  if (!res.ok) {
    throw new Error('Failed to fetch contracts')
  }

  return res.json()
}


export default async function Home() {
  
  const { data } = await getContracts();


  return (
    <>
      <HeroSection className='mb-[20px] md:mb-[50px]'></HeroSection>
      <TrustUsSection className='mb-[20px] md:mb-[50px]'></TrustUsSection>
      <ContractsSection className='mb-[20px] md:mb-[50px]'></ContractsSection>
    </>
  )
}
