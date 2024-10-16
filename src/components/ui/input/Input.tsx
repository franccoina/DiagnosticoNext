import styled from 'styled-components';
import React from 'react';
import { IInputProps } from '@/types/IInput';

const InputStyle = styled.input`
  background-color: #fff; 
  width: 100%;          
  padding: 10px;        
  font-size: 16px;     
  border: 1px solid #ccc; 
  border-radius: 10px;
  margin-bottom: 16px;  
  
  &:focus {
    outline: none;          
  }
  
  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;    
  }
`;

const Input: React.FC<IInputProps> = ({ 
  type = 'text',
  placeholder, 
  value,
  name,
  onChange, 
  label, 
  id, 
  disabled = false 
}) => {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <InputStyle 
        type={type} 
        placeholder={placeholder} 
        name={name} 
        value={value} 
        onChange={onChange} 
        id={id} 
        disabled={disabled}
      />
    </div>
  );
};

export default Input;

