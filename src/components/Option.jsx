// The single option component
export default function Option(props) {

    // Initialize the css class to be styled as an option
	let cssClass = "option";

    // Initialize variable to check the correct click event target
    let targetOptionElement

    // Checking of correct click event target
    props.selected && props.selected == props.answer ? targetOptionElement = true : targetOptionElement = false

    // If the quiz has ended, check for correct
    if (props.endQuiz){
        if (targetOptionElement && props.selected === props.correctAnswer && props.marked === "correct") {
            cssClass = "option correct"

        } else if (targetOptionElement && props.marked == "wrong") {
            cssClass = "option wrong"
        }

        else {
            cssClass="option marked"
        }

    }

    else if (targetOptionElement){
        cssClass = "option selected"
    }

    // Make react recognize the special characters returned.
	return <div className={cssClass} dangerouslySetInnerHTML={{__html: props.answer}} />;
}
