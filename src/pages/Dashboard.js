import React from "react";
import ChatContainer from "../components/ChatContainer";
import TinderCard from "react-tinder-card";
import { useState } from "react";
// I have to make my own card..ONe day..

const Dashboard = () => {
  const [lastDirection, setLastDirection] = useState();

  const characters = [
    {
      name: "Richard Hendricks",
      url: "https://cdn.pixabay.com/photo/2022/04/05/00/27/man-7112557_960_720.jpg",
    },
    {
      name: "Erlich Bachman",
      url: "https://cdn.pixabay.com/photo/2022/04/05/00/27/man-7112557_960_720.jpg",
    },
    {
      name: "Monica Hall",
      url: "https://cdn.pixabay.com/photo/2022/04/05/00/27/man-7112557_960_720.jpg",
    },
    {
      name: "Jared Dunn",
      url: "https://cdn.pixabay.com/photo/2022/04/05/00/27/man-7112557_960_720.jpg",
    },
    {
      name: "Dinesh Chugtai",
      url: "https://cdn.pixabay.com/photo/2022/04/05/00/27/man-7112557_960_720.jpg",
    },
  ];
  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };
  return (
    <div className='dashboard-container center-flex-column height-600'>
      <ChatContainer></ChatContainer>
      <div className='swiper-container'>
        <div className='card-container'>
          {characters.map((character) => (
            <TinderCard
              className='swipe'
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <div
                style={{ backgroundImage: "url(" + character.url + ")" }}
                className='card'
              >
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
      </div>
      <div className='swipe-info'>
        {lastDirection ? <p>You swiped {lastDirection}</p> : <p></p>}
      </div>
    </div>
  );
};

export default Dashboard;
