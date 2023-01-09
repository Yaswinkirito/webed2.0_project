import axios from 'axios';

import {LOGIN_USER, ADDNEW_TODO, GETALL_TODO, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO, TOGGLE_TAB, REGISTER_USER } from './type';

const API_URL = 'http://localhost:8000';


export const addNewTodo = (data) => async (dispatch) => {
    try {
        console.log(data)
        const res = await axios.post(`${API_URL}/todos`, { data });
        console.log(data)
        dispatch({ type: ADDNEW_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling addNewTodo API ', error.message);
    }

}

export const getAllTodos = () => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos`);

        dispatch({ type: GETALL_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling getAllTodos API ', error.message);
    }
}

export const toggleTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos/${id}`);

        dispatch({ type: TOGGLE_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling getAllTodos API ', error.message);
    }
}

export const updateTodo = (id, data) => async (dispatch) => {
    try {
        const res = await axios.put(`${API_URL}/todos/${id}`, { data });

        dispatch({ type: UPDATE_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling updateTodo API ', error.message);
    }
}

export const deleteTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`${API_URL}/todos/${id}`);

        dispatch({ type: DELETE_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling deleteTodo API ', error.message);
    }
}

export const toggleTab = (tab) => async (dispatch) => {
    dispatch({ type: TOGGLE_TAB, selected: tab })
}

export const register_user = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`${API_URL}/register`, { data });
        dispatch({ type: REGISTER_USER , payload: res.data });
        if (res.data.status ==="ok"){
            alert("register successful");
          
          window.location.href = "./login";
        } else{
            alert("User Registration Failed")
        }
        
    } catch (error) {
        console.log('Error while creating user ', error.message);
    }
}
export const login_user = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`${API_URL}/login`, { data });
        dispatch({ type: LOGIN_USER , payload: res.data });
        console.log(res)
        if (res.data.status ==="ok"){
            alert("login successful");
          window.location.href = "./todos";
          localStorage.setItem("loggedin", res.data.loggedin);
          
        }
        else{
            alert("Login Failed")
        }
        console.log(res)
    } catch (error) {
        console.log('Error while logging ', error.message);
    }
}

