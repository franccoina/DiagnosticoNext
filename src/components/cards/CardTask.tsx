'use client'
import React from 'react';
import styled from 'styled-components';

interface TaskCardProps {
    id: string;
    title: string;
    date: string;
    description: string;
    completed: boolean;
}

const Card = styled.div`
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px 0;
  transition: 0.2s;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Checkbox = styled.input`
  margin-right: 12px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
`;

const CreationDate = styled.p`
  color: #888;
  font-size: 14px;
`;

const Description = styled.p`
  font-size: 16px;
  margin-top: 8px;
`;

const TaskCard: React.FC<TaskCardProps> = ({ id, title, date, description, completed }) => {

    return (
        <Card id={id as string}>
            <Header>
                <Checkbox
                    type="checkbox"
                    checked={completed}
                    />
                <Title>{title}</Title>
            </Header>
            <CreationDate>{date}</CreationDate>
            <Description>{description}</Description>
        </Card>
    );
};

export default TaskCard;
