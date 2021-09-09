import styled, { StyledProps } from 'styled-components'

interface IContainer {}

const Container: React.FC<IContainer> = ({...props}) => {
    return (
        <ContainerStyled>
            {props.children}
        </ContainerStyled>
    )
}

type ViewProps = StyledProps<{}>;

const ContainerStyled = styled.div((props: ViewProps) => `
    width: 100%;
    padding-right: 0.75rem;
    padding-left: 0.75rem;
    margin-right: auto;
    margin-left: auto;
    max-width: 1140px;    
`);


export default Container