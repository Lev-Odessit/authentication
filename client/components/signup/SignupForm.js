import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import classnames from 'classnames';
import timezones from 'google-timezones-json';

import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../../server/shared/validations/signup';

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

	isValid() {
		const { errors,isValid } = validateInput(this.state);

		if(!isValid) {
			this.setState({ errors });
		}

		return isValid;
	}

	onSubmit(e) {
		e.preventDefault();

		if(this.isValid()) {
			this.setState({errors: {}, isLoading: true});
			this.props.userSignupRequest(this.state).then(
				() => {
				},
				(err) => this.setState({errors: err.response.data, isLoading: false})
			);
		}
	}

	render() {
		const { errors } = this.state;
		const options = map(timezones, (index,value) =>
			<option key={index} value={value}>{value}</option>
		);

		return (
			<form onSubmit={this.onSubmit}>
				<h1>Join our community!</h1>

				<TextFieldGroup
					error={errors.username}
					label="Username"
					onChange={this.onChange}
					value={this.state.username}
					field="username"
				/>

				<TextFieldGroup
					error={errors.email}
					label="Email"
					onChange={this.onChange}
					value={this.state.email}
					field="email"
				/>

				<TextFieldGroup
					error={errors.password}
					label="Password"
					onChange={this.onChange}
					value={this.state.password}
					field="password"
				/>

				<TextFieldGroup
					error={errors.passwordConfirmation}
					label="Password Confirmation"
					onChange={this.onChange}
					value={this.state.passwordConfirmation}
					field="passwordConfirmation"
				/>

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
