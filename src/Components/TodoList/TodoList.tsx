import React from 'react';
import { ITodo } from '../../Interfaces/interfaces';
import TodoItem from '../TodoItem/TodoItem';

interface IProps{
    todoList: ITodo[];
    taskFinished(taskFinished: string):void;
}

const TodoList = ({todoList,taskFinished}: IProps) => {
    return (
        <div >
            {
                todoList.map((td:ITodo, key:number)=> <TodoItem key={key} taskFinished={taskFinished} todo={td}></TodoItem> )
            }
        </div>
    );
};

export default TodoList;