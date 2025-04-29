import { ReactNode } from "react";

interface ContainerProps {
  backgroundClassName?: string;
  className?: string;
  children?: ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  backgroundClassName = "",
}) => {
  return (
    <section className={`w-full ${backgroundClassName}`}>
      <div className={`max-w-300 mx-auto ${className}`}>{children}</div>
    </section>
  );
};

export default Container;
