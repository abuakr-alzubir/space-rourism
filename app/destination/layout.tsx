import Template from '@/components/Template'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Destination'
}

 const LayoutDistination = ({children}: {children: React.ReactNode}) => {
  return (
    <Template>
        {children}
    </Template>
  )
}

export default LayoutDistination;