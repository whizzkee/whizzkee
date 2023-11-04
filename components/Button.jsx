const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-medium-blue text-white font-bold py-2 px-4 rounded hover:bg-navy-blue transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
