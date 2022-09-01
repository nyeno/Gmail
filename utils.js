export const Truncated = ({ children, val, className}) => {
  val = val || 20;
  const shorten = () => {
    return children.length > val ? `${children.slice(0, val)}...` : children;
  };
  return <p className={className}>{shorten(children)}</p>;
};
