import React from 'react'
import flash from '../../images/flash.png'
import {ContainerHero,HeaderHero,HeaderSecondHero,ImageHero} from "./PageHero.style.js"
import { Link, animateScroll as scroll } from "react-scroll";


const PageHero = () => {
  return (
    <div>
      <ContainerHero>
<HeaderHero>Військові побратими - </HeaderHero>

<HeaderSecondHero>
    Місце зустрічі допомоги військовим
</HeaderSecondHero>
<Link
    activeClass="active"
    to="section1"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>
<ImageHero src={flash} >

</ImageHero></Link>
      </ContainerHero>
    </div>
  )
}

export default PageHero
