import "../App.css";

function Card(props) {
  return (
    <div className="container">
      <div
        className="colors-wallpaper"
        style={{ width: "93%", height: "25%", background: props.wallpaper }}
      ></div>
      <div className="img-item">
        <img className="img" width="100px" src={props.img} alt="user phg" />
        <p className="username">
          {props.userName}

          {props.userId}
        </p>
        <h2 className="about">About</h2>
        <p className="info">{props.info}</p>
      </div>
    </div>
  );
}
export default Card;
