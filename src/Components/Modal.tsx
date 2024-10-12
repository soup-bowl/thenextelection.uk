import { ComponentChildren } from "preact"
import { useEffect } from "preact/hooks"
import "@fontsource/inter"

interface ModalProps {
	open?: boolean
	onClose: () => void
	children: ComponentChildren
}

const onCloseInteraction = (onClose: () => void) => {
	document.body.style.overflow = "visible"
	onClose()
}

export const Modal = ({ open, onClose, children }: ModalProps) => {
	useEffect(() => {
		document.getElementById("modal")?.addEventListener("click", (e) => {
			if (e.target instanceof HTMLElement) {
				if (!e.target.closest("#modalbox")) {
					onCloseInteraction(onClose)
				}
			}
		})
	}, [onClose])

	if (open) {
		document.body.style.overflow = "hidden"
		return (
			<div id="modal" className="modal">
				<div className="modal-backdrop" />
				<div className="modal-background">
					<div id="modalbox" className="modal-box" style={{ maxWidth: "1200px" }}>
						<div className="modal-body">{children}</div>
					</div>
				</div>
			</div>
		)
	} else {
		return <></>
	}
}
