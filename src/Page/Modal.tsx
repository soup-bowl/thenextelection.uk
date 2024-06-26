import { Modal } from "@/Components"

interface Props {
	ElectionDate?: Date
	Reason?: string
	IsElection?: boolean
	open: boolean
	onClose: () => void
}

export const InfoModal = ({ ElectionDate = undefined, Reason = "", IsElection = false, open, onClose }: Props) => {
	return (
		<Modal open={open} onClose={onClose}>
			<h2>About the Site</h2>
			<p>
				<strong>The Next Election UK</strong> provides a simple, quick countdown to the next UK General Election. The
				website was made by{" "}
				<strong>
					<a href="https://github.com/soup-bowl" style={{ whiteSpace: "nowrap" }}>
						soup-bowl
					</a>
				</strong>{" "}
				and the code is{" "}
				<strong>
					<a href="https://github.com/soup-bowl/thenextelection.uk">Open Source</a>
				</strong>
				.
			</p>
			<h2>When exactly is the next election?</h2>
			{!IsElection ? (
				<p>
					The current estimates place the next election at{" "}
					{ElectionDate !== undefined && (
						<strong>
							{ElectionDate.toLocaleString("default", { month: "long" })} {ElectionDate.getFullYear()}
						</strong>
					)}
					. The reason for this is <strong>{Reason}</strong>.
				</p>
			) : (
				<p>
					Either an election is <strong>ongoing</strong>, or{" "}
					<a href="https://www.instituteforgovernment.org.uk/explainer/dissolution-parliament">
						parliament has been <strong>dissolved</strong>
					</a>{" "}
					ahead of one. The information will be updated once an elected government is formed.
				</p>
			)}
			<h2>What is the source of the next election date?</h2>
			<p>
				The <strong>General Election countdown</strong> information is a rough figure based on information from the{" "}
				<a href="https://www.instituteforgovernment.org.uk/article/explainer/calling-general-election">
					Institute for Government
				</a>{" "}
				guidance on how a general election is called. If the ruling party calls for an early general election, this
				figure will be updated to reflect that.
			</p>
			<h2>How do I Vote?</h2>
			<p>
				You can find information about your local council votes and how to register to vote on the UK Government{" "}
				<a href="https://www.gov.uk/how-to-vote">Register to Vote</a> page.
			</p>
			<h2>Can I embed this Countdown?</h2>
			<p>You can! You can use this anywhere that supports HTML IFrames:</p>
			<pre style={{ backgroundColor: "#d0d0d0", padding: 10, borderRadius: 5 }}>
				{'<iframe src="https://thenextelection.uk/" width="800" height="600"></iframe>'}
			</pre>
			<p
				style={{
					color: "#818181",
					textAlign: "center",
				}}
			>
				Version {import.meta.env.VITE_VER ?? "Unknown"} - This website is not affiliated with the UK Government or any
				Political Party.
			</p>
		</Modal>
	)
}
