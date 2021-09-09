import styled, { StyledProps } from 'styled-components'

interface CardProps {
    background?: string;
    color?: string;
    className?: string;
}

const Card: React.FC<CardProps> = ({ color = "#000000", background = "#FFFFFF", className, ...props }) => {
    return (
        <CardStyled color={color} background={background} className={className} {...props}>
            {props.children}
        </CardStyled>
    )
}

type ViewProps = StyledProps<{
    color?: string;
    background?: string;
}>;

const CardStyled = styled.div((props: ViewProps) => `
    border-radius: 10px;
    padding:10px;
    box-shadow: 0px 0px 8px 0px rgba(238,238,238,0.75);
    -webkit-box-shadow: 0px 0px 8px 0px rgba(238,238,238,0.75);
    -moz-box-shadow: 0px 0px 8px 0px rgba(238,238,238,0.75);
    color: ${props.color};
    background-color: ${props.background};
    font-size: var(--s-normal);
    min-height: 100px;
`);


export default Card