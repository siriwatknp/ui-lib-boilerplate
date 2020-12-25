import React from "react";
import { render, screen } from "@testing-library/react";
import { greet, Button } from "./index";

it('it works', () => {
  expect(greet('Jun')).toEqual('Hello Jun')
})

it('Button works', () => {
  render(<Button>Button</Button>)
  screen.getByText('Button')
})
