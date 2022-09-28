import { useState } from "react";

const Image = (props) => {
    const imageLists = props.srcURLs.map((srcURL, i) => {
        return <li key={`${srcURL}${i}`}><img src={srcURL} /></li>
    })
    return (
        <>
            {imageLists}
        </>
    )
}
export default Image