// import part that makes up the application
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/Modal/Modal";
import { useEffect, useState } from "react";

// import types
import { ShowModalTypes,
        UploadItemsTypes, ValuesObjectTypes 
       } from "./types";
import CurrentUploads from "./components/Uploads/Uploads";

// JSX Component;
const App : () => JSX.Element = () =>  {

  // set modal with use state
  const [showModal, setShowModal] : ShowModalTypes = useState(false);

  // handle uploads 
  const [uploadedItems , setUploadedItems]: UploadItemsTypes = useState([]);

// use Effect
  useEffect(() => {
    console.log(uploadedItems);
  }, [uploadedItems]);


  // toggle modal
  const toggleModal = () => {
    setShowModal((prev) => !prev)
  }

  // handle new file upload
  const onSubmit = async (newItem: ValuesObjectTypes) => {  
     // add new item to items list
      setUploadedItems((prevItems : any) => [...prevItems, newItem]);
  }

// building block
  return (
        <>
         <Navbar/>
         <Main onClick={toggleModal}/>
         {showModal && <Modal onClick={toggleModal} onSubmit={onSubmit}/> }
         <CurrentUploads/>
        </>
  );
}

export default App;
