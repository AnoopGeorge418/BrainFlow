import { useNavigate } from "react-router-dom";

function Redirector({ to, children, className = "" }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className={className}
    >
      {children}
    </button>
  );
}

export default Redirector;
