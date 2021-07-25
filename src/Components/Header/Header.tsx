import React, { useState } from 'react';
import { ITodo } from '../../Interfaces/interfaces';
import './Header.css'

interface IProps{
    todoList: ITodo[];
    setTodoList:(todoList: ITodo[]) => void;
}

const Header = ({todoList, setTodoList}: IProps) => {
    const [todo, setTodo]= useState<string>("")
    const [deadLine, setDeadLine]= useState<number>(0);


    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.name=== "todo"){
            setTodo(e.target.value);
        }
        else if(e.target.name=== "deadline"){
            setDeadLine(Number(e.target.value));
        }
    }


    const addTodo=()=>{
        const newTodo: ITodo ={
            todo, deadLine
        }
        setTodoList([...todoList, newTodo])
        setTodo("");
        setDeadLine(0);
    }
    

    return (
        <div style={{backgroundColor: '#003638', height: '30vh', display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent: 'center'}}>
            <div className="input">
                <input value={todo} name="todo" type="text" placeholder="To do" onChange={handleChange}/>
                <input value={deadLine} name="deadline" type="number" placeholder="Deadline" onChange={handleChange} />
            </div>
            <button onClick={addTodo} className="btn">Add</button>
        </div>
    );
};

export default Header;