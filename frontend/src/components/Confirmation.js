import React from "react";
import {useHistory, useParams} from "react-router-dom";

export default function Confirmation({onDelete}){

    const {id} = useParams()
    const history = useHistory();

    function handleClick(id) {
        onDelete(id);
        history.goBack();
    }

return(
    <>
        <h2>DANGER - Do you really want to delete your task? - DANGER</h2>
        <button onClick={() => handleClick(id)}>Confirm</button>
    </>
)

}