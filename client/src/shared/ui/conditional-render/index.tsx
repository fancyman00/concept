import { cloneElement, ReactElement, ReactNode } from "react";
type ConditionalRenderProps = {
  condition: boolean,
  children?: ReactNode,
  First?: ReactElement,
  Second?: ReactElement,
  commonProps?: object
}
export const ConditionalRender = (props: ConditionalRenderProps) => {
  const {condition, children, First, Second, commonProps} = props
  if(condition) {
    if(First) return cloneElement(First, commonProps ?? {}, children);
    else return <>{children}</>
  }
  else {
    if (Second) return cloneElement(Second, commonProps ?? {}, children);
    else return <>{children}</>
  }
}