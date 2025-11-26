import React from 'react';
import employeeImg from './img/employee.jpg';

export default function TestImage() {
  return (
    <div>
      <h1>Image Test</h1>
      <img src={employeeImg} alt="Employee" style={{ width: '200px', height: '200px' }} />
    </div>
  );
}
