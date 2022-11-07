import React from "react";
import ChatContainer from "../components/ChatContainer";
import TinderCard from "react-tinder-card";
import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = ({ cookies, setCookie, removeCookie }) => {
  const [user, setUser] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);
  const [lastDirection, setLastDirection] = useState();

  // URL
  let url = window.location.href;
  // comment next line for app build
  // url = "http://localhost:8000/dashboard";

  // functions
  const getUser = async () => {
    try {
      const response = await axios.get(`${url}/user/${cookies.userId}`);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllUsers = async () => {
    try {
      const response = await axios.get(`${url}/users`);
      setAllUsers(response.data.returnedUsers);
    } catch (error) {
      console.log(error);
    }
  };
  const updateMatches = async (matchedUserId) => {
    try {
      const response = await axios.put(`${url}/user/addmatch`, {
        userId: user.user_id,
        matchedUserId: matchedUserId,
      });
      // update user when adding a new match..
      getUser();
    } catch (error) {
      console.log(error);
    }
  };

  // load all users from database
  useEffect(() => {
    getAllUsers();
  }, []);

  // reloading when cookies are changed
  useEffect(() => {
    setReload(!reload);
  }, [cookies]);

  // loading page and resources
  useEffect(() => {
    if (loading) {
      getUser();
    }
  }, []);
  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);

  // Tinder card functions
  const swiped = (direction, swipedUserId) => {
    if (direction === "right") {
      updateMatches(swipedUserId);
    }
    setLastDirection(direction);
  };
  const outOfFrame = (name) => {};

  return loading ? (
    <h2>loading...</h2>
  ) : (
    <div className='dashboard-container center-flex-column height-600'>
      <div className='swiper-container'>
        <div className='card-container'>
          {allUsers.map((character) => (
            <TinderCard
              className='swipe'
              key={character.user_id}
              onSwipe={(dir) => swiped(dir, character.user_id)}
              onCardLeftScreen={() => outOfFrame(character.user_id)}
            >
              <div
                style={{ backgroundImage: "url(" + character.url + ")" }}
                className='card'
              >
                <h3>{character.first_name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
        {lastDirection ? (
          <div className='infoText'>
            <span>You swiped</span> <span>{lastDirection}!</span>
          </div>
        ) : (
          <div className='infoText' />
        )}
      </div>
      <ChatContainer
        user={user}
        cookies={cookies}
        setCookie={setCookie}
        removeCookie={removeCookie}
      ></ChatContainer>
    </div>
  );
};

export default Dashboard;
