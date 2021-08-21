import { render,screen } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import App from './App';
import { act } from "react-dom/test-utils";
let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
it("renders App component with loader", () => {
  act(() => {
    render(<App />, container);
  });
  const linkElement =  screen.getByAltText(/loading.../i);
  expect(linkElement).toBeInTheDocument();
});


