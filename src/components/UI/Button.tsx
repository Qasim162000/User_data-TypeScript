import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  // onClick:
};

const Button = (props: ButtonProps) => {
  return (
    <button
      className={styles.button}
      type={props.type || "button"}
      // onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
