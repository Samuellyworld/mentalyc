// import testing module
import { render, fireEvent, screen} from '@testing-library/react';
// import modal from component
import Modal from './Modal';

// modal component;
describe('Modal', () => {
  // mock functions
  const onSubmit = jest.fn();
  const onClick = jest.fn();

  // before ;
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // render modal component correctly;
  it('should render correctly', () => {
    render(<Modal onSubmit={onSubmit} onClick={onClick} />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  // close button if modal component;
  it('should close the modal when close button is clicked', () => {
    render(<Modal onSubmit={onSubmit} onClick={onClick} />);
    const closeButton : HTMLElement = screen.getByText('×');
    fireEvent.click(closeButton);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  // update input field;
  it('should update the value of the input field', () => {
    const { getByTestId } = render(<Modal onSubmit={onSubmit} onClick={onClick} />);
    const inputField : any  = getByTestId('name');
    fireEvent.change(inputField, { target: { value: 'John Doe', name: 'clientName' } });
    expect(inputField.value).toBe('John Doe');
  });

})