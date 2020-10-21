import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

export default function AddTodo({ onAdd }) {
    const [description, setDescription] = useState('');

    return (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <TextField id="filled-basic" label="Description" variant="filled"  onChange={(event) => setDescription(event.target.value)}/>
            <Button variant="contained" color="secondary" type="submit">New Todo</Button>
        </form>
    );

    function handleSubmit(event) {
        event.preventDefault();
        onAdd(description);
        setDescription('');
    }
}
