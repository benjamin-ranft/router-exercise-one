import React from 'react';
import TodoList from "./TodoList";

export default function Home({todos, onAdvance}) {

    return (
                <>
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
                </>
    );
}
