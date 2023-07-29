import { IconType } from "react-icons";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "secondary" | "error" | "error-secondary" | "text";
  label: string;
  Icon?: IconType;
};

const Button = (props: ButtonProps): JSX.Element => {
  const { variant, label, Icon, className = "", ...buttonHTMLAttributes } = props;

  // variant でボタンの色を分岐
  const btnColor =
    variant === "primary"
      ? "border-primary text-primary disabled:border-theme-medium disabled:bg-theme-medium"
      : variant === "secondary"
      ? "border-primary bg-white text-primary disabled:border-theme-medium disabled:text-theme-medium"
      : variant === "error"
      ? "border-error bg-error text-white disabled:border-theme-medium disabled:bg-theme-medium"
      : variant === "error-secondary"
      ? "border-error bg-white text-error disabled:border-theme-medium disabled:text-theme-medium"
      : variant === "text"
      ? `border-transparent bg-transparent text-primary hover:border-theme-light hover:bg-theme-light disabled:border-transparent disabled:bg-transparent disabled:text-theme-medium`
      : "";

  return (
    <button
      {...buttonHTMLAttributes}
      className={`relative flex items-center justify-center gap-1 rounded-md border p-2 text-center text-btn transition-all duration-200 ease-linear hover:opacity-70 md:px-4 disabled:opacity-100
      ${btnColor} ${className}`}
    >
      {Icon && (
        <span>
          <Icon size={18} />
        </span>
      )}
      <span>{label}</span>
    </button>
  );
};

export default Button;
