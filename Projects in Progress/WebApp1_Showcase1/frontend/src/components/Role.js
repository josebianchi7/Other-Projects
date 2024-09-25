import React from 'react';
import { IoMdRemoveCircle } from "react-icons/io";
import { RiEditFill } from "react-icons/ri";


function Role({ role, onEdit, onDelete }) {
    return (
        <tr>
            <td>{role.title}</td>
            <td>{role.awardsEarned}</td>
            <td>{role.startDate.slice(0,10)}</td>

            <td><IoMdRemoveCircle onClick={() => onDelete(role._id)} className="cursorChange"/></td>
            <td><RiEditFill onClick={() => onEdit(role)} className="cursorChange"/></td>
        </tr>
    );
}

export default Role;