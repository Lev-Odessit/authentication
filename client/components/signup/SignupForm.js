import React from 'react';
import map from 'lodash/map';
import timezones from 'google-timezones-json';

class SignupForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			email: '',
			password: '',
			passwordConfirmation: '',
			timezones: ''
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({[e.target.name]: e.target.value})
	}

	onSubmit(e) {
		e.preventDefault();
		console.log(this.state);
	}

	render() {
		const options = map(timezones, (index,value) =>
			<option key={index} value={value}>{value}</option>
		);

		return (
			<form onSubmit={this.onSubmit}>
				<h1>Join our community!</h1>

				<div className="form-group">
					<label htmlFor="username" className="control-label">Username</label>
					<input
						value={this.state.username}
						onChange={this.onChange}
						type="text"
						name="username"
						className="form-control"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="email" className="control-label">Email</label>
					<input
						value={this.state.email}
						onChange={this.onChange}
						type="text"
						name="email"
						className="form-control"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="password" className="control-label">Password</label>
					<input
						value={this.state.password}
						onChange={this.onChange}
						type="password"
						name="password"
						className="form-control"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="passwordConfirmation" className="control-label">Password Confirmation</label>
					<input
						value={this.state.passwordConfirmation}
						onChange={this.onChange}
						type="password"
						name="passwordConfirmation"
						className="form-control"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="timezones" className="control-label">Timezones</label>
					<select
						value={this.state.timezones}
						onChange={this.onChange}
						name="timezones"
						className="form-control"
					>
						<option value="" disabled>Choose Your Timezone</option>
						{options}
					</select>
				</div>

				<div className="form-group">
					<button className="btn btn-primary btn-lg">
						Sign up
					</button>
				</div>
			</form>
		);
	}
}

export default SignupForm;
