import styled from "@emotion/styled";
import { ReactNode, useEffect } from "react";

const ModalControl = styled.div({
	position: "fixed",
	zIndex: 1300,
	inset: 0
});

const ModalBackdrop = styled.div({
	position: "fixed",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	inset: "0px",
	backgroundColor: "rgba(0, 0, 0, 0.75)",
	zIndex: -1
});

const ModalBackground = styled.div({
	height: "100%",
	outline: 0,
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
});

const ModalBox = styled.div({
	backgroundColor: "#1B1A1B",
	margin: "32px",
	position: "relative",
	overflowY: "auto",
	display: "flex",
	flexDirection: "column",
	width: "90vw",
	maxHeight: "calc(100% - 64px)",
	minWidth: "200px",
	borderRadius: "5px",
	boxShadow: [
		`rgb(0 0 0 / 20%) 0px 11px 15px -7px,
		rgb(0 0 0 / 14%) 0px 24px 38px 3px,
		rgb(0 0 0 / 12%) 0px 9px 46px 8px`
	]
});

const ModalBody = styled.div({
	padding: "16px 24px",
	flex: "1 1 auto",
	overflowY: "auto",
	fontSize: "1.25rem",
	fontFamily: "sans-serif",
	textAlign: "left",
	"a": {
		color: "white"
	}
});

interface ModalProps {
	open?: boolean;
	onClose: () => void;
	children: ReactNode;
}

const onCloseInteraction = (onClose: () => void) => {
	document.body.style.overflow = 'visible';
	onClose();
}

export const Modal = ({ open, onClose, children }: ModalProps) => {
	useEffect(() => {
		document.getElementById("modal")?.addEventListener("click", (e) => {
			if (e.target instanceof HTMLElement) {
				if (!e.target.closest("#modalbox")) {
					onCloseInteraction(onClose);
				}
			}
		});
	}, [onClose]);

	if (open) {
		document.body.style.overflow = 'hidden';
		return (
			<ModalControl id="modal">
				<ModalBackdrop />
				<ModalBackground>
					<ModalBox id="modalbox" style={{ maxWidth: '1200px' }}>
						<ModalBody>
							{children}
						</ModalBody>
					</ModalBox>
				</ModalBackground>
			</ModalControl>
		);
	} else {
		return (<></>);
	}
}
