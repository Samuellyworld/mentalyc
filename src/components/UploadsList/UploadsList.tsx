// import useEffect from react
import { useEffect } from "react";

// import custom styles ;
import { NestedObject, UploadListsProps } from "../../types";
import { NotesHeader, NotesTableContainer,
         UploadsContainer, UploadsHeader,
         Notes, ProgressContainer, 
         Bar, ProgressBar } from "./UploadsList.styles";

// current uploads JSX Component
const CurrentUploads: React.FC<UploadListsProps> = ({setUploadedItems, uploadedItems}) => {

 // Update local storage whenever files state changes
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(uploadedItems));

    const timerInterval = setInterval(() => {
        // Update progress for each item in the list
        setUploadedItems((prevItems: NestedObject []) =>
          prevItems.map((item : NestedObject ) => {
            if (item.progress === 100) {
              // If progress is already 100, remove the item from the list
              localStorage.removeItem(`items`);
              return null;
            } else {
              const timeDiff : number = new Date().getTime() - new Date(item.uploadTime as number).getTime();
              const timeLeft : number = Math.max(
                0,
                Math.round((item.timer as number * 60 * 1000 - timeDiff) / 1000)
              );

              const progress = Math.min(
                100,
                Math.round((1 - timeLeft / (item.timer as number * 60)) * 100)
              );

              return { ...item, progress };
            }
          }).filter((item) => item !== null)
        );
      }, 1000);
  
      return () => clearInterval(timerInterval);
  }, [uploadedItems, setUploadedItems]);

  // delete a note
  const handleDelete = (id : number) => {
    setUploadedItems(uploadedItems.filter(
            (item: { id: number; } ) => item.id !== id));
  }

  // JSX Component
    return (
        <UploadsContainer data-testid="uploads">
            <UploadsHeader>
                <span>{uploadedItems?.length}</span>
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
                    <Notes key={item.id} role="listitem" >
                        <p>{item?.clientName}</p>
                        <p> {item?.label}</p>
                        <ProgressContainer>
                         <ProgressBar>
                          <Bar style={{width : `${item?.progress}%`}}/>
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