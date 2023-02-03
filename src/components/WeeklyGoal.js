import React from 'react';
import { useAuth } from '../hooks/useAuth';
import NavBar from './NavBar';

const WeeklyGoal = () => {
    const { user } = useAuth();

    return (
        <div>
            <div>
            </div>
            <ul>
                {user?.weeklyGoal && user?.weeklyGoal.map((miles, index) => (
                <li key={index}> Week {index + 1}: {miles.toFixed(1)} miles</li>
))}
                </ul>
        </div>
        );
    };

export default WeeklyGoal;