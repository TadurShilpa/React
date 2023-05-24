import "./Card.css";

const Card = (props) => {
  const classCard = "card" + props.className;
  // console.log("props.child-------------------",props.children);
  return <div className={props.className + "card"}>{props.children}</div>;
};

export default Card;
