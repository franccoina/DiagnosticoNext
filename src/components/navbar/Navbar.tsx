'use client'
import React from "react"
import styled from "styled-components"
import NavLink from "../ui/link/Link"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ccc;
  padding: 20px;
  gap: 20px;
`

const Navbar: React.FC = () => {
    return (
        <Container>
                <NavLink href="/">
                    Go Back...
                </NavLink>
                <NavLink href="/tasks/">
                    Tasks
                </NavLink>
                <NavLink href="/create">
                    Create
                </NavLink>
        </Container>
    )
}

export default Navbar;