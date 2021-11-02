import { useState } from 'react';
import Modal from './components/Modal/Modal';
import Form from './components/Form/Form';
import GlobalStyle, { Button, Heading, Section, Text } from './globalStyles';

function App() {
	const [show, setShow] = useState();

	return (
		<>
			<GlobalStyle />
			<Section ds="red">
				<Button onClick={() => setShow(true)} padding="1rem" size="2rem">
					Click me
				</Button>

				<Modal show={show} onHide={() => setShow(false)}>
					<Heading>Hello there</Heading>
					<Text size="1.3rem">
						Subscribe to Aldar Satori{' '}
						<a href="https://www.youtube.com/channel/UCMT4q5sUmmJnUrltZShykiQ?sub_confirmation=1">
							here
						</a>
					</Text>
				</Modal>

				{/* <Modal show={show} onHide={() => setShow(false)}>
					<Form />
				</Modal> */}
			</Section>
		</>
	);
}

export default App;
