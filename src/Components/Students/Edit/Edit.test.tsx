import { ThemeProvider } from '@chakra-ui/core';
import { render, fireEvent } from "@testing-library/react"
import React from 'react';
import { act } from "react-dom/test-utils"

import { Student } from '../../../Models/student';
import EditForm from './Edit'

const INITIAL: Student = {
  id: "12345678",
  first_name: "John",
  last_name: "Doe",
  street_name: "Street",
  street_number: "123",
  city: "Somewhere",
  state: "Something",
  zipcode: "12356",
  phone_number: "123567890",
  gpa: 4.0,
}

describe("Student Create Form", () => {

  it("renders succesully", () => {
    const onSubmit = jest.fn();
    const onBack = jest.fn();
    const student: Student = INITIAL

    const { container } = render(
      <ThemeProvider>
        <EditForm onBack={onBack} onSubmit={onSubmit} student={student}/>
      </ThemeProvider>
    )

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

  describe("with valid inputs", () => {
    describe("on place order button click", () => {
      it("calls submit function with form data", async () => {
        const onSubmit = jest.fn();
        const onBack = jest.fn();
        const student: Student = INITIAL

        const { getByText, getByPlaceholderText } = render(
          <ThemeProvider>
            <EditForm onBack={onBack} onSubmit={onSubmit} student={student}/>
          </ThemeProvider>
        )

        await act(async () => {
          fireEvent.change(getByPlaceholderText("GPA"), {
            target: { value: 3.0 }
          })
        })

        await act(async () => {
          fireEvent.click(getByText("Edit"))
        })

        expect(onSubmit).toHaveBeenCalledWith({
          id: "12345678",
          first_name: "John",
          last_name: "Doe",
          street_name: "Street",
          street_number: "123",
          city: "Somewhere",
          state: "Something",
          zipcode: "12356",
          phone_number: "123567890",
          gpa: "3",
        })
      })
    })
  })

})