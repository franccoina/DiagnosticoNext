"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";
import Input from "@/components/ui/input/Input";
import Button from "@/components/ui/button/Button";
import Label from "@/components/ui/label/Label";
import { ITask } from "../api/to-do/route";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Card = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 2rem;
  border-radius: 8px;
  border: rgba(0, 0, 0, 0.1);
  background-color: #fff; 
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #333; 
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  & button {
    margin-top: 1rem;
  }
`;

const ErrorList = styled.ul`
  margin: 1rem 0 0; 
  padding: 1rem;
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
  list-style: none;
`;

const ErrorItem = styled.li`
  margin-bottom: 0.5rem;
`;

const TaskCreationView = () => {
    const [errors, setErrors] = useState<string[]>([]);
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [date, setDate] = useState<string>(new Date().toISOString());
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrors([]);

        const newTask: ITask = {
            id: Date.now(),
            title: title,
            description: description,
            date: date,
            completed: false,
        };

        try {
            const res = await fetch('/api/to-do', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTask),
            });

            if (!res.ok) {
                const errorData = await res.json();
                setErrors([errorData.message || 'Error creating the new task.']);
                return;
            }

            router.push("/tasks");
        } catch (err) {
            console.error(err);
            setErrors(['Error creating the new task.']);
        }
    };

    return (
        <Container>
            <Card>
                <Title>Create Task</Title>
                <Form onSubmit={handleSubmit}>
                    <Label htmlFor="title">Title</Label>
                    <Input
                        type="text"
                        placeholder="Title for the task..."
                        name="title"
                        value={title}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
                        required
                    />

                    <Label htmlFor="description">Description</Label>
                    <Input
                        type="text"
                        placeholder="Description for the taks..."
                        name="description"
                        value={description}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDescription(event.target.value)}
                        required
                    />

                    <Label htmlFor="date">Date</Label>
                    <Input
                        type="date"
                        name="date"
                        value={date.split('T')[0]}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDate(event.target.value)}
                    />

                    <Button type="submit">CREATE</Button>
                </Form>

                {errors.length > 0 && (
                    <ErrorList>
                        {errors.map((error) => (
                            <ErrorItem key={error}>{error}</ErrorItem>
                        ))}
                    </ErrorList>
                )}
            </Card>
        </Container>
    );
};

export default TaskCreationView;
