import { useState } from "react";
import Modal from '@mui/material/Modal';
const Image = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [clickImageURL, setClickImageURL] = useState("");
    const handleOpen = () => setModalIsOpen(true);
    const handleClose = () => setModalIsOpen(false);
    const imageLists = props.srcURLs.map((srcURL, i) => {
        return (

            <li key={`${srcURL}${i}`}>
                <img
                    src={srcURL}
                    onClick={
                        (e) => {
                            handleOpen(true)
                            setClickImageURL(e.currentTarget.src)
                        }} />
            </li>

        )
    })
    return (
        <>
            {imageLists}
            <Modal
                open={modalIsOpen}
                onClose={handleClose}
            >
                <div className="modal-content">
                    <img src={clickImageURL} alt="" />
                </div>
            </Modal>

        </>
    )
}
export default Image


