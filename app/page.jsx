"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Sidebar from '../component/Sidebar'
import Navbar from '../component/Navbar'
function page() {
  return (
    <>

      <div className="backgroundImage">
        <Navbar />
        <Sidebar />
        <main>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat minus repellendus doloribus voluptatem magnam! Qui error, tempora possimus excepturi ad minus, libero dolorum molestias sequi unde illo non debitis quibusdam!</p>
        </main>

      </div>
    </>
  )
}

export default page