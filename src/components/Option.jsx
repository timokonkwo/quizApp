// The single option component
export default function Option(props) {
	let cssClass = "option";

    if (props.endQuiz){
        if (props.selected && props.selected == props.answer && props.selected === props.correctAnswer && props.marked === "correct") {
            cssClass = "option correct"

        } else if (props.selected && props.selected == props.answer && props.marked == "wrong") {
            cssClass = "option wrong"
        }

    }

    else if (props.selected && props.selected == props.answer){
        cssClass = "option selected"
    }

	return <div className={cssClass}>{props.answer}</div>;
}
