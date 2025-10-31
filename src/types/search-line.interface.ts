import { ChangeEventHandler } from "react";

export interface ISearchLineProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  className?: string;
}
