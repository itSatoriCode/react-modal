import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';

export const Background = styled(motion.div)`
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.8);
	top: 0;
	left: 0;
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 99;
`;

export const ModalWrapper = styled(motion.div)`
	z-index: 100;
	padding: 50px 30px 30px;
	border-radius: 10px;
	background-color: ${({ background }) => (background ? background : 'white')};
	position: relative;
	display: flex;
	flex-direction: column;
	@media screen and (min-width: 550px) {
		width: 500px;
	}
	@media screen and (min-width: 720px) {
		width: 700px;
	}
`;

export const CloseModalButton = styled(MdClose)`
	cursor: pointer;
	position: absolute;
	top: 20px;
	right: 20px;
	width: 32px;
	height: 32px;
	padding: 0;
	z-index: 100;
`;
