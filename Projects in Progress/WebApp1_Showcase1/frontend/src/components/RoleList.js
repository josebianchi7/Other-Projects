import React from 'react';
import Role from './Role';


function RoleList({ roles, onDelete, onEdit }) {
    return (
        <table id="roles">
            <caption>Add and Edit Roles</caption>
            <thead>
                <tr>
                    <th>Role Title</th>
                    <th>Awards Earned</th>
                    <th>Start Date</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {roles.map((role, i) => 
                    <Role 
                        role={role} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default RoleList;
