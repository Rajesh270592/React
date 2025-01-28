import { useState } from "react";
import "./Modal.css"
export const Modal = () => {
    const [show, setShow] = useState(false);

    const toggleModal = () => {
        setShow(!show);
    };

    return (
        <div className="App">
            <h1>React Modal </h1>


            <button onClick={toggleModal}>Open Modal</button>

            {show ? 
                <div >
                    <div className="modal-content">
                        <button onClick={toggleModal}> close</button>
                        <h2>Modal</h2>
                        <p>Pop up modal</p>
                    </div>
                </div>
                :null
            }
        </div>
    );
}