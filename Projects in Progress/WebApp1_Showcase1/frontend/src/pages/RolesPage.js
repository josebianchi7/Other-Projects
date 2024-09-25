import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import RoleList from '../components/RoleList';
import { Link } from 'react-router-dom';
import { IoMdAdd } from "react-icons/io";

function RolesPage({ setRole }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [roles, setRoles] = useState([]);

    // RETRIEVE the entire list of roles
    const loadRoles = async () => {
        const response = await fetch('/roles');
        const roles = await response.json();
        setRoles(roles);
    } 
    

    // UPDATE a single role
    const onEditRole = async role => {
        setRole(role);
        redirect("/update");
    }


    // DELETE a single role  
    const onDeleteRole = async _id => {
        const response = await fetch(`/roles/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/roles');
            const roles = await getResponse.json();
            setRoles(roles);
        } else {
            console.error(`helpful deletion message = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the roles
    useEffect(() => {
        loadRoles();
    }, []);

    // DISPLAY the roles
    return (
        <>
            <h2>List of Roles</h2>
            <p className="pageDescrip">
                This website is both a running list of my roles in the military and 
                a full-stack application that incorporates programs including MongoDB, 
                Express, React and Node, otherwise known as MERN.
            </p>
            <p className="pageDescrip3">
                <Link to="/create"><IoMdAdd />Add Role</Link>
            </p>
            <RoleList 
                roles={roles} 
                onEdit={onEditRole} 
                onDelete={onDeleteRole} 
            />
        </>
    );
}

export default RolesPage;