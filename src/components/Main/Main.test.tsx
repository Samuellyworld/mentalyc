// import testing library 
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// import component
import Main from './Main';

// Main test
describe('Main', () => {
  // render main component
  test('renders the intro message and upload button', () => {
    render(<Main onClick={() => {}} />);
    expect(screen.getByText(/Hi Maria/i)).toBeInTheDocument();
    expect(screen.getByText(/Upload your session's recordings/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Upload/i })).toBeInTheDocument();
  });

  // when onclick is picked
  test('calls onClick function when upload button is clicked', () => {
    const handleClick : jest.Mock<any, any> = jest.fn();
    render(<Main onClick={handleClick} />);
    const uploadButton : HTMLElement = screen.getByRole('button', { name: /Upload/i });
    userEvent.click(uploadButton);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
