import React from 'react';
import { useAuth } from '../hooks/useAuth';
import NavBar from './NavBar';

const ParkList = () => {
    const { user } = useAuth();

    return (
        <div>
            <ul>
                {user?.parkList && user?.parkList.map((park) => (
                <ul key={park}> Parks You can Run to: {park}</ul>
))}
                </ul>
        </div>
        );
    };

export default ParkList;
