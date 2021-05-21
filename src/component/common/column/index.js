import React from 'react';
import './style.css'

export default function index({ children, column}) {
    return <div className={column}>{children}</div>;
}
