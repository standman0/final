import { useEffect } from 'react';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';

// Import SVG components with their appropriate types
import Circle from '@/public/circle.svg';
import Line1 from '@/public/line1.svg';
import Line2 from '@/public/line2.svg';
import Middleman from '@/public/midanimax.svg';
import First from '@/public/animax1.svg';
import Second from '@/public/animax2.svg';
import Third from '@/public/animax3.svg';
import Last from '@/public/lastanimax.svg';

gsap.registerPlugin(CSSPlugin);

const AnimationComponent: React.FC = () => {
    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 });

        tl.to('.first', { duration: 1, opacity: 1, x: -1, delay: 0 })
          .to('.second', { duration: 1, opacity: 1, x: -1, delay: 0 })
          .to('.third', { duration: 1, opacity: 1, x: -1, delay: 0 })
          .to('.last', { duration: 1, opacity: 1, x: -1, delay: 0 })
          .to('.first', { duration: 1, x: -290, ease: "back.inOut(1.7)" })
          .to('.second', { duration: 1, x: 290, ease: "back.inOut(1.7)" }, '-=1')
          .to('.third', { duration: 1, y: 190, ease: "back.inOut(1.7)" }, '-=1')
          .to('.last', { duration: 1, y: -190, ease: "back.inOut(1.7)" }, '-=1')
          .from('.first, .second, .third, .last', { duration: 1.5, opacity: 0, delay: 0 });

        // Animation to scale and rotate elements after fade-out
        tl.to('.line1', { duration: 1, scale: 0.8 }, '-=1')
          .to('.line2', { duration: 1, scale: 0.8 }, '-=1')
          .to('.circle', { duration: 1, rotate: 360 }, '-=1');
    }, []);

    return (
        <div className="animax max-w-xl w-full md:h-[30rem]   lg:h-[30rem] relative aria-label overflow-hidden ">
            <Circle className='circle absolute left-[10rem]  top-[5rem]'/>
            <Line1 className='line1 absolute left-[11.25rem]  top-[10.75rem] '/>
            <Line2 className='line2 absolute left-[11.25rem]  top-[10.75rem] '/>
            <Middleman className='absolute left-[14.5rem]  top-[9.5rem] ' />
            <First className='first absolute left-[24rem] top-[15rem]'/>
            <Second className='second absolute w-1/2 left-[5rem]  top-[3.35rem] '/>
            <Third className='third absolute  left-[24rem] top-[3.35rem]'/>
            <Last className='last absolute left-[5rem] top-[15rem]'/>
        </div>
    );
};

export default AnimationComponent;
