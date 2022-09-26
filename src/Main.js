import { useEffect, useState } from "react";
import Header from "./Header";
import "./Main.css";
import Image from "./Image";

const Main = () => {
    //  Header.jsで入力された内容を入れるvalueText
    const [valueText, setValueText] = useState("");

    // 5000以下のランダムな整数を生成
    const generateRandomNum = () => {
        return Math.floor(Math.random() * (5000));
    }
    // srcURLを配列にして、５０回入れるでもよい。というかそうしたいよね
    // let srcURLs = "";
    const [srcURLs, setSrcURLs] = useState("");

    // ランダムな画像のURLを生成
    const generateRandomURL = () => {

        // srcURLs = `https://source.unsplash.com/random/${generateRandomNum()}`
        setSrcURLs(`https://source.unsplash.com/random/${generateRandomNum()}`)
        console.log(srcURLs);
    }
    // valueTextを使ってURLを生成
    const generateSearchURL = (valueText) => {
        // srcURLs = `https://source.unsplash.com/featured/?${valueText}/${generateRandomNum()}`
        setSrcURLs(`https://source.unsplash.com/featured/?${valueText}/${generateRandomNum()}`)
        return srcURLs;
    }

    // Header.jsにtextが入力、クリックされると検索用のsrcURLを作る。
    useEffect(() => {
        // valueText が更新された場合、空文字出ないときは、URLを生成する
        if (valueText !== "") {
            generateSearchURL(valueText);
            console.log({ srcURL: srcURLs })
        }
        console.log("mugen")
    }, [valueText])
    // 初期表示処理
    // generateRandomURL();

    return (
        <>
            {/* Headerコンポーネントを読み込みつつtextを更新する関数を渡す。 */}
            <Header setValueText={setValueText} />
            <main>
                <div className="img__wrapper">
                    <ul id="img__list">
                        {/* 画像コンポーネントを読み込みつつ、作成したsrcURLを渡す */}
                        <Image srcURL={srcURLs} />
                    </ul>
                </div>
            </main>
        </>
    )
}
export default Main;