import styled from 'styled-components';

export const TypographyXL = styled.div<{ $color?: string; $weight?: string | number }>`
    font-size: 56px;
    line-height: 60px;
    color: ${(props) => props.$color ?? '#0000008a'};
    font-weight: ${(props) => props.$weight ?? '700'};
    white-space: pre-line;
`;
export const TypographyMobileXL = styled.div<{ $color?: string; $weight?: string | number }>`
    color: ${(props) => props.$color ?? '#0000008a'};
    font-weight: ${(props) => props.$weight ?? '700'};
    white-space: pre-line;
    font-size: 40px;
    line-height: 48px;
`;