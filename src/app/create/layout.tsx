"use client"
import styled from "styled-components";
import Navbar from "@/components/navbar/Navbar";

const Container = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export default function TasksCreationLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <Container>
            <Navbar />
            {children}
        </Container>
    );
};