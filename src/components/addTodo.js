import React, {
    useState, useContext
} from 'react';

import uuid from 'uuid/v4';

import DispatchContext from '../context/dispatchContext';



export const AddTodo = () => {
const dispatch= useContext(DispatchContext)
    const [task, setTask] = useState('');
    const handleSubmit = event => {
        event.preventDefault()
        const id = uuid();
        // 
        dispatch({ type: 'ADD_TODO', task: task, id: uuid() })
        // Use Above Action
        setTask('');
        console.log(id);        
    };

    const handleChange = event => setTask(event.target.value);

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={task} onChange={handleChange} />
            <button type="submit">Add Todo</button>
        </form>
    );
};