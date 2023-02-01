import React, {useEffect, useState } from "react";
import axios from 'axios'
import WeeklyGoal from "../components/WeeklyGoal";
import ParkList from "../components/ParkList";
import Register from "../components/Register";

const Kurl = "http://127.0.0.1:5000/"

function Profile() {
    const [userNameData, setUserNameData] = useState(null);

    const [userMileData, setUserMileData] = useState([]);

    const [userParkData, setUserParkData] = useState([])


    useEffect(() => {
        axios
        .get(`${Kurl}/users/${user.id}`, {})
        .then((response) => {
            setUserNameData(response.data.first_name);
            setUserMileData(response.data.weeklygoal);
            setUserParkData(response.data.nearby_parks);
        });
    }, [userNameData]);
};