import { render, screen } from '@testing-library/react';
import * as redux from 'react-redux';
import App from './App';

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn()
}))

function setup(username: string | null) {
  const spy = jest.spyOn(redux, 'useSelector');
  spy.mockReturnValue(username);
  return spy;
}


describe('App', () => {
  beforeEach(() => {

  })
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders login', () => {
    setup(null);
    
    render(<App />);
    const login = screen.getByLabelText('Username');
    expect(login).toBeInTheDocument();
  });

  /*
  test('renders chatwindow', () => {
    setup('user');
    
    const messageInput = screen.getByLabelText('message');
    expect(messageInput).toBeInTheDocument;
  });
  */

});

