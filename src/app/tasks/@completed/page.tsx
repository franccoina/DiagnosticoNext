"use client"
import styled from "styled-components";
import NavLink from "@/components/ui/link/Link";

const Section = styled.section`
    padding: 20px;
    margin: 10px;
    border-radius: 10px;
    width: 100%;
    height: 50%;
    display: flex;
    background-color:#ccc;
    flex-direction: column;

    & h1 {
        font-weight: bold;
    }
`;

export default function CompletedView() {
    return (
        <Section>
            <h1>Completed</h1>
            <br />            
            <NavLink href="/tasks/completedList">View tasks...</NavLink>
        </Section>
    )
}
