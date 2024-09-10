import React from 'react';
import PropTypes from 'prop-types';

// This should be a READ ONLY component
const RaceHud = ({ raceData }) => {
    return (
        <div className="race-hud">
            <h1>Race HUD</h1>
            <div className="race-details">
                <p>Race Name: {raceData.name}</p>
                <p>Participants: {raceData.participants.join(', ')}</p>
            </div>
        </div>
    );
};

export default RaceHud;
