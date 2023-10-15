import { cloneElement, ReactElement, ReactNode } from "react";
type ConditionalRenderProps = {
  condition: boolean,
  children?: ReactNode,
  First?: ReactElement,
  Second?: ReactElement,
}
export const ConditionalRender = (props: ConditionalRenderProps) => {
  const {condition, children, First, Second} = props
  console.log(Second?.props)
  if(condition) {
    if(First) return cloneElement(First, {  }, children);
    else return <>{children}</>
  }
  else {
    if (Second) return cloneElement(Second, {  }, children);
    else return <>{children}</>
  }
}