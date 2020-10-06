import { render } from '@testing-library/react'
import React from 'react'
import CreateView from './StudentCreateView'

import * as redux from "react-redux";
import { ThemeProvider } from '@chakra-ui/core';


describe("Student Create View", () => {
  it("renders succesfully", () => {
    const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
    const mockDispatchFn = jest.fn()
    useDispatchSpy.mockReturnValue(mockDispatchFn);

    const { container, getByText } = render(
      <ThemeProvider>
        <CreateView/>
      </ThemeProvider>
    )

    expect(useDispatchSpy).toHaveBeenCalledTimes(1);
    const linkElement = getByText(/student/i);
    expect(linkElement).toBeInTheDocument();

    expect(container.innerHTML).toMatch("First Name")
    expect(container.innerHTML).toMatch("Last Name")
    expect(container.innerHTML).toMatch("Street Number")
    expect(container.innerHTML).toMatch("Street Name")
    expect(container.innerHTML).toMatch("City")
    expect(container.innerHTML).toMatch("State")
    expect(container.innerHTML).toMatch("Zipcode")
    expect(container.innerHTML).toMatch("Phone Number")
    expect(container.innerHTML).toMatch("GPA")
  })
})