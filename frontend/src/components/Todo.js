import React from 'react';
import styled from 'styled-components';
import {useHistory} from "react-router-dom";

export default function Todo({ id, status, description, onAdvance }) {

    const history = useHistory();

    function handleClick() {
        history.push("/confirmation/"+ id +"/" +status);
    }

    return (
        <StyledTodo>
            <h3>
                {description} <small>[{status}]</small>
            </h3>
            <ButtonGroup>
                {status !== 'DONE' && (
                    <button
                        onClick={() => onAdvance({ id, description, status })}
                    >
                        Advance
                    </button>
                )}
                <button onClick={handleClick} >Delete</button>
            </ButtonGroup>
        </StyledTodo>
    );
}


const StyledTodo = styled.section`
    padding: 8px;
    border: 1px solid salmon;
    border-radius: 8px;
`;

const ButtonGroup = styled.section`
    display: flex;
    justify-content: space-between;
`;
