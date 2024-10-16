'use client'
import React from 'react';
import styled from 'styled-components';

interface IButton{
    disabled?: boolean;
    onClick?: () => void;
    type?: 'button' |'submit' |'reset';
    icon?: React.ReactNode;
    children?: React.ReactNode;
}

const StyledButton = styled.button`
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`
const Button: React.FC<IButton> = ({disabled, onClick, type, children, icon }) => {
return(
    <StyledButton disabled={disabled} onClick={onClick} type={type}>
        {icon}
        {children}
    </StyledButton>
)
}

export default Button;