"use client"
import { Bell, ChevronDown, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar py-2">
            <div className="container">
                <Link
                    href="/"
                    className="navbar-brand d-flex align-items-center text-white">
                    <div className='navbar-logo' style={{ width: "150px", height: "30px", position: "relative" }}>
                        <img src="/logo.png" alt="logo" style={{ width: '100%', height: '100%' }} />
                    </div>

                </Link>


                <form className="d-flex">
                    <div style={{ backgroundColor: "rgba(255,222,241,0.2)", borderRadius: "35px", display: "flex", alignItems: "center", padding: "2px 15px", gap: "8px" }}>
                        <Search />
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Search"
                            style={{ background: "transparent", border: "none", boxShadow: "none", outline: "none" }}
                        />
                    </div>
                </form>

                {/* Mobile Toggle */}
                <button
                    className="navbar-toggler bg-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu Items */}
                <div
                    className="navbar-collapse justify-content-end"
                    id="mainNavbar"
                >

                    <ul className="navbar-nav align-items-lg-center">
                        <li className="nav-item">
                            <Link href="/" className="nav-link text-white">
                                <Bell />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/" className="nav-link text-white d-flex align-items-center gap-2 m-0">


                                <div style={{ width: "34px", height: "34px", borderRadius: "50%", overflow: "hidden", position: "relative" }}>
                                    <Image src="/dp.png" alt="logo" fill style={{ objectFit: "cover" }} />
                                </div>
                                <p >Hi Lala!</p>
                                <ChevronDown />
                            </Link>
                        </li>


                    </ul>

                </div>

            </div>
        </nav>
    )
}

export default Navbar