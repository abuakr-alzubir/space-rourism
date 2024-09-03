import Template from '@/components/Template'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Technology'
}

const LayoutTechnology = ({children}: {children: React.ReactNode}) => {
  return (
    <Template>
        {children}
    </Template>
  )
}

export default LayoutTechnology