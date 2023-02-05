import React from 'react';
import { useAuth } from '../hooks/useAuth';
import NavBar from './NavBar';

const WeeklyGoal = () => {
    const { user } = useAuth();

    return (
        <div>
            <div>
            </div>
            <ul className ="weekcontainer">
                {user?.weeklyGoal && user?.weeklyGoal.map((miles, index) => (
                <ul className= "week" key={index}> Week {index + 1}: {miles.toFixed(1)} miles</ul>
))}
                </ul>
        </div>
        );
    };

export default WeeklyGoal;