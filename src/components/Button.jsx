const Button = ({ label, iconUrl, backgroundColor, borderColor, textColor, fullwidth }) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${backgroundColor ? backgroundColor : "bg-coral-red"}
    ${textColor ? "text-zinc-500" : "text-white" }
    ${borderColor ? borderColor : "border-coral-red"} rounded-full ${fullwidth? fullwidth: "w-full"} transition duration-300 ease-in-out`}>
      {label}
      {iconUrl && <img src={iconUrl} className="ml-2 rounded-full w-5 h-5" />}
    </button>
    
  );
};

export default Button;
