import { ReactNode } from "react";

type Props = {
  isOpen: boolean;
  handleClose?: () => void;
  isMessageDialog?: boolean;
  className?: string;
  children: ReactNode;
};

const CommonDialog = (props: Props): JSX.Element => {
  const { isOpen, handleClose, className = "max-w-3xl", children } = props;

  return (
    <div
      className={`fixed top-0 left-0 flex h-full w-full items-center justify-center bg-black/30 transition-all duration-200 ${
        isOpen ? "visible block opacity-100" : "invisible opacity-0"
      } `}
      onClick={(e) => {
        e.stopPropagation();
        handleClose && handleClose();
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative m-4 max-h-[calc(100vh-2rem)] w-full overflow-y-auto rounded-lg bg-theme p-8 md:m-10 ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default CommonDialog;
