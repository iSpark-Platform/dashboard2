'use client'
import React from 'react'
import { Header, Footer } from '@/layout'
import Internship from '@/components/internship/internship'
import useParallax from '@/hooks/use-parallax' 

export default function InternshipPage() {
  useParallax();
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <Header no_top_bar={true} />
        <Internship />
        <Footer style_2={'footer-dark bg-image footer-style-2'} />
      </div>
    </div>
  )
}
