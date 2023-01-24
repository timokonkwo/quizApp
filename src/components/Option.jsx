// The single option component
export default function Option(props) {
    console.log(props.marked)
    let cssClass;

    if (!props.marked){
        if (props.selected && props.selected == props.answer){
            cssClass = "option selected"
        }
        else {
            cssClass = "option"
        }
    }

    else {
        if (props.selected && props.selected == props.answer){
            cssClass = "option correct"
        }
        else {
            cssClass = "option wrong"
        }
    }


	return (
		<div
			className={cssClass}
		>
			{props.answer}
		</div>
	);
}
