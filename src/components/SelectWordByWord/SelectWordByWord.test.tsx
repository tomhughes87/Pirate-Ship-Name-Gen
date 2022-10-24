import React from 'react';
import { render, screen, fireEvent, getByRole } from '@testing-library/react';
import App from '../../App';

test('Form with 3 seperate word boxes is on the screen', () => {
  render(<App />);
  const logoChecker = screen.getByRole('FormSeperateWords')
  expect(logoChecker).toBeInTheDocument();
});

test('Dropdown list for ship dropdown-prefix is on the page', () => {
  render(<App />);
  const logoChecker = screen.getByRole('dropdown-prefix')
  expect(logoChecker).toBeInTheDocument();
});



// Mid word
test('container for mid word on the page', () => {
  render(<App />);
  const temp = screen.getByRole('container-midword')
  expect(temp).toBeInTheDocument();
});

test('mid word input txt box is on the page', () => {
  render(<App />);
  const logoChecker = screen.getByRole('input-txt-midword')
  expect(logoChecker).toBeInTheDocument();
});

test('btn for random mid word input txt box is on the page', () => {
  render(<App />);
  const logoChecker = screen.getByRole('btn-rand-midword')
  expect(logoChecker).toBeInTheDocument();
});



// Main word
test('main word input txt box is on the page', () => {
  render(<App />);
  const logoChecker = screen.getByRole('input-txt-mainword')
  expect(logoChecker).toBeInTheDocument();
});

test('btn for random main word input txt box is on the page', () => {
  render(<App />);
  const logoChecker = screen.getByRole('btn-rand-mainword')
  expect(logoChecker).toBeInTheDocument();
});

test('container for main word on the page', () => {
  render(<App />);
  const temp = screen.getByRole('container-mainword')
  expect(temp).toBeInTheDocument();
});




test('copy btn for the completely random name gen on the page', () => {
  render(<App />);
  const temp = screen.getByRole('btn-copySepWordsName')
  expect(temp).toBeInTheDocument();
});



////Btn clicks:



// test("should call closeRightSection callback", () => {
//   const getRandMain = jest.fn();

//   // const { getByTestId } = render(
//   //   <HeaderCreate closeRightSection={closeRightSectionSpy} />
//   // );

//   fireEvent.click(screen.getByRole('btn-rand-mainword'));

//   expect(getRandMain).toHaveBeenCalled();
// });

// ^broken, need to learn about buttons, func, mocking funcs


  Object.assign(navigator, {
    clipboard: {
      writeText: () => {},
    },
  });
  
  describe("Clipboard1", () => {
    describe("writeText1", () => {
      jest.spyOn(navigator.clipboard, "writeText");
      test("Copy the text from several dropdowns to make random ship name section", () => {
        render(<App/>)
        const originalRandomString = document.getElementById('DisplayText') as HTMLInputElement
        const copyBtn = screen.getByRole('btn-copySepWordsName') as HTMLInputElement
        fireEvent.click(copyBtn)
        console.log('.....................ddddddddddddsdsdsdsdsds')
        expect(navigator.clipboard.writeText).toHaveBeenCalledWith(originalRandomString.innerHTML);
      });
      
    });
  });


// check the full word is equal to the other words
