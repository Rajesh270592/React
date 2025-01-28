import React, { useEffect } from "react";

import {
    Student_Success,
    Student_Request,
    Student_Fail,
} from "./Action/Fetch_Data";
import { useDispatch, useSelector } from "react-redux";

export const Fetchdata = () => {
    let users = useSelector(state => state.FetchReducer);
    // Destructuring data received
    let { data, error, loading } = users
    console.log("data>>>>>>>>>>>", users);
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(Student_Request())
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                dispatch(Student_Success(result));
            })
            .catch((error) => {
                dispatch(Student_Fail(error));
                
            });
    }, []);

    return (
        <div>

            <h1>SERVICE API</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>ID</th>
                        <th>UserID</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {loading == false ? data.length > 0 ? data.map((userdetails, index) =>
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{userdetails.id}</td>
                            <td>{userdetails.userId}</td>
                            <td>{userdetails.title}</td>
                            <td>{userdetails.completed ? "completed" : "Pending"}</td>
                        </tr>
                    ) : "DATA NOT FOUND" : "LOADING......."}
                </tbody>
            </table>


        </div>
    )
};