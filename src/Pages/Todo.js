import React from 'react'
import styles from '../../src/todoStyle.module.css'
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';


import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {
    Alert,
    Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Dropdown, Modal
} from 'react-bootstrap';

import TextField from '@material-ui/core/TextField';

import { withStyles } from "@material-ui/core/styles";
import { Input } from 'antd';
import Button from '@material-ui/core/Button';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

import AddIcon from '@material-ui/icons/Add';

import Add from '@material-ui/icons/Add';







const Todo = () => {

    return (
        <Container >
            <div className={styles.main}>

                <div className={styles.header}>
                    <h3>Todo list</h3>
                </div>
                <div className={styles.todolistContainer}>
                    <div className={styles.todolist}>
                        <h6>What's the plan for today?</h6>
                        <div className={styles.missionContainer}>
                            <input style={{ backgroundColor: 'transparent', color: 'white', width: '80%', height: '40px' }}
                                placeholder="Add a mission" onChange={(e) => console.log(e.target.value)} />
                            <Button style={{ backgroundColor: 'transparent', color: 'white' }} startIcon={<AddIcon />} variant="contained">Add</Button>
                        </div>


                    </div>

                </div>
            </div>


        </Container >

    )
}

export default Todo
