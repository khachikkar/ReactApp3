import { FaPhoneAlt } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";


const carddata = [

{
    icon: <FaPhoneAlt width={24}/>,
    title: "Phone Number",
    text: "1234567890",
    link: "Call Now",
},
{
    icon: <IoChatbubbleEllipses width={24}/>,
    title: "Chat",
    text: "Connect by Fb for Chat",
    link: "Chat now",
},
{
    icon: <IoLocationSharp width={24}/>,
    title: "Adress",
    text: "Yerevan Haybusak Ra, 12/34",
    link: "Get Directions",
},
{
    icon: <MdOutlineSupportAgent width={24}/>,
    title: "Support",
    text: "Fast support to you",
    link: "Help Now",
},

]
export default carddata