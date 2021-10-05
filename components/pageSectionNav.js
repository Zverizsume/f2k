import { Link, scrollSpy as Spy } from 'react-scroll'

export default function pageSectionNav() {

    Spy.update()

    return (
        <div className='pageSectionNav_wrapper' >

                <Link to='about' spy={true} smooth={true} offset={-120} duration={500} ><div className='pageSectionNav_about'>WhoWeAre</div></Link>

                <Link to='brands' spy={true} smooth={true} offset={-120} duration={500} ><div className='pageSectionNav_about'>Brands</div></Link>

                <Link to='streamers' spy={true} smooth={true} offset={-120} duration={500} ><div className='pageSectionNav_about'>OurCreators</div></Link>

                <Link to='whatWeDo' spy={true} smooth={true} offset={-120} duration={500} ><div className='pageSectionNav_about'>WhatWeDo</div></Link>

                <Link to='f2kUnited' spy={true} smooth={true} offset={-120} duration={500} ><div className='pageSectionNav_about'>F2KUnited</div></Link>

                <Link to='contact' spy={true} smooth={true} offset={-120} duration={500} ><div className='pageSectionNav_about'>Contact</div></Link>
        </div>
    )
}