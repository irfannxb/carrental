'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Banner = () => {
  const pathname = usePathname();
  return (
    
    <div className="hero inner-page" style={{backgroundImage: "url('/images/hero_1_a.jpg')"}}>      
        <div className="container">
        <div className="row align-items-end ">
            <div className="col-lg-5">

            <div className="intro">
                <h1><strong className="capitalize">{pathname.split('/').pop()}</strong></h1>
                <div className="custom-breadcrumbs"><Link href="/">Home</Link> <span className="mx-2">/</span> <strong className="capitalize">{pathname.split('/').pop()}</strong></div>
            </div>
            </div>
        </div>
        </div>
  </div>
  )
}

export default Banner