import { useEffect, useState } from "react";
import Header from "./Header";
import "./Main.css";
import Image from "./Image";
import EriBtn from "./EriBtn";

// todo
// 
// 追加でやったこと
// もらったURLを参照するimageタグを生成これ、何回も描画されちゃいそう？
// ヘッダーに、初期化処理とURL生成の関数を渡して、ランダムボタンのオンクリックで処理できるようにした
// 検索した文言で検索URLを生成、画像を表示できるようにした
// valueTextの初期化処理を作ったこれがないと、ステート変更時に再描画→インプットの文字を連続で検索できなかった
// console.log(imageLists)Imageコンポーネントで表示しているけど、これはなんのか

// propsに関数を渡して、そのpropsを渡された子コンポーネント側のアクション（ボタンを押す）
// ヒストリーを作る　済


const Main = () => {
    //  Header.jsで入力された内容を入れるvalueText
    const [valueText, setValueText] = useState("");
    // 生成したURLを入れておく配列
    const [srcURLs, setSrcURLs] = useState([]);

    // 初期化処理たちの定義
    const defaultSrcURLs = () => {
        setSrcURLs(() => {
            return [];
        })
    }
    const defaultValueText = () => {
        setValueText("");
    }
    // useEffect(() => {
    //     console.log({ srcURLs })
    // }, [srcURLs]);

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
        // できたURL入りの配列でsrcURLsステートを更新する
        setSrcURLs(srcURLsArray)

    }
    // 検索用の画像URLを生成
    const generateSearchURL = (valueText) => {
        const searchURLsArray = [];
        for (let i = 0; i < 5; i++) {
            searchURLsArray.push(`https://source.unsplash.com/featured/?${valueText}/${generateRandomNum()}`)
        }
        // 生成したURLでステートを更新
        setSrcURLs(searchURLsArray)
    }

    // 初回レンダリング時処理
    useEffect(() => {
        defaultSrcURLs();
        defaultValueText();
        generateRandomURL();
    }, [])

    // 入力があって、valueTextが更新された場合、valueTextを使ってURLを生成する
    useEffect(() => {
        generateSearchURL(valueText)
    }, [valueText])
    return (
        <>
            {/* Headerコンポーネントを読み込みつつtextを更新する関数を渡す。 */}
            <Header setValueText={setValueText} defaultSrcURLs={defaultSrcURLs} generateRandomURL={generateRandomURL} />
            <main>
                <div className="img__wrapper">
                    <ul id="img__list">
                        <Image srcURLs={srcURLs} />
                        {/* 画像コンポーネントを読み込みつつ、作成したsrcURLを渡す */}
                    </ul>
                    <button

                    //  onClick={() => { addSrcURLs() }}
                    >yeeeeeeeeeeeeeeeeeeeeeeeee</button>
                </div>
            </main>
            <EriBtn onEriButtonClick={
                (count) => {
                    console.log(count)
                }
            } />
        </>
    )
}
export default Main;