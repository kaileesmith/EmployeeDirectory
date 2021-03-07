import React from 'react'

const EmpInput = (props) => {
    return (
        <div>
            <table className="table table-bordered">
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

export default EmpInput;
