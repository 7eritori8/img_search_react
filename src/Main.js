import { useEffect, useState } from "react";
import Header from "./Header";
import "./Main.css";
import Image from "./Image";

const Main = () => {
    // この配列(画像のURL)をImageコンポーネントに渡して画像を表示させる
    const [srcURLs, setSrcURLs] = useState([]);

    // 初期化処理たちの定義
    const defaultSrcURLs = () => {
        setSrcURLs([])
    }
    useEffect(() => { }, [srcURLs]);

    // 500以下のランダムな整数を生成
    const generateRandomNum = () => {
        return Math.floor(Math.random() * (500));
    }

    // ランダムな画像のURLを生成
    const generateRandomURL = () => {
        // srcURLsステートに入れたい配列を作成
        const srcURLsArray = [];
        // URLを生成して配列に50入れる。
        for (let i = 0; i < 50; i++) {
            srcURLsArray.push(`https://source.unsplash.com/random/${generateRandomNum()}`)
        }
        // 生成したURL入りの配列でsrcURLsステートを更新する
        setSrcURLs(srcURLsArray)
    }
    // 検索する画像のURLを生成
    const generateSearchURL = (text) => {
        const URLArray = [];
        for (let i = 0; i < 50; i++) {
            URLArray.push(`https://source.unsplash.com/featured/?${text}/${generateRandomNum()}`)
        }
        setSrcURLs(URLArray)
    }
    // 初回レンダリング時処理
    useEffect(() => {
        defaultSrcURLs();
        generateRandomURL();
    }, [])
    return (
        <>
            {/* Headerコンポーネントを読み込みつつtextを更新する関数を渡す。 */}
            <Header
                onRandomBtnClick={
                    () => {
                        generateRandomURL()
                    }
                }
                onSubmitFromHeader={
                    (text) => {
                        generateSearchURL(text)
                    }
                } />

            <main>
                <div className="img__wrapper">
                    <ul id="img__list">
                        <Image srcURLs={srcURLs} />
                        {/* 画像コンポーネントを読み込みつつ、src属性に渡すURLの配列を渡す */}
                    </ul>
                </div>
            </main>
        </>
    )
}
export default Main;