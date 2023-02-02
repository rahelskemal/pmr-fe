import React from 'react';
import { useAuth } from '../hooks/useAuth';

const WeeklyGoal = () => {
    const { WeeklyGoal } = useAuth();

    WeeklyGoal.forEach(goal => console.log(goal));



    return (
        <div>
            <h2>Your Weekly Running Goal:</h2>
            {/* <p>{goal} miles</p> */}
        </div>
    );
};

export default WeeklyGoal;