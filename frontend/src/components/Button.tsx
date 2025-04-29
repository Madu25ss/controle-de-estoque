import { useNavigate } from "react-router";

type btnProps = {
  title: string;
  to: string;
};

const Button = ({ title, to }: btnProps) => {
  const navigate = useNavigate();
  //useNavigate = hook 

  return (
    <div>
      <button 
      onClick={() => navigate(to)}
      className="bg-blue-500 rounded text-white px-3 py-1 border-none outline-0 shadow-md cursor-pointer transition delay-100 duration-300 ease-in-out hover:bg-blue-600 hover:-translate-y-0.5">
        {title}
      </button>
    </div>
  );
};
//nome title igual, conflito?
export default Button;
