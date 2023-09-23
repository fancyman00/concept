import { Style } from './style.ts';
import { ReactNode } from 'react';
type BannerProps = {
    color?: string;
    children: ReactNode;
    padding?: number
};
export const Banner = (props: BannerProps) => {
    const { color, padding, children } = props;
    return <Style $background={color} $padding={padding}>{children}</Style>;
};
