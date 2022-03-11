import React from 'react'

interface ListProps {
  title: string;
  children: React.ReactNode;
}

function List({
  title, 
  children
}: ListProps) {
  return (
    <div>
     <div>
       <h2>{title}</h2>
     </div>
     <div>
       {children}
     </div>
    </div>
  )
}

export default List