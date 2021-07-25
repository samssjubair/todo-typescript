import React from 'react';
import { ITodo } from '../../Interfaces/interfaces';

interface IProps{
    todo: ITodo;
    taskFinished(taskFinished: string):void;
}

const TodoItem = ({todo,taskFinished}: IProps) => {
    
    return (
        <div style={{margin: '10px auto', width: '30%',backgroundColor: '#53B8BB', color: '#F3F2C9', padding: '5px 0px', borderRadius: '20px'}}>
            <h3>Title: {todo.todo}</h3>
            <h4>Deadline: {todo.deadLine}</h4>
            <button onClick={()=>taskFinished(todo.todo)} style={{padding: '5px 20px', borderRadius: '10px', border: '0', backgroundColor: '#055052', color: '#F3F2C9', marginBottom: '5px'}}>Finished ✅</button>
        </div>
    );
};

export default TodoItem;