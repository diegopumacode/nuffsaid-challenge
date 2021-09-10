import styled from 'styled-components'

type ContainerProps = {
    display?:string;
    justify?:string;
    align?:string;
    gap?:string;
    mt?:string;
    mb?:string;
};
const Container: React.FC<ContainerProps> = ({...props}) => {
    return (
        <ContainerStyled {...props}>
            {props.children}
        </ContainerStyled>
    )
}



const ContainerStyled = styled.div((props: ContainerProps) => `
    width: 100%;
    padding-right: 0.75rem;
    padding-left: 0.75rem;
    margin-right: auto;
    margin-left: auto;
    max-width: 1140px;
    margin-top: ${props.mt + "px" || 0 };
    margin-bottom: ${props.mb + "px" || 0};
    ${props.display && (`
        display:${props.display};
        justify-content:${props.justify};
        align-items:${props.align};
        gap:${props.gap}rem;
    `)}
`);


export default Container