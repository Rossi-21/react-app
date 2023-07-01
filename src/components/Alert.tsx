import { ReactNode } from "react";

//rafce
interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div
      className="alert alert-danger alert-dismissible fade show mt-5"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
