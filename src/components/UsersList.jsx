import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from '../store';
import Skeleton from "./Skeleton";

const UsersList = () => {
    const dispatch = useDispatch();
    const { data, isLoading, error } = useSelector((state) => state.users);
    const renderedUsers = data.map((user)=>
    <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center curser-pointer">
            {user.name}
        </div>
    </div>

    )


    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    if (isLoading) {
        return <Skeleton times={ 6 } className="h-10 w-full" />
    }
    if (error) {
        return <div>Error fetching data...</div>;
    }

    return <div>{ renderedUsers}</div>;



};

export default UsersList;