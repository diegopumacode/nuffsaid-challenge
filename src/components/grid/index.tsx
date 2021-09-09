import styled, { StyledProps } from 'styled-components'

interface GridProps {
    columns?: number,
    gap?:number,
    className?:string
}

const Grid: React.FC<GridProps> = ({ columns = 3, gap, className, ...props }) => {
    return (
        <GridStyled columns={columns} gap={gap} className={className} {...props}>
            {props.children}
        </GridStyled>
    )
}

type ViewProps = StyledProps<{
    columns?: number;
    gap?: number;
}>;

const GridStyled = styled.div((props: ViewProps) => `
    display:grid;
    grid-template-columns: repeat(${props.columns}, 1fr);
    grid-auto-rows: auto;
    grid-gap: ${props.gap}rem;
    font-size: var(--s-normal);
    min-height: 100px;
`);

export default Grid