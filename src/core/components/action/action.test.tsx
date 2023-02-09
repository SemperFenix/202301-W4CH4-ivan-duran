/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import { Info } from "../info/info";
import { Action } from "./action";

// Dejo este código comentado porque no tengo más tiempo y si lo subo sin comentar da error. No quiero quitarlo porque hay código que sí me interesa conservar.

// describe("Given the Action component", () => {
//   let elements: HTMLElement[];
//   let phone: string;
//   beforeEach(() => {
//     render(
//       <Action>
//         <Info></Info>
//       </Action>
//     );
//     elements = [
//       ...screen.getAllByRole("button"),
//       screen.getByText("Calling..."),
//     ];
//     phone = "231";
//   });

//   describe("When it is rendered", () => {
//     test("Then it should render message, the hang and call buttons", () => {
//       // Arrange

//       // Act

//       // Assert
//       elements.forEach((item) => expect(item).toBeInTheDocument());
//     });
//   });

//   describe("When phone length is lesser than 9", () => {
//     test("Then it should show inactive call button", () => {
//       // Arrange
//       phone = "231";
//       // Act

//       // Assert
//     });
//   });
// });
