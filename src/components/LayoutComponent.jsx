import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from './Header'
import Footer from './Footer'
import Home from './HomeComponent'


export default class LayoutComponent extends Component {
	render() {
		return (
			<div className="app-container">
				<Header />

				{/* AppContent */}
				{/* <div className="app-content">
					{this.props.children}
				</div> */}

				{/* < Home /> */}

				{/*Footer*/}
				<div className="Footer">
					This is Footer
				</div>
<Footer />
			</div>
		);
	}
}
