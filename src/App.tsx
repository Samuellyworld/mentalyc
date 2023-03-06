// import part that makes up the application
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/Modal/Modal";
import { useState } from "react";

// import types
import { ShowModalTypes } from "./types";

const App : () => JSX.Element = () =>  {
  // set modal with use state
  const [showModal, setShowModal] : ShowModalTypes = useState(false);

  // toggle modal
  const toggleModal = () => {
    setShowModal((prev) => !prev)
  }

  return (
        <>
         <Navbar/>
         <Main onClick={toggleModal}/>
         {showModal && <Modal onClick={toggleModal} /> }
        </>
  );
}

export default App;
