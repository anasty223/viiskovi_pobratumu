import React from 'react'
import flash from '../../images/flash.png'
import {ContainerHero,HeaderHero,HeaderSecondHero,ImageHero} from "./PageHero.style.js"


const PageHero = () => {
  return (
    <div>
      <ContainerHero>
<HeaderHero>Військові побратими - </HeaderHero>

<HeaderSecondHero>
    Місце зустрічі допомоги військовим
</HeaderSecondHero>

<ImageHero src={flash}>

</ImageHero>
      </ContainerHero>
    </div>
  )
}

export default PageHero
