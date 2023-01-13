export default function Question(props) {
    
	function Option(props) {
		return <div className="option" onClick={props.onClick}>{props.option}</div>;
	}

    const options = [props.correct_answer, ...props.incorrect_answers];

    const answers = options.map(option => <Option key={option} option={option}/>)


	return (
		<div className="question grid">
			<div>
				<h3>How would one say goodbye in Spanish?</h3>

				<div className="options">
					{answers}
				</div>
			</div>

			<hr />
		</div>
	);
}
