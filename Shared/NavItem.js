const Item = ({
  children,
 icon, 
 text
}) => {
  return (
    <div>
      <span>
        <img src={icon} alt={text}/>
      </span>
      <p>{text}</p>
    </div>
  );
};


export default Item;
