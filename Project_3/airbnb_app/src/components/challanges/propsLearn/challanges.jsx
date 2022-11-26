import React from "react";
import './challanges.css'
import Box from './contactBox'
import firstCat from './firstCat.jpeg'
import secondCat from './secondCat.jpeg'
import thirdCat from './thirdCat.jpeg'
import fourthCat from './fourthCat.webp'

function Challanges() {


return(
    <div className="contatcs">
        <Box 
            img={firstCat}
            name="Pierwszy kot"
            phone="123-123-123"
            mail="pierwszykot@wp.pl"
        />
        <Box 
            img={secondCat}
            name="drugi kot"
            phone="231-231-231"
            mail="drugikot@wp.pl"
        />
        <Box
            img={thirdCat}
            name="trzeci kot"
            phone="321-321-321"
            mail="trzecikot@wp.pl" 
        />
        <Box 
            img={fourthCat}
            name="Czwarty kot"
            phone="222-222-222"
            mail="czwartykot@wp.pl"
        />
    </div>
)
}

export default Challanges