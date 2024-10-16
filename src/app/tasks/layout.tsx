"use client"
import styled from "styled-components";
import Navbar from "@/components/navbar/Navbar";

const Page = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
`;

const Container = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
`;

export default function TasksLayout({
    children,
    completed,
    toDo
}: {
    children: React.ReactNode;
    completed: React.ReactNode;
    toDo: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <Page>
                {children}
                <Container>
                    {completed}
                    {toDo}
                </Container>
            </Page>
        </>
    );
};