import "./App.css";
import Card from "./Component/CardLayote";

const users = [
  {
    id: "#0001",
    username: "Phineas",
    wallpaper: "rgb(0, 81, 119)",
    userInfo: "phin • 20 yrs co-founder & dev @ giggl",
    profilePic:
      "https://www.svp-bl.ch/wp-content/uploads/2019/08/person-flat.png",
  },
  {
    id: "#1999",
    username: "Dustin",
    wallpaper: "rgb(0, 0, 0)",
    userInfo:
      "22y - Software Engineer passionate about networking and infrastructure",
    profilePic:
      "https://ru.nomads-yurt.com/wp-content/plugins/wordpress-whatsapp-support/assets/img/user.svg",
  },
  {
    id: "#3020",
    username: "pxseu",
    wallpaper: "rgb(126, 97, 59)",
    userInfo:
      "penniless, invented dogecoin, times person of the year zero years in a row",
    profilePic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOciWshHkTzFKgiKMJHUOW3OSQQ8Dv1A8ZWKkYZ2nKPgMmy7MOETlpjOp62raFIl-IOt0&usqp=CAU",
  },
  {
    id: "#6577",
    username: "Katerina",
    wallpaper: "rgb(24, 25, 28)",
    userInfo: "👶 7 years ago 💔2 years ago",
    profilePic:
      "https://pokemonrevolution.net/forum/uploads/monthly_2018_04/download.png.b1d9c82499e47c0f8a2911f602c46d26.png",
  },
  {
    id: "#0002",
    username: "stealthwave",
    wallpaper: "rgb(66, 66, 112",
    userInfo: "follow me on twitter ☺",
    profilePic:
      "https://pokemonrevolution.net/forum/uploads/monthly_2018_04/download.png.b1d9c82499e47c0f8a2911f602c46d26.png",
  },
  {
    id: "#0023",
    username: "Atzu",
    wallpaper: "rgb(66, 81, 78)",
    userInfo: "Dev for streamers.",
    profilePic:
      "https://pokemonrevolution.net/forum/uploads/monthly_2018_04/download.png.b1d9c82499e47c0f8a2911f602c46d26.png",
  },
  {
    id: "#0016",
    username: "Voltages",
    wallpaper: "rgb(0, 81, 119)",
    userInfo: "Information technology specialist.",
    profilePic:
      "https://pokemonrevolution.net/forum/uploads/monthly_2018_04/download.png.b1d9c82499e47c0f8a2911f602c46d26.png",
  },
];

function App() {
  return (
    <div className="App">
      {users.map((el) => {
        return (
          <Card
            img={el.profilePic}
            userName={el.username}
            userId={el.id}
            info={el.userInfo}
            wallpaper={el.wallpaper}
          />
        );
      })}
    </div>
  );
}

export default App;
