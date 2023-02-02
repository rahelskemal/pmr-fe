import React from 'react';
import { useAuth } from '../hooks/useAuth';

const WeeklyGoal = (user) => {
    const { login, userData , weeklyMilesList } = useAuth();
    
    // if (login(user))
    console.log(userData)
    const lenOfList = weeklyMilesList?.length || 0;

    for (var i = 0; i < lenOfList; i++){
        console.log(weeklyMilesList[i]);
    };

    // WeeklyGoal.forEach(goal => console.log(goal));



    return (
        <div>
            <h2>Your Weekly Running Goal:{weeklyMilesList}</h2>
            {/* <p>{goal} miles</p> */}
        </div>
    );
};

export default WeeklyGoal;