import React from 'react';
import TodoList from "./TodoList";
import styled from "styled-components/macro";

export default function Home({todos, onAdvance}) {

    return (
                <Hola>
                    <h2>ToDo Overview</h2>
                            <TodoList
                                status="OPEN"
                                todos={todos}
                                onAdvance={onAdvance}
                            />
                            <TodoList
                                status="IN_PROGRESS"
                                todos={todos}
                                onAdvance={onAdvance}
                            />
                            <TodoList
                                status="DONE"
                                todos={todos}
                                onAdvance={onAdvance}
                            />
                </Hola>
    );
}

const Hola = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 50px;
`;
