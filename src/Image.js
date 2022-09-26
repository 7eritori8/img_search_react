import { useEffect, useState } from "react";

const Image = (props) => {
    const [imageInfo, setImageInfo] = useState([]);

    // let imageLists = randomURL.map((src) => <li className="random" key={src.id}><img src={src.url} /></li>)
    let imageLists = <li><img src={props.srcURL} /></li>
    return (
        <>
            <h1>{props.srcURL}</h1>
            {imageLists}
        </>
    )
}
export default Image