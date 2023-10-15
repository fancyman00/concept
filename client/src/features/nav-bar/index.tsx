import { NavBarMobile } from "./ui/mobile.tsx";
import { NavBarDesktop } from "./ui/desktop.tsx";
import { NavBarProps } from "./model/types.ts";
const NavBar = (props: {isMobile: boolean} & NavBarProps) => {
  const {isMobile, iconItems, textItems} = props
  if(isMobile) return <NavBarMobile iconItems={iconItems} textItems={textItems}/>
  else return <NavBarDesktop iconItems={iconItems} textItems={textItems}/>
}
export default NavBar