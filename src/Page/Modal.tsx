import { Modal } from "../Components/Modal";

interface Props {
	open: boolean;
	onClose: () => void;
}

export const InfoModal = ({ open, onClose }: Props) => {
	const date = new Date(import.meta.env.VITE_ELECTION_DATE ?? '');
	const reason = Number(import.meta.env.VITE_ELECTION_REASON ?? '0');

	const electionReason = () => {
		switch (reason) {
			default:
			case 0:
				return "unknown";
			case 1:
				return "the end of the Political term";
			case 2:
				return "the incumbent Prime Minister called a General Election";
		}
	}

	return (
		<Modal open={open} onClose={onClose}>
			<h2>About the Site</h2>
			<p>
				<strong>The Next Election UK</strong> just provides a simple, quick countdown to the next UK General
				Election. The website was made by <strong><a href="https://github.com/soup-bowl">soup-bowl
				</a></strong> and the code is <strong><a href="https://github.com/soup-bowl/thenextelection.uk">Open Source</a></strong>.
			</p>
			<h2>When exactly is the next election?</h2>
			<p>
				The current estimates place the next election at <strong>{date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}</strong>.
				The reason for this is <strong>{electionReason()}</strong>.
			</p>
			<h2>What is the source of the next election date?</h2>
			<p>
				The <strong>General Election countdown</strong> information is a rough figure based on information
				from the <a href="https://www.instituteforgovernment.org.uk/article/explainer/calling-general-election">
					Institute for Government
				</a> guidance on how a general election is called. If the ruling party calls for an early general
				election, this figure will be updated to reflect that.
			</p>
			<h2>How do I Vote?</h2>
			<p>
				You can find information about your local council votes and how to register to vote on the UK
				Government <a href="https://www.gov.uk/how-to-vote">Register to Vote</a> page.
			</p>
			<p style={{
				color: '#818181',
				textAlign: 'center',
			}}>This website is not affiliated with the UK Government or any Political Party.</p>
		</Modal>
	);
}