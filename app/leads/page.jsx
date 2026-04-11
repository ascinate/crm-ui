"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Sidebar from '../../component/Sidebar'
import Navbar from '../../component/Navbar'
function page() {
  return (
    <>

      <div className="backgroundImage">
        <Navbar />
          <Sidebar />
        <main>
        </main>

      </div>
    </>
  )
}

export default page