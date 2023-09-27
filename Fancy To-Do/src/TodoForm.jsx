import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Create from "@mui/icons-material/Create";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
export default function TodoForm({ Add }) {
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        Add(text);
        setText("");
    }
    return (
        <ListItem sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="Outlined" onChange={handleChange} value={text} variant="outlined"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton aria-label="create todo" edge="end" type="submit">
                                    <Create />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }} />
            </form>
        </ListItem>
    )
}

