import React from 'react';
import styled from 'styled-components/macro';
import TodoList from './components/TodoList';
import useTodos from './hooks/useTodos';
import AddTodo from './components/AddTodo';
import Search from "./components/Search";
import useSearch from "./hooks/useSearch";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import Confirmation from "./components/Confirmation";
import Home from "./components/Home";

export default function App() {
    const [todos, create, remove, advance] = useTodos();
    const [search, setSearch, filteredTodos] = useSearch(todos);

    return (
        <Router>
        <Main>
            <nav>
                <Link className="FancyLink" to= "/">Home</Link>
                <Link className="FancyLink" to= "/open">Open</Link>
                <Link className="FancyLink" to = "/in_progress">In Progress</Link>
                <Link className="FancyLink" to = "/done">Done</Link>
            </nav>
            <Header>
                <h1>Super Kanban Board </h1>
                <AddTodo onAdd={create} />
                <Search search={search} onChange={setSearch}/>
            </Header>
            <section>
                <Switch>
                    <Route exact path={["/","/home"]}>
                        <Home
                        todos={filteredTodos}
                        onAdvance={advance}
                        />
                    </Route>
                    <StyledLists>
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
                    </StyledLists>
                    <Route path="/confirmation/:id/:status">
                        <Confirmation onDelete={remove}/>
                    </Route>
                </Switch>
            </section>
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
    
    nav{
    margin-top: 20px;
    }
    
    .FancyLink{
    margin: 20px;
    background-color: white;
    border-radius: 10px;
    color: darkred;
    font-style: normal;
    font-weight: bold;
    padding: 15px;
    }
`;

const StyledLists = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
`;

