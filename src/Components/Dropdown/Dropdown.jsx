import "./Dropdown.css"

import { IoIosArrowDown } from "react-icons/io";


import {
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';


export default function Dropdown({data}){
    return(


        
<AccordionItem className="item">

<AccordionItemHeading>
    <AccordionItemButton className="heading">
        <div>
            {data.icon}
        </div>
        <span>{data.title}</span>
        <div><IoIosArrowDown/></div>

    </AccordionItemButton>
</AccordionItemHeading>

<AccordionItemPanel>
    <p>{data.description}</p>
</AccordionItemPanel>


</AccordionItem>


)
}