"use client"
import { gsap } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin)
import Circle from '@/public/circle.svg'
import Line1 from '@/public/line1.svg'
import Line2 from '@/public/line2.svg'
import Middleman from '@/public/midanimax.svg'
import First from '@/public/animax1.svg'
import Second from '@/public/animax2.svg'
import Third from '@/public/animax3.svg'
import Last from '@/public/lastanimax.svg'
import { useEffect } from 'react'


    const AnimationComponent = () => {
        useEffect(() => {
            const tl = gsap.timeline({ repeat: -1 });
        

            tl.to('.first', { duration: 1, opacity: 1, x: -1, delay: 0 } )
              .to('.second', { duration: 1, opacity: 1, x: -1, delay: 0 } )
              .to('.third', { duration: 1, opacity: 1, x: -1, delay: 0 })
              .to('.last', { duration: 1, opacity: 1, x: -1, delay: 0},)
            .to('.first', { duration: 1, x: -320, ease: "back.inOut(1.7)",})
            .to('.second', { duration: 1, x: 320,ease: "back.inOut(1.7)" }, '-=1')
            .to('.third', { duration: 1, y: 200,ease: "back.inOut(1.7)" }, '-=1')
            .to('.last', { duration: 1, y: -200,ease: "back.inOut(1.7)" }, '-=1')
      

            .from('.first, .second, .third, .last', { duration: 1, opacity: 0, delay: 0});
           // Animation to scale and rotate elements after fade-out
            tl.to('.line1', { duration: 1, scale: 1.2, } , '-=1' )
              .to('.line2', { duration: 1, scale: 1.2, } , '-=1')
              .to('.circle', { duration: 1, rotate: 360,  }, '-=1')
     
        }, []);
        

    return ( 
        <>
            <div className="animax relative w-fit">  
<Circle className='circle absolute left-[40rem] top-[10rem]'/>
  <Line1 className='line1 absolute left-[41rem] top-[16rem] '/>
  <Line2 className='line2 absolute left-[41rem] top-[16rem]'/>
  <Middleman className='absolute left-[44.5rem] top-[15rem]' />
  <First className='first absolute left-[55rem] top-[20rem]'/>
  <Second className='second absolute left-[35rem] top-[8em] '/>
  <Third className='third absolute left-[55rem] top-[8rem] '/>
  <Last className='last absolute left-[35rem] top-[20rem]'/>


            </div>
        </>
     );
}
 
export default AnimationComponent;