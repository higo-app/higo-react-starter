import React from 'react'

interface TaskProps {
  title: string;
  checked: boolean;
  dueDate: string;
  onChange?: () => void;
}

function Task({
  title, 
  checked,
  dueDate,
  onChange,
}: TaskProps) {
  return (
    <div>
      <input type="checkbox" checked={checked} onChange={onChange}/>
      <p>{title}</p>
      <p>{dueDate}</p>
    </div>
  )
}

export default Task