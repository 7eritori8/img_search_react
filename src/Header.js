import { useState } from "react";
import History from "./History";
import "./Header.css";

const Header = (props) => {
    const [text, setText] = useState("");
    const [searchTextArray, setSearchTextArray] = useState([]);

    // ボタンクリックされたときに下記が発火。
    const addSearchTextArray = () => {
        if (text !== "") {
            // inputに入力した内容を親コンポーネントに送る
            props.setValueText(text);
            // 配列に入力内容を格納するこの配列はHistory.jsに送られる
            setSearchTextArray((prev) => {
                return [...prev, text]
            }
            )
        }
    }
    const randomImageShow = () => {
        props.generateRandomURL();
    }
    return (
        <>
            <header>
                <div className="header__logo fc-aqua flex-align-center">
                    <h3>Ritori</h3>
                </div>
                <div className="header__right-area flex-align-center">
                    <div className="right-area__search mr-2">
                        <form action="." className="flex" autoComplete="off">
                            <input type="text" name="" id="textform" placeholder="cat dog ..."
                                value={text} onChange={(event) => setText(event.target.value)}
                            />
                            <ul id="search__history">
                                {/* 配列を渡す。 */}
                                <History searchTextArray={searchTextArray} />
                            </ul>
                            <button id="submitBtn" type="button" onClick={addSearchTextArray}>
                                <img src={`/images/tab_search.svg`} alt="search" />
                            </button>
                        </form>
                    </div>
                    <div className="right-area__random-btn mr-2">
                        <button id="randomBtn" className="flex-align-center" onClick={randomImageShow}>
                            <img src={`/images/ei-random.svg`} alt="randomImage" />
                        </button>
                    </div>
                    <div className="right-area__hamburger">
                        <button className="bc-black" id="hamburger__open">
                            <img src={`/images/hamburger.svg`} alt="openMenu" />
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header