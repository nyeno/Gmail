import Image from "next/dist/client/image";

const Item = ({
  children,
 icon, 
 text
}) => {
  return (
    <div>
      <span>
        <Image src={icon} alt={text} width={20} height={20}/>
      </span>
      <p>{text}</p>
    </div>
  );
};


export default Item;
