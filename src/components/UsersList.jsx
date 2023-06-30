import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from '../store';

const UsersList = () => {
    const dispatch = useDispatch();
    const { data, isLoading, error } = useSelector((state) => state.users);


    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error fetching data...</div>;
    }
    
    return <div>{data.length}</div>;
    


};

export default UsersList;