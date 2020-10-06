import { ThemeProvider } from '@chakra-ui/core';
import { render, fireEvent } from "@testing-library/react"
import React from 'react';
import { act } from "react-dom/test-utils"

import { Student } from '../../../Models/student';
import CreateForm from './Create'

const INITIAL: Student = {
  id: "",
  first_name: "",
  last_name: "",
  street_name: "",
  street_number: "",
  city: "",
  state: "",
  zipcode: "",
  phone_number: "",
  gpa: 0,
}

describe("Student Create Form", () => {

  it("renders succesully", () => {
    const onSubmit = jest.fn();
    const onBack = jest.fn();
    const student: Student = INITIAL

    const { container, getByText } = render(
      <ThemeProvider>
        <CreateForm onBack={onBack} onSubmit={onSubmit} student={student}/>
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

        const { container, getByText, getByLabelText, getByPlaceholderText } = render(
          <ThemeProvider>
            <CreateForm onBack={onBack} onSubmit={onSubmit} student={student}/>
          </ThemeProvider>
        )

        await act(async () => {
          fireEvent.change(getByPlaceholderText("First Name"),
            { target: { value: "John" } }
          )
          fireEvent.change(getByPlaceholderText("Last Name"), {
            target: { value: "Doe" }
          })
          fireEvent.change(getByPlaceholderText("Street Name"),
            { target: { value: "Street" } }
          )
          fireEvent.change(getByPlaceholderText("Street Number"), {
            target: { value: "123" }
          })
          fireEvent.change(getByPlaceholderText("City"), {
            target: { value: "Somewhere" }
          })
          fireEvent.change(getByPlaceholderText("State"), {
            target: { value: "Something" }
          })
          fireEvent.change(getByPlaceholderText("Zipcode"), {
            target: { value: "12356" }
          })
          fireEvent.change(getByPlaceholderText("Phone Number"), {
            target: { value: "123567890" }
          })
          fireEvent.change(getByPlaceholderText("GPA"), {
            target: { value: 4.0 }
          })
        })

        await act(async () => {
          fireEvent.click(getByText("Create"))
        })

        expect(onSubmit).toHaveBeenCalledWith({
          id: "",
          first_name: "John",
          last_name: "Doe",
          street_name: "Street",
          street_number: "123",
          city: "Somewhere",
          state: "Something",
          zipcode: "12356",
          phone_number: "123567890",
          gpa: "4",
        })
      })
    })
  })

})