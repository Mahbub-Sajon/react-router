import React from 'react';

const Friend = (props) => {
    const {name, username} = props.friend;
    return (
        <div>
            <h2>Name: {name}</h2>
            <button>{username}</button>
        </div>
    );
};

export default Friend;