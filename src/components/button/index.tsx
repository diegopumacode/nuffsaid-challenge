import { Button } from "@material-ui/core";
import styled from "styled-components";

interface CustomButtonProps{
    background?:string
}
export const CustomButton = styled(Button)((props: CustomButtonProps) => `
    background-color: ${props.background || "#88FCA3"} !important;
    font-weight: var(--bold) !important;
`)