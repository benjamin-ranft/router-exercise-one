import React from "react";
import {useHistory, useParams} from "react-router-dom";
import {Button, Typography} from '@material-ui/core';

export default function Confirmation({onDelete}){

    const {id} = useParams()
    const history = useHistory();

    function handleClick(id) {
        onDelete(id);
        history.goBack();
    }

return(
    <>
        <Typography variant="h2">DANGER - Do you really want to delete your task? - DANGER</Typography>
        <Button onClick={() => handleClick(id)}>Confirm</Button>
    </>
)

}