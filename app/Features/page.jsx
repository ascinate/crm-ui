"use client";
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Circle, Quote, Star } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaSquareFacebookk } from 'react-icons/fa6';
import { IoLogoFacebook } from 'react-icons/io';



function page() {
    return (
        <>





            {/* navbar */}
            <nav className="navbar navbar-expand-lg custom-navbar py-3">
                <div className="container">

                    {/* Logo + Title */}
                    <Link
                        href="/"
                        className="navbar-brand d-flex align-items-center text-white"
                    >
                        <Image
                            src="/lo.png"
                            alt="logo"
                            width={40}
                            height={20}
                            className="img-fluid"
                        />

                        <h3 className="ms-2 mb-0">
                            AI Content
                        </h3>

                        <h6
                            className="ms-2 mb-0 fw-light"
                        >
                            Automation platform
                        </h6>
                    </Link>

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
                        className=" navbar-collapse justify-content-end"
                        id="mainNavbar"
                    >

                        <ul className="navbar-nav align-items-lg-center gap-lg-3">

                            <li className="nav-item">
                                <Link href="/" className="nav-link text-white">
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link href="/feature" className="nav-link text-white">
                                    Feature
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link href="/pricing" className="nav-link text-white">
                                    Pricing
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link href="/about" className="nav-link text-white">
                                    About Us
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link href="/blog" className="nav-link text-white">
                                    Blog
                                </Link>
                            </li>

                            {/* Button */}
                            <li className="nav-item">

                                <button className='button'>Get Started</button>
                            </li>

                        </ul>

                    </div>

                </div>
            </nav>








            <main>

                {/* hero */}
                <section
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1000%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M690.61 542.63a49.14 49.14 0 1 0 98.26-2.2z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M711.86 135.67L713.68 135.67L713.68 137.49L711.86 137.49z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M603.66 49.71 a45.99 45.99 0 1 0 91.98 0 a45.99 45.99 0 1 0 -91.98 0z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M178.88 549.62a22.77 22.77 0 1 0-24.61-38.32z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M1421.85 55.97a2.88 2.88 0 1 0 5.56 1.5z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M208.61 356.67L228.52 356.67L228.52 376.58L208.61 376.58z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M365.7 439.31L371.87 439.31L371.87 490.62L365.7 490.62z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M326.24 487.2L346.55 487.2L346.55 531.5L326.24 531.5z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M1128.07 94.3L1168.24 94.3L1168.24 111.08L1128.07 111.08z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M860.54 518.76L880.9 518.76L880.9 565.63L860.54 565.63z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M1077.87 94.79L1108.34 94.79L1108.34 125.26L1077.87 125.26z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M139.47 147.5L142.89 147.5L142.89 150.92L139.47 150.92z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M766.48 4.53L776.17 4.53L776.17 59.36L766.48 59.36z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M1426.34 46.97 a2.78 2.78 0 1 0 5.56 0 a2.78 2.78 0 1 0 -5.56 0z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M443.63 171.93L453.85 171.93L453.85 182.15L443.63 182.15z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M447.73 93.07 a31.58 31.58 0 1 0 63.16 0 a31.58 31.58 0 1 0 -63.16 0z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M305.1 305.83L330.85 305.83L330.85 313.55L305.1 313.55z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M747.66 99.41a36.14 36.14 0 1 0-16.8 70.3z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M524.58 423.75a45.01 45.01 0 1 0 67.78-59.24z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M190.01 282.05 a14.04 14.04 0 1 0 28.08 0 a14.04 14.04 0 1 0 -28.08 0z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M1348.1 133.83a33.61 33.61 0 1 0 27.26-61.45z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M399.9 210.66 a24.51 24.51 0 1 0 49.02 0 a24.51 24.51 0 1 0 -49.02 0z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M80.44 25.51L127.9 25.51L127.9 72.97L80.44 72.97z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M5.64 228.99L56.46 228.99L56.46 279.81L5.64 279.81z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M1220.45 411.24 a44.83 44.83 0 1 0 89.66 0 a44.83 44.83 0 1 0 -89.66 0z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M996.6 426.31a28.94 28.94 0 1 0-47.92 32.47z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M-26.68 189.5 a37.55 37.55 0 1 0 75.1 0 a37.55 37.55 0 1 0 -75.1 0z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M1028.24 200.28L1042.01 200.28L1042.01 214.05L1028.24 214.05z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M278.67 194.94L314.94 194.94L314.94 231.21L278.67 231.21z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M811.95 144.1L844.51 144.1L844.51 174.76L811.95 174.76z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M680.1 490.3a48.58 48.58 0 1 0 40.58-88.28z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M663.83 406.86L719.12 406.86L719.12 451.2L663.83 451.2z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M567.29 51.44a13.43 13.43 0 1 0-7.99-25.65z' stroke='%23e73635'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1000'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        padding: "80px 0"
                    }}
                >
                    <div className="container">

                        <div className="row align-items-center">

                            {/* Text Column */}
                            <div className="col-12 col-md-6 text-center text-md-start">

                                <h2 className="colorWhite">
                                    Powerful Features to Automate
                                </h2>

                                <p className="colorWhite">
                                    Al-powered tools to create, schedule, & analyze your
                                    content across all major platforms easily.
                                </p>

                                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start align-items-center">

                                    <button className="button">
                                        Get Started Free
                                    </button>

                                    <Link
                                        className="colorWhite"
                                        href="/Features"
                                    >
                                        See it in action
                                    </Link>

                                </div>

                            </div>

                            {/* Image Column */}


                        </div>

                    </div>

                </section>





                {/* Boost Your Productivity with */}
                <section className="mt-5">
                    <div className="container">

                        <h2 className="m-auto text-center themeColor">
                            Boost Your Productivity with
                            Al-Powered Content Automation
                        </h2>

                        <div className="row g-3 mt-4 text-center">
                            {/* col */}
                            <div className="col-12 col-md-3 d-flex justify-content-center">
                                <div className="card cardStyle3" style={{ width: "18rem" }}  >
                                    <figure className='mt-3' style={{ position: "relative", width: "100%", height: "63px" }}>
                                        <Image
                                            src="/f4.png"
                                            alt="feature image"
                                            fill
                                            style={{ objectFit: "contain" }}
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <h4 className='themeColor'>Al Content Creation</h4>
                                        <p className="card-text  " style={{ fontSize: "14px" }} >
                                            Generate high-quality
                                            blog posts, social media
                                            captions, emails, and
                                            more in seconds.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* col */}
                            <div className="col-12 col-md-3 d-flex justify-content-center">
                                <div className="card cardStyle3" style={{ width: "18rem" }}  >
                                    <figure className='mt-3' style={{ position: "relative", width: "100%", height: "66px" }}>
                                        <Image
                                            src="/f1.png"
                                            alt="feature image"
                                            fill
                                            style={{ objectFit: "contain" }}
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <h4 className='themeColor'>Multi-Platform Auto-Posting</h4>
                                        <p className="card-text  " style={{ fontSize: "14px" }} >
                                            Schedule and auto-post your
                                            content to Linkedin. 7
                                            Facebook, Instagram, and
                                            Twitter from
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* col */}
                            <div className="col-12 col-md-3 d-flex justify-content-center">
                                <div className="card cardStyle3" style={{ width: "18rem" }}  >
                                    <figure className='mt-3' style={{ position: "relative", width: "100%", height: "70px" }}>
                                        <Image
                                            src="/f2.png"
                                            alt="feature image"
                                            fill
                                            style={{ objectFit: "contain" }}
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <h4 className='themeColor'>Performance
                                            Analytics</h4>
                                        <p className="card-text  " style={{ fontSize: "14px" }} >
                                            Track engagement, analyze
                                            traffic, and get insights to
                                            improve your content
                                            strategy.
                                        </p>
                                    </div>
                                </div>
                            </div>


                            {/* col */}
                            <div className="col-12 col-md-3 d-flex justify-content-center">
                                <div className="card cardStyle3" style={{ width: "18rem" }}  >
                                    <figure className='mt-3' style={{ position: "relative", width: "100%", height: "70px", }}>
                                        <Image
                                            src="/f3.png"
                                            alt="feature image"
                                            fill
                                            style={{ objectFit: "contain" }}
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <h4 className='themeColor'>Content
                                            Optimization</h4>
                                        <p className="card-text  " style={{ fontSize: "14px" }} >
                                            Optimize your content with
                                            SEO tools that suggest imp-
                                            rovenments and help boss
                                            your visibility.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <h2>Boost Your Productivity with Al-Powered Content Automation</h2>
                            <div className='mb-5'>

                                <button className='button '>Get Started</button>
                            </div>

                        </div>
                    </div>
                </section>



            </main>




            <footer className="footerStyle">

                {/* TOP SECTION */}

                <div className="container pt-5 pb-4">

                    <div className="row gy-4">

                        {/* Logo + Text */}

                        <div className="col-12 col-md-3">

                            <div className="d-flex align-items-center mb-3">

                                <Image
                                    src="/lo.png"
                                    alt="logo"
                                    width={40}
                                    height={40}
                                />

                                <h5 className="ms-2 text-white fw-semibold">
                                    AI Content Automation
                                </h5>

                            </div>

                            <p className="footerText">

                                AI Content Automation Platform to generate,
                                schedule, and track content effortlessly.

                            </p>

                        </div>

                        {/* Product */}

                        <div className="col-6 col-md-2">

                            <h6 className="footerHeading">
                                Product
                            </h6>

                            <ul className="list-unstyled footerLinks">

                                <li>
                                    <Link href="#">Features</Link>
                                </li>

                                <li>
                                    <Link href="#">Pricing</Link>
                                </li>

                            </ul>

                        </div>

                        {/* Features */}

                        <div className="col-6 col-md-2">

                            <h6 className="footerHeading">
                                Features
                            </h6>

                            <ul className="list-unstyled footerLinks">

                                <li>
                                    <Link href="#">About Us</Link>
                                </li>

                                <li>
                                    <Link href="#">Blog</Link>
                                </li>

                            </ul>

                        </div>

                        {/* Company */}

                        <div className="col-6 col-md-2">

                            <h6 className="footerHeading">
                                Company
                            </h6>

                            <ul className="list-unstyled footerLinks">

                                <li>
                                    <Link href="#">Blog</Link>
                                </li>

                                <li>
                                    <Link href="#">Contact</Link>
                                </li>

                            </ul>

                        </div>

                        {/* Resources */}

                        <div className="col-6 col-md-2">

                            <h6 className="footerHeading">
                                Resources
                            </h6>

                            <ul className="list-unstyled footerLinks">

                                <li>
                                    <Link href="#">Help Center</Link>
                                </li>

                                <li>
                                    <Link href="#">FAQs</Link>
                                </li>

                            </ul>

                        </div>

                        {/* Social Icons */}

                        <div className="col-12 col-md-1 text-md-end">

                            <div className="d-flex gap-2 justify-content-md-end">

                                <FaTwitter className="socialIcon" />

                                <FaFacebookF className="socialIcon" />

                                <FaLinkedinIn className="socialIcon" />

                                <FaInstagram className="socialIcon" />

                            </div>

                        </div>

                    </div>

                </div>

                {/* CENTER CARD */}

                <div className="container mb-5">

                    <div className="footerCard">

                        <div className="row align-items-center">

                            {/* LEFT */}

                            <div className="col-md-6">

                                <div className="d-flex align-items-center">

                                    <Image
                                        src="/lo.png"
                                        alt="logo"
                                        width={50}
                                        height={50}
                                    />

                                    <h4 className="ms-2 fw-bold text-primary">

                                        AI Content Automation

                                    </h4>

                                </div>

                                <p className="mt-2 text-muted">

                                    AI Content Automation Platform to generate,
                                    schedule, and track content effortlessly.

                                </p>

                            </div>

                            {/* RIGHT */}

                            <div className="col-md-6 text-md-end">

                                <div className="d-flex gap-2 justify-content-md-end mt-3 mt-md-0">

                                    <FaTwitter className="cardSocial" />

                                    <FaFacebookF className="cardSocial" />

                                    <FaLinkedinIn className="cardSocial" />

                                    <FaInstagram className="cardSocial" />

                                </div>

                                <p className="mt-2 small text-muted">

                                    info@aicontentautomation.com

                                </p>

                                <p className="small text-muted">

                                    Privacy Policy | Terms of Service

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* PAYMENT + COPYRIGHT */}

                <div className="container text-center pb-4">

                    <div className="d-flex flex-wrap justify-content-center gap-3 mb-3">

                        <Image
                            src="/visa.png"
                            width={50}
                            height={30}
                            alt="visa"
                        />

                        <Image
                            src="/mastercard.png"
                            width={50}
                            height={30}
                            alt="mastercard"
                        />

                        <Image
                            src="/stripe.png"
                            width={50}
                            height={30}
                            alt="stripe"
                        />

                    </div>

                    <p className="footerCopy">

                        © 2024 AI Content Automation.
                        All rights reserved.

                        &nbsp; Privacy Policy · Terms Policy · Terms of Service

                    </p>

                </div>

            </footer>


        </>
    )
}

export default page