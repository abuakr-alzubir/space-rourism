import { Containera } from '@/components/Containera'
import { Section } from '@/components/Section'
import React from 'react'

const Crew = () => {
  return (
    <Section clasaName="bg-cover bg-[url('/crew/background-crew-mobile.jpg')] md:bg-[url('/crew/background-crew-tablet.jpg')] lg:bg-[url('/crew/background-crew-desktop.jpg')] h-[100vh]">
      <Containera className="text-white">crew</Containera>
    </Section>
  )
}

export default Crew