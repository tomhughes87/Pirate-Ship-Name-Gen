import React, { useEffect } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../../App";
import userEvent from "@testing-library/user-event";
import GeneratorFunc, {
  copyFunc2,
  checkLengthOfRandomWord,
} from "./GeneratorFunc";

// import {shallow} from 'enzyme';

test("The complete random name gen is on the page", () => {
  render(<App />);
  const temp = screen.getByRole("fullRandNameGenContainer");
  expect(temp).toBeInTheDocument();
});

test("Theres a btn for complete random name gen on the page", () => {
  render(<App />);
  const temp = screen.getByRole("btn-fullRandNameGen");
  expect(temp).toBeInTheDocument();
});

test("copy btn for the completely random name gen on the page", () => {
  render(<App />);
  const temp = screen.getByRole("btn-copyFullRandNameGen");
  expect(temp).toBeInTheDocument();
});

test("Theres a input txt box to display the completely random name gen-ed on the page", () => {
  render(<App />);
  const temp = screen.getByRole("fullRandNameGenDisplay");
  expect(temp).toBeInTheDocument();
});

test("Input has a strings greater than 0 at start", () => {
  render(<App />);
  const startingRandString = document.getElementById(
    "CompletelyRandomName"
  ) as HTMLInputElement;
  expect(startingRandString.value.length).toBeGreaterThan(0);
});

test("clicking the random btn generates a new string each time clicked", () => {
  render(<App />);

  const originalRandomString = document.getElementById(
    "CompletelyRandomName"
  ) as HTMLInputElement;
  const randomBtn = screen.getByRole("btn-fullRandNameGen");

  // get the value or the original random string to a fixed var
  const originalRandomStringValue = originalRandomString.value;

  // click the 'random' button
  userEvent.click(randomBtn);

  // get the new random string
  const NewRandomString = document.getElementById(
    "CompletelyRandomName"
  ) as HTMLInputElement;

  // conpare the old random string and the new random string, they shouldn't match
  expect(originalRandomStringValue).not.toBe(NewRandomString.value);
});

Object.assign(navigator, {
  clipboard: {
    writeText: () => {},
  },
});

describe("Clipboard", () => {
  describe("writeText", () => {
    jest.spyOn(navigator.clipboard, "writeText");
    test("Copy the text from the full complete random ship name section", () => {
      render(<App />);
      const originalRandomString = document.getElementById(
        "CompletelyRandomName"
      ) as HTMLInputElement;

      const copyBtn = screen.getByRole(
        "btn-copyFullRandNameGen"
      ) as HTMLInputElement;
      fireEvent.click(copyBtn);
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
        originalRandomString.value
      );
    });
  });
});

test("if the word is over 20 characters", () => {
  render(<App />);

  const afterNameLengthCorrection = checkLengthOfRandomWord(
    "The",
    "Old and Manky",
    "Vessle"
  );

  expect("Thee Old and Manky Vessle".length).toBeGreaterThan(20);
  expect(afterNameLengthCorrection.length).toBeLessThan(21);
  expect(afterNameLengthCorrection).toBe("Old and Manky Vessle");
});

test("check the bottom input box updates if user makes a change", () => {
  render(<App />);
  const enterdata = jest.fn();
  // handleOnChangeNameInput(enterdata)

  let bottomInputBox = screen.getByRole(
    "fullRandNameGenDisplay"
  ) as HTMLInputElement;
  const OrginalInputText = bottomInputBox.value;
  console.log(OrginalInputText);
  // const result = mount(OrginalInputText);
  console.log("dddddddddddddddddddddddddddddddddd");
  console.log(OrginalInputText);

  bottomInputBox.value += "dsasd";
  console.log("aaaaaaaaaaaaaaaaaaaaaaaa");
  console.log(OrginalInputText, "is now", bottomInputBox.value);

  // bottomInputBox.simulate('change', { target: { value: '1234567890!!!' } });
  // let event = new Event('change', { bubbles: true });

  // expect(onSearchMock).toBeCalledWith('user typed ship name');
  // fireEvent.click(bottomInputBox)
  // userEvent.keyboard('ds')
  // bottomInputBox.value
  // userEvent.
  // usefor

  expect(bottomInputBox.value).toHaveLength(3 + OrginalInputText.length);
  // expect(handleOnChangeNameInput);
});

// test('User input updates the value of the text box',()=>{
//   render(<App />)
//   const onEnterTextMock = jest.fn();

// })

// it('Make sure inputted text is shorter than max length', () => {
//   let bottomInputBox = screen.getByRole('fullRandNameGenDisplay') as HTMLInputElement

//   bottomInputBox.simulate('change', { target: { value: '1234567890!!!' } });
//   expect(result.state().value).to.equal("1234567890");
// });
