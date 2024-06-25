import React from 'react';
import './checkbox.css';

interface CheckboxProps {
    label: string; 
    checked: boolean;
    onChange: () => void;
  }

  const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
    
    return (
      <div className="checkbox-wrapper">
        <label>
          <input type="checkbox" checked={checked} onChange={onChange} />
          <span>{label}</span>
        </label>

      </div>
    );
  };
  export default Checkbox;