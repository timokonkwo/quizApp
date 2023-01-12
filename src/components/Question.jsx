export default function Question() {
    
	function Option(props) {
		return <div className="option" onClick={props.onClick}>{props.option}</div>;
	}

	return (
		<div className="question grid">
			<div>
				<h3>How would one say goodbye in Spanish?</h3>

				<div className="options">
					<Option option="Adios" />
					<Option option="Hola" />
					<Option option="Au Revoir" />
					<Option option="Salir" />
				</div>
			</div>

			<hr />
		</div>
	);
}
