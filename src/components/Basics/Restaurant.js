import React , {useState} from 'react';
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";

const Restaurant = () => {
  const[menuData , setMenuData] = useState(Menu);   //react hooks
 
  return (
    <>
    <MenuCard menuData={menuData}/>       {/*calling another component */}
    </>
  )
}

export default Restaurant
