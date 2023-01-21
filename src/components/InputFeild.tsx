import React, { useRef, useState } from "react";
import "./style.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>; //type of a set usestate can be found on hoveing on it
  handleAdd: (e: React.FormEvent) => void; //type of a function
}

const InputFeild = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null); //to do the get doc by id or class

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur(); //to remove the blur on adding the task
      }}
    >
      <input
        type="input"
        ref={inputRef}
        placeholder="Enter a task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="input__box"
      />
      <button className="input_submit" type="submit">
        ADD
      </button>
    </form>
  );
};

export default InputFeild;
