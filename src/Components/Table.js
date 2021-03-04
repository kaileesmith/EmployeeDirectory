import React from 'react';

const Table = (props) => {
    return (
        <div>
            <table>
                <tr>
                    <th>Image: {props.image}</th>
                    <th>First Name: {props.first}</th>
                    <th>Last Name: {props.last}</th>
                    <th>Email: {props.email}</th>
                    <th>Phone: {props.cell}</th>
                    <th>Address: {props.address}</th>
                    <th>DOB: {props.dob}</th>
                </tr>
            </table>
        </div>
    )
}

export default Table;
