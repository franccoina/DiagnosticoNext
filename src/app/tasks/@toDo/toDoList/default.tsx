"use client"
import styled from "styled-components";
import NavLink from "@/components/ui/link/Link";
import { useState, useEffect } from "react";
import { ITask } from "@/app/api/to-do/route";
import TaskCard from "@/components/cards/CardTask";

const Section = styled.section`
    padding: 20px;
    margin: 10px;
    border-radius: 10px;
    width: 100%;
    height: 50%;
    display: flex;
    background-color:#777;
    flex-direction: column;

    & h1 {
        color: #fff;
        font-weight: bold;
    }
`;

export default function DefaultToDoListView() {
    const [tasks, setTasks] = useState<ITask[]>([]);

    useEffect(() => {
        const apiFetchGet = async () => {
            try {
                const response = await fetch('/api/to-do', {
                    method: 'GET',
                    headers: { 'accept': '*/*' },
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const dataResponse = await response.json();
                console.log(dataResponse);

                if (dataResponse.status === 400) {
                    console.error(dataResponse.message);
                    return;
                }

                const taskList: ITask[] = dataResponse.data;
                const filterTask = taskList.filter(task => !task.completed);
                setTasks(filterTask);
            } catch (err: unknown) {
                console.error(err);
            }
        };
        apiFetchGet();
    }, []);

    const getClickedTask = () => {
        const clickedTask = localStorage.getItem('clickedTask');
        if (clickedTask) {
            return JSON.parse(clickedTask);
        } else {
            console.log('No clicked task found');
            return null; 
        }
    };

    const clickedTask = getClickedTask();

    return (
        <Section>
            <h1>To Do List</h1>
            <br />
            <NavLink href="/tasks">Close details...</NavLink>
            <ul>
                {tasks.map((task) => (
                    <TaskCard
                        id={clickedTask} 
                        key={task.id}
                        title={task.title}
                        date={task.date}
                        description={task.description}
                        completed={task.completed}
                    />
                ))}
            </ul>
        </Section>
    );
}