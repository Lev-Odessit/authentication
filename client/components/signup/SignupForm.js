import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import classnames from 'classnames'
import timezones from 'google-timezones-json';

class SignupForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			email: '',
			password: '',
			passwordConfirmation: '',
			timezones: '',
			errors: {},
			isLoading: false
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({[e.target.name]: e.target.value})
	}

	onSubmit(e) {
		e.preventDefault();
		this.setState({ errors: {} });
		this.props.userSignupRequest(this.state).then(
			() => {},                                       //if all is OK
			( err ) => this.setState({ errors: err.response.data })  //if something goes bad we get a response
		);
	}

	render() {
		const { errors } = this.state;
		const options = map(timezones, (index,value) =>
			<option key={index} value={value}>{value}</option>
		);

		return (
			<form onSubmit={this.onSubmit}>
				<h1>Join our community!</h1>

				<div className={classnames("form-group", { 'has-error': errors.username })}>
					<label htmlFor="username" className="control-label">Username</label>
					<input
						value={this.state.username}
						onChange={this.onChange}
						type="text"
						name="username"
						className="form-control"
					/>
					{errors.username && <span className="help-block">{errors.username}</span>}
				</div>

				<div className={classnames("form-group", { 'has-error': errors.username })}>
					<label htmlFor="email" className="control-label">Email</label>
					<input
						value={this.state.email}
						onChange={this.onChange}
						type="text"
						name="email"
						className="form-control"
					/>
					{errors.email && <span className="help-block">{errors.email}</span>}
				</div>

				<div className={classnames("form-group", { 'has-error': errors.username })}>
					<label htmlFor="password" className="control-label">Password</label>
					<input
						value={this.state.password}
						onChange={this.onChange}
						type="password"
						name="password"
						className="form-control"
					/>
					{errors.password && <span className="help-block">{errors.password}</span>}
				</div>

				<div className={classnames("form-group", { 'has-error': errors.username })}>
					<label htmlFor="passwordConfirmation" className="control-label">Password Confirmation</label>
					<input
						value={this.state.passwordConfirmation}
						onChange={this.onChange}
						type="password"
						name="passwordConfirmation"
						className="form-control"
					/>
					{errors.passwordConfirmation && <span className="help-block">{errors.passwordConfirmation}</span>}
				</div>

				<div className={classnames("form-group", { 'has-error': errors.username })}>
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
					{errors.timezones && <span className="help-block">{errors.timezones}</span>}
				</div>

				<div className={classnames("form-group", { 'has-error': errors.username })}>
					<button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
						Sign up
					</button>
				</div>
			</form>
		);
	}
}

SignupForm.propTypes = {
	userSignupRequest: PropTypes.func.isRequired
};

export default SignupForm;
