import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Greetings from './Greetings';
import SignupPage from './signup/SignupPage';

class Routes extends React.Component {

	render() {
		return (
			<Switch>
				<Route exact path='/' component={Greetings}/>
				<Route path='/signup' component={SignupPage}/>
			</Switch>
		)
	}

}

export default Routes;
