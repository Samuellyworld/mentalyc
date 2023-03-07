// import useEffect from react
import { useEffect } from "react";

// import custom styles ;
import { UploadListsProps } from "../../types";
import { NotesHeader, NotesTableContainer,
         UploadsContainer, UploadsHeader,
         Notes, ProgressContainer, 
         Bar, ProgressBar } from "./UploadsList.styles";

// current uploads JSX Component
const CurrentUploads: React.FC<UploadListsProps> = ({setUploadedItems, uploadedItems}) => {
    
 // Update local storage whenever files state changes
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(uploadedItems));
  }, [uploadedItems]);

  // delete a note
  const handleDelete = (id : number) => {
    setUploadedItems(uploadedItems.filter((item: { id: number; } ) => item.id !== id));
  }

  // JSX Component
    return (
        <UploadsContainer>
            <UploadsHeader>
                <span>2</span>
                <p>Notes in progress</p>
            </UploadsHeader>
            <NotesTableContainer>
                <NotesHeader>
                    <p>Clients</p>
                    <p>Type</p>
                    <p>ETA</p>
                </NotesHeader>
                {
                  uploadedItems?.map((item : any, i: number) => (
                    <Notes key={i}>
                        <p>{item?.clientName}</p>
                        <p> {item?.label}</p>
                        <ProgressContainer>
                        <ProgressBar>
                        <Bar style={{width : '80%'}}/>
                        </ProgressBar>
                        <img 
                          onClick={() => handleDelete(item?.id)}
                          src="/assets/delete.png" 
                          alt="delete" 
                          />
                    </ProgressContainer>
                 </Notes>
                  ))
                }
              
            </NotesTableContainer>
        </UploadsContainer>
    );
}

export default CurrentUploads;