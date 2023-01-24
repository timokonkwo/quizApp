// The single option component
export default function Option(props) {
	let cssClass = "option";
    console.log(props)
    if (props.endQuiz){
        cssClass = "option"
    }
    else {
        if (props.selected && props.selected == props.answer) {
            cssClass = "option selected"
            if (props.marked === "correct"){
                cssClass = "option correct"
            }
    
            else {
                cssClass = "option wrong"
            }
        }
    
    }
	
	return <div className={cssClass}>{props.answer}</div>;
}
