import "../styles/summary.css";

function Summary() {

    return (
        <section id="section">
            <h1 className="summary">Summary</h1>
            <textarea name="summary" id="summaryText" cols="55" rows="4" maxLength="280" value={summary} onChange={(e) => setSummary(e.target.value)}></textarea>
        </section>
    )
}


export default Summary