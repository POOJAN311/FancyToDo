import { useEffect, useState } from "react"
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ToDoitem from "./ToDoitem";
import TodoForm from "./TodoForm";
import Box from '@mui/material/Box';

const getinitialData = () => {
    const data = JSON.parse(localStorage.getItem("todos"))
    if (!data) {
        return [];
    }
    return data;
}
export default function ToDoList() {
    const [todos, setTodos] = useState(getinitialData);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos]);

    const removeTodo = (id) => {
        setTodos((prevTodo) => {
            return prevTodo.filter((t) => t.id !== id);
        })
    }

    const ToggleTodo = (id) => {
        setTodos((prevTodo) => {
            return prevTodo.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed }
                }
                else {
                    return todo;
                }
            })
        })
    }

    const Addtodo = (text) => {
        setTodos(prevTodo => {
            return [...prevTodo, { text: text, id: crypto.randomUUID(), completed: false }]
        })
    }
    return (
        <>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                m: 3
            }}>
                <Typography variant="h2" component="h2" sx={{ flexGrow: 1 }}>
                    Todo List
                </Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {todos.map(todo => (
                        <ToDoitem todo={todo} key={todo.id} remove={removeTodo} Toggle={ToggleTodo} />
                    ))}
                    <TodoForm Add={Addtodo} />
                </List>
            </Box>

        </>
    )
}
