'use client'
import Button from "@/components/ui/button/Button";
import NavLink from "@/components/ui/link/Link";
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const Titles = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #333; 
`;

export default function Home() {
  return (
    <Container>
      <Titles>Hello, Coder!</Titles>
      <Titles>Welcome to Task App.</Titles>
      <br />
      <Button type="button">
        <NavLink href="/tasks">Let&apos;s start!</NavLink>
      </Button>
    </Container>
  );
}
