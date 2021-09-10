import { motion } from 'framer-motion';
import styled from 'styled-components'

interface CardProps {
    background?: string;
    color?: string;
}

export const Card = styled(motion.div)((props: CardProps) => `
    border-radius: 10px;
    padding:10px;
    box-shadow: 0px 0px 8px 0px rgba(238,238,238,0.75);
    -webkit-box-shadow: 0px 0px 8px 0px rgba(238,238,238,0.75);
    -moz-box-shadow: 0px 0px 8px 0px rgba(238,238,238,0.75);
    color: ${props.color};
    background-color: ${props.background};
    font-size: var(--s-normal);
    height: 120px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    gap:30px;

`);

export const CardAction = styled.div((props:any)=>`
    width:100%;
    display:flex;
    justify-content:flex-end;
    gap:1rem;
`);
export default Card