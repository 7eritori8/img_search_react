const History = (props) => {
    const historyLists = props.searchTextArray.map(
        (historyList, i) => <li
            key={`${historyList}${i}`}
            onClick={() => {
                props.onHistoryListClick(historyList)
            }}
        >{historyList}</li>
    )
    return (
        <>
            {historyLists}
        </>
    )
}
export default History