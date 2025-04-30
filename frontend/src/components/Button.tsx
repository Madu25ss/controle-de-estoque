import { ButtonHTMLAttributes } from "react";

type btnProps = {
  title: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ title, ...rest }: btnProps) => {


  return (
    <div>
      <button 
      {...rest}
      >
        {title}
      </button>
    </div>
  );
};
//nome title igual, conflito?
export default Button;
