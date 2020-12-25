import React, {PropsWithChildren} from "react";

export function greet(name: string) {
  return `Hello ${name}`
}

export function Button({ children }: PropsWithChildren<{}>) {
  return (
    <button>{children}</button>
  )
}