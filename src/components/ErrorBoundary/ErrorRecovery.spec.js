import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ErrorRecovery from './ErrorRecovery'

describe('Testing ErrorRecovery Component', () => {
  //we had mock the console.error message as when the error's is thrown
  //in the program a bunch of console.error are called even though Error Boundary
  //handles it.
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {})
    // console.error.mockImplementation(() => {})
  })

  afterEach(() => {
    console.error.mockRestore()
  })

  it('should render toggle explode button', () => {
    //Arrange
    render(<ErrorRecovery />)
    //Assertion
    expect(screen.getByRole('button')).toHaveTextContent(/toggle explode/i)
  })

  it('should not call console error message before the toggle explode button is clicked', () => {
    //Arrange
    render(<ErrorRecovery />)
    //Assertion
    expect(console.error).not.toHaveBeenCalled()
  })

  it('should call console error message when the toggle explode button is clicked', () => {
    //Arrange
    render(<ErrorRecovery />)
    //Act
    userEvent.click(screen.getByText(/toggle explode/i))
    //Assertion
    expect(console.error).toHaveBeenCalled()
  })

  it('should display alert message when toggle explode button is clicked', () => {
    //Arrange
    render(<ErrorRecovery />)
    //Act
    userEvent.click(screen.getByText(/toggle explode/i))
    //Assertion
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('should not display alert message when try again button is clicked', () => {
    //Arrange
    render(<ErrorRecovery />)
    //Act
    userEvent.click(screen.getByText(/toggle explode/i))
    userEvent.click(screen.getByText(/try/i))
    //Assertion
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(screen.getByText(/toggle explode/i)).toBeInTheDocument()
    expect(console.error).toHaveBeenCalledTimes(2)
  })
})
