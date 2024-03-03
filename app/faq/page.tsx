"use client"
import Faq from '@/app/component/accord'
import Header from '@/app/component/header';
import Footer from '@/app/component/footer';

export default function Question () {
    return (
       <>
       <div className="h-screen w-full bg-white">
        <Header/>
        <Faq/>
        <Footer/>
       </div>
       </>
    )
}