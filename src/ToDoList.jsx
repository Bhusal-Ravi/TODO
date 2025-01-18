import React, { useState } from "react";
import "./styles.css";

function ToDoList() {
    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState([]);

    function setTask(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks((t) => [...t, newTask]);
            setNewTask("");
        }
    }

    function taskUp(index) {
        if (index > 0) {
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];
            setTasks(updatedTask);
        }
    }

    function taskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
            setTasks(updatedTask);
        }
    }

    function taskDelete(index) {
        const updatedTask = tasks.filter((_, i) => i !== index);
        setTasks(updatedTask);
    }

    return (
        <div className="todo-container">
            <h1>My To-Do List</h1>
            <div className="todo-input-container">
                <input
                    type="text"
                    value={newTask}
                    onChange={setTask}
                    placeholder="Enter a new task..."
                />
                <button onClick={addTask}>Add Task</button>
            </div>
            <ul className="task-list">
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span>{task}</span>
                        <div className="task-buttons">
                            <button onClick={() => taskUp(index)}>🔼</button>
                            <button onClick={() => taskDown(index)}>🔽</button>
                            <button onClick={() => taskDelete(index)}>❌</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
