import React, { Component, PropTypes } from 'react';
import Menu from 'components/layout/menu/Menu.jsx';
import { Grid, Row, Col } from 'react-bootstrap';
import './Header.less';

export default class Header extends Component {
	render () {
		return (
			<header className='Header'>
				<Grid>
					<Row>
						<Col sm={2} mdOffset={1}>
							<div className='Header-img-holder' />
						</Col>
						<Col sm={8}>
							<h1 className='Header-title'>
								Super SPA
								<small className='Header-subtitle'>
									Take your time
								</small>
							</h1>
						</Col>
					</Row>
					<Row className='Header-menu'>
						<Col sm={10} smOffset={2} mdOffset={3}>
							<Menu />
						</Col>
					</Row>
				</Grid>
			</header>
		);
	}
}
