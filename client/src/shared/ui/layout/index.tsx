import {ReactNode} from "react"
import {PageLayout} from "./page-layout";

type LayoutProps = {
    type: 'page',
    children: ReactNode
}
const Layout = (props: LayoutProps) => {
    const {type, children} = props
    switch (type){
        case "page": return <PageLayout>{children}</PageLayout>
    }
}
export default Layout