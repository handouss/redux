import React from "react";
import {Link} from 'react-router-dom'

const TaskCard = ({ task }) => {
  return (
    <Link  to={`/${task?.id}`}> 
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderBottom: "1px solid #000",
        paddingTop: "20px",
        marginLeft: "30%",
        marginRight: "30%",
        width: "auto",
        textAlign: "center",
        padding: "15px",
      }}
    >
      <p>{task.title}</p>
      <p>{task.description}</p>
      <div style={{
        display: 'flex',
    
      }}>
      </div>
      
    </div>
    </Link>
  );
};

export default TaskCard;
