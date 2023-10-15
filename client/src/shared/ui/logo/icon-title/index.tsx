import styled from "styled-components";

type IconTitleLogo ={
    icon: string,
    title: string
}
const TitleStyle = styled.div`
  font-weight: 700;
  font-size: 48px;
  line-height: 48px;
  color: #00AAFF;
`
export const IconTitleLogo =  (props: IconTitleLogo) => {
    const {icon, title} = props
    return (
        <>
            {icon && <img src={icon} alt={''} />}
            <TitleStyle>{title}</TitleStyle>
        </>
    );    
}