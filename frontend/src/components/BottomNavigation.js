import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialBottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from "@material-ui/icons/Home";
import FiberNewIcon from "@material-ui/icons/FiberNew";
import CachedIcon from "@material-ui/icons/Cached";
import CheckIcon from "@material-ui/icons/Check";

import {useHistory} from "react-router-dom";


const useStyles = makeStyles({
    root: {
    },
});

export default function BottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const history = useHistory();

    function handleClick(path) {
        history.push(path);
    }

    return (
        <MaterialBottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction onClick={() => handleClick("/")} label="Overview" icon={<HomeIcon />} />
            <BottomNavigationAction onClick={() => handleClick("/open")}label="Open" icon={<FiberNewIcon />} />
            <BottomNavigationAction onClick={() => handleClick("/in_progress")}label="In Progress" icon={<CachedIcon />} />
            <BottomNavigationAction onClick={() => handleClick("/done")}label="Done" icon={<CheckIcon />} />

        </MaterialBottomNavigation>
    );
}

