import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Form from './components/Form/Form';
import GlobalStyle, { Row, Section, Text } from './globalStyles';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Row gap="2rem" justify="center" align="center" height="80px" background="green">
				<Link to="/">
					<Text size="2rem">HOME</Text>
				</Link>
				<Link to="/signup">
					<Text size="2rem">SIGNUP</Text>
				</Link>
			</Row>
			<Switch>
				<Route path="/" exact component={() => <Section>HOME</Section>} />
				<Route path="/signup" component={Form} />
			</Switch>
		</Router>
	);
}

export default App;
