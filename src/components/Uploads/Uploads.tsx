// import custom styles ;
import { NotesHeader, NotesTableContainer,
         UploadsContainer, UploadsHeader,
         Notes, ProgressContainer, 
         Bar, ProgressBar } from "./Uploads.styles";

const CurrentUploads = () => {
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
                <Notes>
                   <p>John bellion</p>
                   <p> Progress note</p>
                   <ProgressContainer>
                     <ProgressBar>
                     <Bar style={{width : '80%'}}/>
                     </ProgressBar>
                     <img src="/assets/delete.png" alt="delete" />
                   </ProgressContainer>
                </Notes>
            </NotesTableContainer>
        </UploadsContainer>
    );
}

export default CurrentUploads;