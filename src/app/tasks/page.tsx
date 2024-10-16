'use client'
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #333; 
`;

export default function TasksView(){
    return (
        <Container>
            <Title>Tasks</Title>
        </Container>
    )
}