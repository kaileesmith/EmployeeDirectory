import React from 'react';

const Table = () => {
    return (
            <table className="table table-bordered">
                <thead className = "thead-dark">
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Address</th>
                        <th scope="col">DOB</th>
                    </tr>
                </thead>
            </table>
    )
}

export default Table;
