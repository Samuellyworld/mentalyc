// importing relevant module;
import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NestedObject } from '../../types';
import CurrentUploads from './UploadsList';

// CurrentUploads tests
describe('CurrentUploads', () => {
    beforeEach(() => {
        jest.useFakeTimers();
      });
    
      // renders the component
  test('renders current uploads', () => {
    const setUploadedItems = jest.fn();
    const uploadedItems : NestedObject[]= [
      { id: 1, clientName: 'Client A', label: 'Label A', progress: 50 },
      { id: 2, clientName: 'Client B', label: 'Label B', progress: 75 }
    ];
    render(<CurrentUploads setUploadedItems={setUploadedItems} uploadedItems={uploadedItems} />);

    // Check that the component renders with the correct number of items
    const uploadsContainer = screen.getByTestId('uploads');
    expect(uploadsContainer).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('Notes in progress')).toBeInTheDocument();

    // Check that the correct items are rendered in the list
    const notes = screen.getAllByRole('listitem');
    expect(notes).toHaveLength(2);
    expect(screen.getByText('Client A')).toBeInTheDocument();
    expect(screen.getByText('Label A')).toBeInTheDocument();
    expect(screen.getByText('Client B')).toBeInTheDocument();
    expect(screen.getByText('Label B')).toBeInTheDocument();

    // Check that the delete button works
    const deleteButton = screen.getAllByAltText('delete')[0];
    userEvent.click(deleteButton);
    expect(setUploadedItems).toHaveBeenCalledWith([
      { id: 2, clientName: 'Client B', label: 'Label B', progress: 75 }
    ]);
  });

  // renders the components with the correct header and data
  test("renders the component with the correct header and data", () => {
    const uploadedItems : NestedObject[] = [
      {
        id: 1,
        clientName: "Client A",
        label: "Label 1",
        timer: 1,
        progress: 50,
        uploadTime: new Date().getTime(),
      },
      {
        id: 2,
        clientName: "Client B",
        label: "Label 2",
        timer: 2,
        progress: 100,
        uploadTime: new Date().getTime() - 1000000,
      },
    ];
    render(<CurrentUploads uploadedItems={uploadedItems} setUploadedItems={() => {}} />);

    // Check if the header of the component is rendered correctly
    const uploadsHeader : HTMLElement = screen.getByText("Notes in progress");
    expect(uploadsHeader).toBeInTheDocument();

    // Check if the notes data is rendered correctly
    const notesList : HTMLElement[] = screen.getAllByRole("listitem");
    expect(notesList).toHaveLength(2);

    // Check if the delete button is working correctly
    const deleteButton : HTMLImageElement | null = notesList[0].querySelector("img");
    userEvent.click(deleteButton!);
    expect(uploadedItems).toHaveLength(2);
  });

  // updates local storage
  test('it updates local storage when uploadedItems changes', () => {
    const setUploadedItems : jest.Mock<any, any> = jest.fn();
    const uploadedItems : NestedObject[] = [{ id: 1, name: 'file1' }, { id: 2, name: 'file2' }];
  
    const setItemMock : jest.Mock<any, any> = jest.fn();
    Object.defineProperty(window, 'localStorage', {
      value: {
        setItem: setItemMock,
      },
    });
  
    render(<CurrentUploads setUploadedItems={setUploadedItems} uploadedItems={uploadedItems} />);
    expect(setItemMock).toHaveBeenCalledWith('items', JSON.stringify(uploadedItems));
  });

  // it clear interval when component unmounts
  it("should clear interval when component unmounts", () => {
    jest.useFakeTimers();
    const items : NestedObject[] = [{ id: 1, progress: 0 }];
    const setUploadedItems : jest.Mock<any, any> = jest.fn();
    const clearIntervalSpy : jest.SpyInstance<void,
                             [intervalId: string | number | NodeJS.Timeout | undefined]>
                              = jest.spyOn(window, "clearInterval");
    const { unmount }  = render(<CurrentUploads uploadedItems={items} setUploadedItems={setUploadedItems} />);
    unmount();
    jest.advanceTimersByTime(1000);
    expect(clearIntervalSpy).toHaveBeenCalled();
    jest.useRealTimers();
  });
});

