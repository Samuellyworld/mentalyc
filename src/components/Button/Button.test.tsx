// import testing modules
import { ButtonProps, NestedObject } from '../../types';
import { render, fireEvent } from '@testing-library/react';

// component
import Button from './Button';

// Button component
describe('Button component', () => {
    const onClick : jest.Mock<any, any> = jest.fn();

    afterEach(() => {
      jest.clearAllMocks();
    });

    // renders button 
  it('should render correctly with type=true', () => {
    const onClick : jest.Mock<any, any> = jest.fn();
    const values : NestedObject = { clientName: 'samuel', noteType: 'progress note' };

    const { getByText }  = render(
      <Button content="Submit" type={true} onClick={onClick} values={values} />
    );
    const button : HTMLElement = getByText('Submit');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  // renders component 
  it('should render correctly with type=false and values are present', () => {
    const onClick  : jest.Mock<any, any> = jest.fn();
    const values : NestedObject = { clientName: 'samuel', noteType: 'progress note' };
    const { getByText } = render(
      <Button content="Submit" type={false} onClick={onClick} values={values} />
    );
    const button : HTMLElement = getByText('Submit');
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(0);
  });


  it('should render correctly with type=false and values are not present', () => {
    const props: ButtonProps = {
      content: 'Submit',
      type: false,
      onClick,
      values: {},
    };
    const { getByText } = render(<Button {...props} />);
    const button : HTMLElement = getByText('Submit');
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
  });
});
