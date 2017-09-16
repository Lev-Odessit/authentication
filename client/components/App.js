import React from 'react';
import NavigationBar from './NavigationBar';
import Routes from './routes';
import FlashMessagesList from './flash/FlashMessagesList';

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<NavigationBar />
				<FlashMessagesList />
				<Routes />
			</div>
		);
	}
}

export default App;
