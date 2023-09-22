import styled from 'styled-components';

export const TypographyXL = styled.div<{ $color?: string; $weight?: string | number }>`
    font-size: 56px;
    line-height: 60px;
    color: ${(props) => props.$color ?? '#0000008a'};
    font-weight: ${(props) => props.$weight ?? '700'};
`;
