// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

// function Footer2() {
//   return (
//     <>
//       <footer className={styles.footerStyle}>

//                 {/* TOP SECTION */}

//                 <div className="container pt-5 pb-4">

//                     <div className="row gy-4">

//                         {/* Logo + Text */}

//                         <div className="col-12 col-md-3">

//                             <div className="d-flex align-items-center mb-3">

//                                 <Image
//                                     src="/lo.png"
//                                     alt="logo"
//                                     width={40}
//                                     height={40}
//                                 />

//                                 <h5 className="ms-2 text-white fw-semibold">
//                                     AI Content Automation
//                                 </h5>

//                             </div>

//                             <p className={styles.footerText}>

//                                 AI Content Automation Platform to generate,
//                                 schedule, and track content effortlessly.

//                             </p>

//                         </div>

//                         {/* Product */}

//                         <div className="col-6 col-md-2">
// <h6 className={styles.footerHeading}>
//                                 Product
//                             </h6>

//                             <ul className="list-unstyled footerLinks">

//                                 <li>
//                                     <Link href="#">Features</Link>
//                                 </li>

//                                 <li>
//                                     <Link href="#">Pricing</Link>
//                                 </li>

//                             </ul>

//                         </div>

//                         {/* Features */}

//                         <div className="col-6 col-md-2">
// <h6 className={styles.footerCard}>
//                                 Features
//                             </h6>

//                             <ul className="list-unstyled footerLinks">

//                                 <li>
//                                     <Link href="#">About Us</Link>
//                                 </li>

//                                 <li>
//                                     <Link href="#">Blog</Link>
//                                 </li>

//                             </ul>

//                         </div>

//                         {/* Company */}

//                         <div className="col-6 col-md-2">

//                         <h6 className={styles.footerHeading}>
//                                 Company
//                             </h6>

//                             <ul className="list-unstyled footerLinks">

//                                 <li>
//                                     <Link href="#">Blog</Link>
//                                 </li>

//                                 <li>
//                                     <Link href="#">Contact</Link>
//                                 </li>

//                             </ul>

//                         </div>

//                         {/* Resources */}

//                         <div className="col-6 col-md-2">
// <h6 className={styles.footerHeading}>
//                                 Resources
//                             </h6>

//                             <ul className="list-unstyled footerLinks">

//                                 <li>
//                                     <Link href="#">Help Center</Link>
//                                 </li>

//                                 <li>
//                                     <Link href="#">FAQs</Link>
//                                 </li>

//                             </ul>

//                         </div>

//                         {/* Social Icons */}

//                         <div className="col-12 col-md-1 text-md-end">

//                             <div className="d-flex gap-2 justify-content-md-end">

//                                 <FaTwitter className={styles.socialIcon}  />

//                                 <FaFacebookF className={styles.socialIcon}  />

//                                 <FaLinkedinIn className={styles.socialIcon}  />

//                                 <FaInstagram className={styles.socialIcon}  />

//                             </div>

//                         </div>

//                     </div>

//                 </div>

//                 {/* CENTER CARD */}

//                 <div className="container mb-5">
// <div className={styles.footerCard}>
//                         <div className="row align-items-center">

//                             {/* LEFT */}

//                             <div className="col-md-6">

//                                 <div className="d-flex align-items-center">

//                                     <Image
//                                         src="/lo.png"
//                                         alt="logo"
//                                         width={50}
//                                         height={50}
//                                     />

//                                     <h4 className="ms-2 fw-bold text-primary">

//                                         AI Content Automation

//                                     </h4>

//                                 </div>

//                                 <p className="mt-2 text-muted">

//                                     AI Content Automation Platform to generate,
//                                     schedule, and track content effortlessly.

//                                 </p>

//                             </div>

//                             {/* RIGHT */}

//                             <div className="col-md-6 text-md-end">

//                                 <div className="d-flex gap-2 justify-content-md-end mt-3 mt-md-0">

//                                     <FaTwitter className="cardSocial" />

//                                     <FaFacebookF className="cardSocial" />

//                                     <FaLinkedinIn className="cardSocial" />

//                                     <FaInstagram className="cardSocial" />

//                                 </div>

//                                 <p className="mt-2 small text-muted">

//                                     info@aicontentautomation.com

//                                 </p>

//                                 <p className="small text-muted">

//                                     Privacy Policy | Terms of Service

//                                 </p>

//                             </div>

//                         </div>

//                     </div>

//                 </div>

//                 {/* PAYMENT + COPYRIGHT */}

//                 <div className="container text-center pb-4">

//                     <div className="d-flex flex-wrap justify-content-center gap-3 mb-3">

//                         <Image
//                             src="/visa.png"
//                             width={50}
//                             height={30}
//                             alt="visa"
//                         />

//                         <Image
//                             src="/mastercard.png"
//                             width={50}
//                             height={30}
//                             alt="mastercard"
//                         />

//                         <Image
//                             src="/stripe.png"
//                             width={50}
//                             height={30}
//                             alt="stripe"
//                         />

//                     </div>

//                   <p className={styles.footerCopy}>

//                         © 2024 AI Content Automation.
//                         All rights reserved.

//                         &nbsp; Privacy Policy · Terms Policy · Terms of Service

//                     </p>

//                 </div>

//             </footer>

//       {/* Internal CSS */}

//       <style jsx>{`
//         .footerStyle {
//   background: linear-gradient(
//     180deg,
//     #2f55c8,
//     #1e3e8a
//   );

//   color: #fff;
// }

// /* Text */

// .footerText {
//   color: #d0d8ff;
//   font-size: 14px;
// }

// .footerHeading {
//   color: #ffffff;
//   font-weight: 600;
//   margin-bottom: 12px;
// }

// .footerLinks li {
//   margin-bottom: 6px;
// }

// .footerLinks a {
//   color: #c7d2ff;
//   text-decoration: none;
// }

// .footerLinks a:hover {
//   color: #ffffff;
// }

// /* Rounded Card */

// .footerCard {

//   background: linear-gradient(
//     135deg,
//     #ffffff,
//     #eef3ff
//   );

//   padding: 30px;

//   border-radius: 18px;

//   box-shadow:
//     0 10px 30px rgba(0,0,0,0.15);
// }

// /* Social */

// .socialIcon {
//   font-size: 18px;
//   cursor: pointer;
// }

// .cardSocial {
//   font-size: 20px;
//   cursor: pointer;
//   color: #3b5bfd;
// }

// /* Copyright */

// .footerCopy {
//   color: #c7d2ff;
//   font-size: 13px;
// }
//       `}</style>
//     </>
//   )
// }

// export default Footer2