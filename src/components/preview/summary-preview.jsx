function SummaryPreview(summary) {

    return (
        <section id="section">
            <h1 className="summary">Summary</h1>
            <textarea name="summary" id="summaryText" cols="55" rows="4" maxLength="280" value={summary}></textarea>
        </section>
    )
}

export default SummaryPreview