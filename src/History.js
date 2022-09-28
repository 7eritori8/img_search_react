const History = (props) => {
    const historyLists = props.searchTextArray.map(
        (historyList, i) => <li key={`${historyList}${i}`}>{historyList}</li>
    )
    return (
        <>
            {historyLists}
        </>
    )
}
export default History