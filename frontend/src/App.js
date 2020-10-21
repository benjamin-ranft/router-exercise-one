import React from 'react';
import styled from 'styled-components/macro';
import TodoList from './components/TodoList';
import useTodos from './hooks/useTodos';
import AddTodo from './components/AddTodo';
import Search from "./components/Search";
import useSearch from "./hooks/useSearch";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import Confirmation from "./components/Confirmation";

export default function App() {
    const [todos, create, remove, advance] = useTodos();
    const [search, setSearch, filteredTodos] = useSearch(todos);

    return (
        <Router>
        <Main>
            <nav>
                <Link to= "/open">Open</Link>
                <Link to = "/in_progress">In Progress</Link>
                <Link to = "/done">Done</Link>
            </nav>
            <Header>
                <h1>Super Kanban Board </h1>
                <AddTodo onAdd={create} />
                <Search search={search} onChange={setSearch}/>
            </Header>
            <Board>
                <Switch>
                    <Route exact path="/open">
                        <h2>Open ToDos</h2>
                        <TodoList
                            status="OPEN"
                            todos={filteredTodos}
                            onAdvance={advance}
                         />
                    </Route>
                    <Route exact path="/in_progress">
                        <h2>In Progress ToDos</h2>
                        <TodoList
                            status="IN_PROGRESS"
                            todos={filteredTodos}
                            onAdvance={advance}
                        />
                    </Route>
                    <Route exact path="/done">
                        <h2>Done ToDos</h2>
                        <TodoList
                            status="DONE"
                            todos={filteredTodos}
                            onAdvance={advance}
                        />
                    </Route>
                    <Route path="/confirmation/:id">
                        <Confirmation onDelete={remove}/>
                    </Route>
                </Switch>
            </Board>
        </Main>
        </Router>
    );
}

const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

const Main = styled.main`
    height: 100vh;
    padding: 8px;

    h1 {
        color: hotpink;
    }
`;

const Board = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
`;
