"use client";

import React, { useState, useEffect } from "react";
import ProfileComponent from "../../components/profile/profile";

import { getProfile } from "../../api/modules/profile";

export default function ProfilePage() {
  const defaultUserData = {
    id: 0,
    username: "",
    email: "",
    full_name: "",
    profile_image: null,
  };

  const [userData, setUserData] = useState(defaultUserData);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getProfile();
        console.log(result);

        if (result.status == 200) {
          console.log(result.data);
          setUserData(result.data);
        } else {
          setUserData(defaultUserData);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="page">
      <div className="container_page">
        <ProfileComponent
          id={userData.id}
          username={userData.username}
          email={userData.email}
          full_name={userData.full_name}
          profile_image={userData.profile_image}
        />
      </div>
    </div>
  );
}

export { ProfilePage };
