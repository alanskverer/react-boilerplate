import React, { useState, useEffect } from 'react'
import {
	Alert,
	Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button, Dropdown, Modal
} from 'react-bootstrap';

import axios from 'axios'
import Card from './Card';


const BootstrapComponents = (props) => {
	useEffect(() => {



	}, [])



	const [text, setText] = useState("")
	const [users, setUsers] = useState([])
	const textChangeHanlder = (event) => {
		console.log(event.target.value)
		setText(event.target.value)
	}
	return (
		<div style={{ display: 'flex', flexFlow: 'wrap', justifyContent: 'flex-end' }} >
			{users.map((user => {
				return <Card user={user} />
			})

			)}
		</div>
	)
}

export default BootstrapComponents
