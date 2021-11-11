import React, {useEffect, useState} from 'react';
import {UserTable} from "../features/users/usertable";
import {XXXL} from '@zendeskgarden/react-typography';

/**
 * TODO:
 * 1. fetch the users
 * 2. show a loading state
 * (Optional) 3. Display error state
 * (Optional) 4. Add a button to refresh the data
 * (Optional) 5. Add automatic refresh every 10 sec
 * @return {JSX.Element}
 * @constructor
 */
export const UsersPage = () => {
    const [isLoading, setLoading] = useState(true)
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(result => result.json())
            .then(users => setUsers(users))
            .then(() => setLoading(false))
    }, [])

    return <div>
        <XXXL tag='h1'>List of users</XXXL>
        {isLoading
            ? 'Users are loading...}'
            : <UserTable users={users}/>}
    </div>;
}
/*
 *  This works too!
 *  {isLoading && 'Users are loading...}'}
 *  {!isLoading && <UserTable users={users}/>}
 */

