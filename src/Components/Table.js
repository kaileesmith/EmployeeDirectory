import React from 'react';

const Table = (props) => {
    return (
        <div>
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
                <thead>
                    <tr>
                        <th>
                            <img src={props.image}></img>
                        </th>
                        <th>{props.first}</th>
                        <th>{props.last}</th>
                        <th>{props.email}</th>
                        <th>{props.phone}</th>
                        <th>{props.address}</th>
                        <th>{props.dob}</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default Table;
