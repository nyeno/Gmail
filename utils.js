export const Truncated = ({ children, val, className}) => {
  val = val || 20;
  const shorten = () => {
    console.log(children.slice(val));
    return children.length > val ? `${children.slice(0, val)}...` : children;
  };
  return <p className={className}>{shorten(children)}</p>;
};
