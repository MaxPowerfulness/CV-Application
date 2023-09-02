import "../../styles/summary.css";

function Summary({onSummary}) {

    return (
        <form>
            <h1>Summary</h1>
            <textarea name="summary" id="summaryText" cols="55" rows="4" maxLength="280" placeholder="Tell me about yourself" onChange={onSummary}></textarea>
        </form>
    )
}


export default Summary