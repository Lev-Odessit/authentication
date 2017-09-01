import React from 'react';
import NavigationBar from './NavigationBar';
import Routes from './routes';

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<NavigationBar />
				<Routes />
			</div>
		);
	}
}

export default App;
