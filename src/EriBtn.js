import { useState } from "react"

const EriBtn = (props) => {
    const [count, setCount] = useState(0);

    const onEriButtonClick = () => {
        setCount((prevCount) => {
            return prevCount + 1;
        })
    }
    props.onEriButtonClick(count);
    return (
        <>
            <button onClick={onEriButtonClick}>{count}</button>
        </>
    )
}
export default EriBtn

// eriボタンコンポーネントを作成、onEributtonクリックというプロップスがある。すみ？
// エリボタンは何回押されたかカウントを行う。ボタンのラベルにカウント数を表示　済
// カウントして、
// そのEriボタンをクリックすると、onEributtonClickを実行する。
// onEributtonClickの引数はカウント数をもつ
// 親側（Main.js）ではエリボタンを呼ぶためにはpropsが必要props名がonEributtonClick、値は引数付きの無名関数。
//　その引数で受け取った値をコンソールログする。