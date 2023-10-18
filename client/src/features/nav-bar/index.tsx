import { NavBarMobile } from "./ui/mobile.tsx";
import { NavBarDesktop } from "./ui/desktop.tsx";
import { NavBarProps } from "./model/types.ts";
import {isMobile} from "react-device-detect";
const NavBar = (props: NavBarProps) => {
  const {iconItems, textItems} = props
  if(isMobile) return <NavBarMobile iconItems={iconItems} textItems={textItems}/>
  else return <NavBarDesktop iconItems={iconItems} textItems={textItems}/>
}
export default NavBar