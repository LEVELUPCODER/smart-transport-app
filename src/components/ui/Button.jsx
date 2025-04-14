export function Button({ children, onClick, variant = "default" }) {
    const baseStyle =
      "px-4 py-2 rounded font-semibold transition duration-200";
    const variants = {
      default: "bg-blue-600 text-white hover:bg-blue-700",
      destructive: "bg-red-600 text-white hover:bg-red-700",
    };
  
    return (
      <button className={`${baseStyle} ${variants[variant]}`} onClick={onClick}>
        {children}
      </button>
    );
  }
  