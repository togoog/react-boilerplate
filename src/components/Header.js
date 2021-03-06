import React from 'react'
import styled from 'styled-components'
import Icon from './common/Icon'
import Nav from './Nav'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 32px 16px;
  width: 100%;
  max-width: 920px;
`

const Logo = styled.div`
  font-size: 2rem;
`

export default function Header() {
  return (
    <StyledHeader>
      <Logo>
        <Icon glyph="triangle" /> react-boilerplate
      </Logo>
      <Nav />
    </StyledHeader>
  )
}
