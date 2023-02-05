import React from 'react';
import { useAuth } from '../hooks/useAuth';
import NavBar from './NavBar';

const ParkList = () => {
    const { user } = useAuth();

    return (
        <div>
            <ul>
                {user?.parkList && user?.parkList.map((park, index) => (
                    index < 10 ? (
                <ul key={park}> Parks You can Run to: {park}</ul>
                ) : null
))}
                </ul>
        </div>
        );
    };

export default ParkList;
