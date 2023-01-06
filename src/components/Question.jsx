export default function Question(){

    function Option(){
        return (
            <div className="option">
                Adios
            </div>
        )
    }

    return (
        <div className="question">
            <h3>How would one say goodbye in Spanish?</h3>

            <div className="options">
                <Option/>
                <Option/>
            </div>

            <hr />
        </div>
    )
}