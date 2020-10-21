import React from 'react';
import styled from 'styled-components';
import {useHistory} from "react-router-dom";
import {Button, Typography} from '@material-ui/core';

export default function Todo({ id, status, description, onAdvance }) {

    const history = useHistory();

    function handleClick() {
        history.push("/confirmation/"+ id +"/" +status);
    }

    return (
        <StyledTodo>

            <Typography variant="h5">
                {description}
            </Typography>

            <ButtonGroup>
                {status !== 'DONE' && (
                    <Button variant="contained" color="primary"
                        onClick={() => onAdvance({ id, description, status })}
                    >
                        Advance
                    </Button>
                )}
                <Button variant="contained" color="accentcolor" onClick={handleClick} >Delete</Button>
            </ButtonGroup>
        </StyledTodo>
    );
}


const StyledTodo = styled.section`
    padding:20px;
    border-radius: 8px;
    background-color: rgba(255,255,255,0.6);
   
`;

const ButtonGroup = styled.section`
    display: flex;
    justify-content: space-between;
    margin-top: 5%;
`;
