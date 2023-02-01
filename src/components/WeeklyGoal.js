import React from 'react';

const WeeklyGoal = ({ goal }) => {
    return (
    <div>
        <h2>Your Weekly Running Goal:</h2>
        <p>{goal} miles</p>
    </div>
    );
}

export default WeeklyGoal;