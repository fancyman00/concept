import styled from 'styled-components';

export const TypographyXXL = styled.div<{ $color?: string; $weight?: string | number }>`
    font-size: 64px;
    line-height: 60px;
    color: ${(props) => props.$color ?? '#0000008a'};
    font-weight: ${(props) => props.$weight ?? '700'};
`;
