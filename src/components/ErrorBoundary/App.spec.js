import {render, screen} from '@testing-library/react'
import App from './App'

describe('Testing App Component', () => {
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

  it('should render alert message', () => {
    //Arrange
    render(<App />)
    //Assertion
    expect(screen.getByRole('alert')).toBeInTheDocument()
    expect(console.error).toHaveBeenCalled()
    expect(console.error).toHaveBeenCalledTimes(4)
  })

  it('should render correctly', () => {
    const {container} = render(<App />)
    expect(container).toMatchSnapshot()
  })
})
