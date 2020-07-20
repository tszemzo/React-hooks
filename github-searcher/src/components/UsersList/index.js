import React, { useState, useEffect, Fragment } from 'react';
const axios = require('axios');

export const UsersList = () => {
    const [users, setUsers] = useState([]);
    const apiUrl = 'https://api.github.com/search/users?q=toms';
    const maxUsers = 5;

    const fetchUsers = async () => {
        const { data } = await axios.get(apiUrl);
        const users = data.items.slice(0, maxUsers);
        console.log(users);
        setUsers(users);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <Fragment>
            {users.map(user => (
                <div>{user.login}</div>
            ))}
        </Fragment>
    );
};

export default UsersList
