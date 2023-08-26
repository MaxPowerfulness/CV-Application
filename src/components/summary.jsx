import { useState } from "react";
import "../styles/summary.css"

function Summary() {
    const [summary, setSummary] = useState('')

    return (
        <section>
            <h1 className="summary">Summary</h1>
            <textarea name="summary" id="summaryText" cols="30" rows="10" value={summary} onChange={(e) => setSummary(e.target.value)}></textarea>
        </section>
    )
}


export default Summary