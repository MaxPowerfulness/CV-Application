import "../../styles/summary.css";

function Summary({onSummary, toggleCollapsibility}) {

    return (
        <section>
            <div className="headerCont">
                <h1>Summary</h1>
                <span onClick={toggleCollapsibility} className="downArrow">v</span>
            </div>
            <div className="content">
                <form>
                    <textarea name="summary" id="summaryText" cols="55" rows="4" maxLength="280" placeholder="Tell me about yourself" onChange={onSummary}></textarea>
                </form>
            </div>
        </section>
    )
}


export default Summary