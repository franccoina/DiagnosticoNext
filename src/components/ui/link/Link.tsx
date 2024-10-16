'use client'
import React from "react"
import Link from "next/link"
import styled from "styled-components"

interface ILink {
    href: string;
    target?: string;
    children: React.ReactNode;
}

const StyledLink = styled(Link)`
  width: fit-content;
  display: flex;
  flex-wrap: wrap;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 5px 10px;
  `

const NavLink: React.FC<ILink> = ({href, target, children}) => {
 return(
     <StyledLink href={href} target={target}>
       {children}
     </StyledLink>
 )
}

export default NavLink