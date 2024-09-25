import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";
import { GiConfirmed } from "react-icons/gi";

export const EditRolePageTable = ({ roleToEdit }) => {
 
    const [title, setTitle] = useState(roleToEdit.title);
    const [awardsEarned, setAwardsEarned] = useState(roleToEdit.awardsEarned);
    const [startDate, setStartDate] = useState(roleToEdit.startDate);
    
    const redirect = useNavigate();

    const editRole = async () => {
        const response = await fetch(`/roles/${roleToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                title: title, 
                awardsEarned: awardsEarned, 
                startDate: startDate
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`If changes were made to this role, the changes were applied successfully.`);
        } else {
            const errMessage = await response.json();
            alert(`There was an error while attempting to edit this role. ${response.status}. ${errMessage.Error}`);
        }
        redirect("/Roles");
    }

    return (
        <>
        <article>
            <h2>Edit a role</h2>
            <p className="pageDescrip">
                A specific role's title, amount of awards earned, and/ or start date may be edited below.
                If no properties of the role are changed, the "Confirm" button will save the role as it was 
                originally listed.
            </p>
            <table id="roles">
                <caption>Which Properties of This Role Would You Like to Edit?</caption>
                <thead>
                    <tr>
                        <th>Role Title</th>
                        <th>Awards Earned</th>
                        <th>Start Date</th>
                        <th>Confirm</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label htmlFor="title"></label>
                        <input
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)} 
                            id="title"
                            className="longText"
                            autofocus
                            tabindex="1"  />
                    </td>

                    <td><label htmlFor="awardsEarned"></label>
                        <input
                            type="number"
                            value={awardsEarned}
                            placeholder="0-99"
                            onChange={e => setAwardsEarned(e.target.value)} 
                            id="awardsEarned" 
                            className="numInput"
                            min="0" 
                            max="99"
                            tabindex="2"
                            />
                    </td>

                    <td><label htmlFor="startDate"></label>
                        <input
                            type="date"
                            // placeholder="Start Date of the role"
                            value={startDate}
                            onChange={e => setStartDate(e.target.value)} 
                            id="startDate" 
                            tabindex="3" />
                    </td>

                    <td>
                    <label htmlFor="submit"></label>
                        <button
                            type="submit"
                            onClick={editRole}
                            id="submit"
                            className="buttonEffect4"
                            tabindex="4"><GiConfirmed />
                        </button>
                    </td>
                </tr>
                </tbody> 
            </table>
            </article>
        </>
    );
}
export default EditRolePageTable;