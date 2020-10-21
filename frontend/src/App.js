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
import BottomNavigation from "./components/BottomNavigation";
import { responsiveFontSizes, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {Typography} from "@material-ui/core";


export default function App() {
    const [todos, create, remove, advance] = useTodos();
    const [search, setSearch, filteredTodos] = useSearch(todos);

    return (
        <ThemeProvider theme={theme}>
        <Router>
        <Main>
            <Header>
                <Typography variant="h1">Super Kanban Board </Typography>
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
                    <Route exact path="/open">

                        <Typography variant="h2">Open ToDos</Typography>
                        <TodoList
                            status="OPEN"
                            todos={filteredTodos}
                            onAdvance={advance}
                         />
                    </Route>
                    <Route exact path="/in_progress">
                        <Typography variant="h2">In Progress ToDos</Typography>
                        <TodoList
                            status="IN_PROGRESS"
                            todos={filteredTodos}
                            onAdvance={advance}
                        />
                    </Route>
                    <Route exact path="/done">
                        <Typography variant="h2">Done ToDos</Typography>
                        <TodoList
                            status="DONE"
                            todos={filteredTodos}
                            onAdvance={advance}
                        />
                    </Route>
                    <Route path="/confirmation/:id/:status">
                        <Confirmation onDelete={remove}/>
                    </Route>
                </Switch>
            </section>
        </Main>
            <FancyFooter>
                    <BottomNavigation/>
            </FancyFooter>
        </Router>
        </ThemeProvider>
    );
}

let theme = createMuiTheme({

    palette: {
        primary:{
            main: "#78909c",
        },
        secondary: {
            main: "#eceff1",

        },

        accentcolor:{
            main: "#a7c0cd"
        },

        accentcolor2:{
            main: "#fff",
        },
    },
    typography: {
        fontFamily: [
            'Roboto',
        ].join(','),
    },
});

theme = responsiveFontSizes(theme);

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
        color: black;
        text-align: center;
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

const FancyFooter = styled.footer`
position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  background: darkred;
`
