import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.
import { IoMdAdd } from "react-icons/io";

export const AddRolePageTable = () => {

    const [title, setTitle] = useState('');
    const [awardsEarned, setAwardsEarned] = useState('');
    const [startDate, setStartDate] = useState('');
    
    const redirect = useNavigate();

    const addRole = async () => {
        const newRole = { title, awardsEarned, startDate};
        const response = await fetch('/roles', {
            method: 'post',
            body: JSON.stringify(newRole),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`The new role has been successfully added to the database.`);
            redirect("/Roles");
        } else {
            alert(`There was an error adding the new role. Please ensure all entry fields were filled. For reference, the status code in the HTTP response is ${response.status}.`);
            redirect("/create");
        }
    };


    return (
        <>
        <article>
            <h2>Add a role</h2>
            <p className="pageDescrip">
                A new role may be added to the Roles database using the submission table below. When adding
                a new role, please include quantity of awards earned in that position and a start date. 
            </p>
            
            <table id="roles" >
                <caption>Describe a Role to Add</caption>
                <thead>
                    <tr>
                        <th>Role Title</th>
                        <th>Awards Earned</th>
                        <th>Start Date</th>
                        <th>Commit</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label htmlFor="title"></label>
                        <input
                            type="text"
                            placeholder="(Engineer)"
                            value={title}
                            onChange={e => setTitle(e.target.value)} 
                            id="title"
                            className="longText"
                            autofocus 
                            tabindex="1" />
                    </td>

                    <td><label htmlFor="awardsEarned"></label>
                        <input
                            type="number"
                            value={awardsEarned}
                            placeholder="0 - 99"
                            onChange={e => setAwardsEarned(e.target.value)} 
                            id="awardsEarned"
                            className="numInput"
                            min="0" 
                            max="99"
                            tabindex="2"/>
                    </td>

                    <td><label htmlFor="startDate"></label>
                        <input
                            type="date"
                            placeholder="start date of the role"
                            value={startDate}
                            onChange={e => setStartDate(e.target.value)} 
                            id="startDate" 
                            tabindex="3" />
                    </td>

                    <td>
                    <label htmlFor="submit"></label>
                        <button
                            type="submit"
                            onClick={addRole}
                            id="submit"
                            className="buttonEffect3"
                            tabindex="4" ><IoMdAdd />
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddRolePageTable;