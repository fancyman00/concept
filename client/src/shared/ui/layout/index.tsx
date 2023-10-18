import {ReactNode} from "react"
import {PageLayout} from "./page-layout";

type LayoutProps = {
    type: 'page' | 'mobile',
    children?: ReactNode
}
const Layout = (props: LayoutProps) => {
    const {type, children} = props
    switch (type){
        case "page": return <PageLayout>{children}</PageLayout>
        case "mobile": return <>{children}</>
    }
}
export default Layout