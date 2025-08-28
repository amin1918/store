
function Button({ children, variant, style, ...rest }) {
  return (
    <button
      className="w-full p-2 md:p-3  rounded-lg font-semibold shadow transition transform active:scale-95 hover:scale-105"
      {...rest}
      style={{ ...checkVariant(variant), fontSize: "15px", ...style }}
    >
      {children}
    </button>
  );
}

export default Button;

function checkVariant(variant) {
  if (variant === "primary") {
    return {
      background: "linear-gradient(to right, #f5f3e7, #ede0c8)", // stone روشن
      color: "#846613",
      border: "1px solid #e3c36b",
    };
  } else if (variant === "secondary") {
    return {
      background: "linear-gradient(to right, #e0e0e0, #d4d4d4)",
      color: "#846613",
      border: "1px solid #c9b16a",
    };
  } else if (variant === "danger") {
    return {
      background: "linear-gradient(to right, #ef4444, #f87171)",
      color: "white",
      border: "1px solid #ef4444",
    };
  } else if (variant === "success") {
    return {
      background: "linear-gradient(to right, #22c55e, #4ade80)",
      color: "white",
      border: "1px solid #22c55e",
    };
  } else if (variant === "warning") {
    return {
      background: "transparent",
      color: "#e3c36b",
      border: "1px solid #e3c36b",
      boxShadow: "none",
    };
  } else if (variant === "small") {
    return {
      background: "linear-gradient(to right, #d4c17d, #e3c36b)",
      color: "#846613",
      border: "1px solid #e3c36b",
    };
  }
}
