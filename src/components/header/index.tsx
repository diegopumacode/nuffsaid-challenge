import React from 'react'
import styled from 'styled-components'

export default function Header() {
    return (
        <HeaderStyled>
            <h3>nuffsaid.com Coding Challenge</h3>
        </HeaderStyled>
    )
}


export const HeaderStyled = styled.header`
  border-bottom: solid 4px gray;
  width: 100%;
  height: 60px;

  display: flex;

  align-items: center;

  padding: 0 20px;
  h3 {
    font-weight: normal;
    font-size: var(--h5);
    
  }
`;
