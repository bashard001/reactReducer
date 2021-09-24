import React from 'react';
import TodoItem from './todoItem';



export const TodoList = ({ todos }) => (
    <ul>
        {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
        ))}
    </ul>
);