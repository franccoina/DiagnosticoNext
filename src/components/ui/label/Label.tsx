import styled from 'styled-components';
import React from 'react';
import { ILabelProps } from '@/types/ILabel';

const LabelStyle = styled.label`
  font-size: 16px;     
  font-weight: bold;  
  color: #000;         
  margin-bottom: 8px; 
  display: block;      
`;

const Label: React.FC<ILabelProps> = ({ text, htmlFor, className }) => {
  return (
    <LabelStyle htmlFor={htmlFor} className={className}>
      {text}
    </LabelStyle>
  );
};

export default Label;

