import React from 'react'
import {
	Alert,
	Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button, Card, Dropdown, Modal
} from 'react-bootstrap';



const MyCard = (props) => {
	const { name, email } = props.user
	return (
		<div style={{ width: 600 }}>
			<Card style={{ width: '22rem' }}>
				<Card.Img variant="top" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kendall-jenner-attends-the-tiffany-co-flagship-store-launch-news-photo-1596195763.jpg" />
				<Card.Body>
					<Card.Title>{email}</Card.Title>
					<Card.Text>
						{name}
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
		</div>

	)
}

export default MyCard
