import Modal from "react-modal";
import { Icon } from "../components/icon.jsx";
import { Button } from "../components/button.jsx";

export function CustomModal({ isOpen, onClose, children }) {
	return (
		<Modal isOpen={isOpen}>
			<Button
				className={"modal-close-button"}
				onClick={() => {
					console.log("Cerrar Modal");
					onClose();
				}}
			>
				<Icon name="close" />
			</Button>
			{children}
		</Modal>
	);
}
