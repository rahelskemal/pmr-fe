import React from 'react';
import { useAuth } from '../hooks/useAuth';
import NavBar from './NavBar';

const WeeklyGoal = () => {
    const { weeklyMilesList } = useAuth();

    return (
        <div>
            <div> 
                <NavBar /> 
            </div>
            <ul>
                {weeklyMilesList && weeklyMilesList.map((miles, index) => (
                <li key={index}> Week {index + 1}: {miles} miles</li>
))}         
                </ul>
        </div>
        );
    };

export default WeeklyGoal;