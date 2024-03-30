import React, { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

const UserView = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div>
            <h1>List Of Users</h1>
            {user.loading && <div>Loading ...</div>}
            {!user.loading && user.error ? <div>Error: v{user.error}</div>:null}
            {!user.loading && user.users.length > 0 ? <ul>
                {
                    user.users.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))
                }   
            </ul>: null}
        </div>
    )
}


export default UserView;