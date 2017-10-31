import React from 'react';
import ReactDOM from 'react-dom';

class RandomNumber extends React.Component {
	constructor(props) {
		super(props);
		this.updateNumber = this.updateNumber.bind(this);
	}


	updateNumber () {
		let value = Math.round(Math.random()*100);

		this.props.onUpdate(value);
	}
	

	render() {
		return (
			<div>
				<h1> RANDOM NUMBER : {this.props.number} </h1>
				<input type="button" onClick={this.updateNumber} value="Randomize"></input>
			</div>
		);

	}

}
export default RandomNumber;