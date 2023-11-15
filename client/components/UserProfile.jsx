import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, Form } from 'react-router-dom';

const UserProfile = () => {
  const [profileName, setProfileName] = useState("");
  const [picture, setPicture] = useState("");
  const [email, setEmail] = useState("");
  const [trips, setTrips] = useState([]);
  const [showTrips, setShowTrips] = useState(false);

  useEffect(() => {
    axios.get("/profile").then((profile) => {
      const user = profile.data;
      console.log('user', user);
      setProfileName(user.fullName);
      setPicture(user.picture);
      setEmail(user.email);
    });
  });

  const handleGetTrips = () => {
    axios.get("/api/birdList").then((trips) => {
      const userTrips = trips.data;
      console.log('userTrips', userTrips);
      setTrips(userTrips);
      setShowTrips(true);
    });
  }

  return (
    <div className="profile-card">
      <h1>Welcome {profileName}</h1>
      <a href={picture}></a>
      <p>{email}</p>
      {/* make a button to show the user's trips */}
      <button className="trip-btn" onClick={() => {handleGetTrips()}}>
        My trips
      </button>
      {showTrips ? (
        <div>
          {trips.map((trip) => {
            return (
              <div>
                <h3>{trip.name}</h3>
                <p>{trip.location}</p>
                <p>{trip.description}</p>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );

  // return (
  //   <>
  //     <h1 className="Header" alignment="center">
  //       UserProfile
  //     </h1>
  //     <div>Username:</div>
  //     {packingListNames.map((listName) => {
  //       return <li>{listName}</li>;
  //     })}
  //   </>
  // );
};

export default UserProfile;
