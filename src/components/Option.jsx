// The single option component
export default function Option(props){
    return (
        <div className={props.selected && props.selected === props.answer ? "option selected": "option"}>
            {props.answer}
        </div>
    )
}