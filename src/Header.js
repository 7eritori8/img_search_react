import { useEffect, useState } from "react";
import History from "./History";
import "./Header.css";
import Drawer from '@mui/material/Drawer';

const Header = (props) => {
    const [text, setText] = useState("");
    const [searchTextArray, setSearchTextArray] = useState([]);

    // ボタンクリックされたときに下記が発火。
    const addSearchTextArray = () => {
        if (text !== "") {
            // 配列に入力内容を格納するこの配列はHistory.jsに送られる
            setSearchTextArray((prev) => {
                return [...prev, text]
            }
            )
        }
    }
    const searchHistory = (selectedHistoryText) => {
        props.onSubmitFromHeader(selectedHistoryText)
        setText(selectedHistoryText)
    }
    useEffect(() => {
    }, [text])
    const [hamburgerToggle, setHamburgerToggle] = useState(false)
    console.log(hamburgerToggle)
    return (
        <>
            <header>
                <div className="header__logo fc-aqua flex-align-center">
                    <h3>Ritori</h3>
                </div>
                <div className="header__right-area flex-align-center">
                    <div className="right-area__search mr-2">
                        <form action="." className="flex" autoComplete="off">
                            <input type="text" name="" placeholder="cat dog ..."
                                value={text} onChange={(event) => setText(event.target.value)}
                            />
                            <ul id="search__history">
                                {/* 配列を渡す。 */}
                                <History
                                    searchTextArray={searchTextArray}
                                    onHistoryListClick={(selectedHistoryText) => {
                                        searchHistory(selectedHistoryText)
                                    }
                                    } />
                            </ul>
                            <button id="submitBtn" type="button" onClick={() => {
                                props.onSubmitFromHeader(text)
                                addSearchTextArray()
                            }}>
                                <img src={`/images/tab_search.svg`} alt="search" />
                            </button>
                        </form>
                    </div>
                    <div className="right-area__random-btn mr-2">
                        <button id="randomBtn" className="flex-align-center" onClick={props.onRandomBtnClick}>
                            <img src={`/images/ei-random.svg`} alt="randomImage" />
                        </button>
                    </div>
                    {/* <div className="right-area__hamburger">
                        <button className="bc-black" id="hamburger__open">
                            <img src={`/images/hamburger.svg`} alt="openMenu" />
                        </button>
                    </div> */}
                </div>
            </header>
        </>
    )
}
export default Header