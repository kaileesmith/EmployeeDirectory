import React, {useState, useEffect} from "react";
import axios from "axios";
import Table from "./Table";
import EmpInput from "./EmpInput";



const EmpData = () => {

    const [users, setUsers] = useState([]);

    let newInput = [];

    useEffect(()=>{

        const url = "https://randomuser.me/api/?results=10&";
        const params = "exc=gender,nat,login,registered,id";
            const fullUrl = url + params;
            axios
            .get(fullUrl)
            .then((res) => {
                setUsers(res.data.results);
                
            })
            .catch((error) => console.log(error));
        
    }, []);


        const lastSort = function (a, b){

            const lName1 = a.name.last.toUpperCase();
            const lName2 = b.name.last.toUpperCase();
        
            if (lName1 < lName2) {
            return -1;
            }
            if (lName1 > lName2) {
            return 1;
            }
            // return 0;
        };
    

        const lastName = async function () {

                const filter = await users.sort(lastSort);
                filter.forEach((results) => {
                    newInput.push(results);
                });
            
                setUsers(newInput);
            };

    return (
        <div>
            <div className="container">
                <h3>Sort by:</h3>
                <button type="button" className="btn btn-secondary" onClick={() => lastName()}>
            Last Name</button>
            </div>
            <Table/>
            {users.map((user, index) => (
            <EmpInput 
                key={index}
                image={user.picture.thumbnail}
                first={user.name.first}
                last={user.name.last}
                email={user.email}
                phone={user.phone}
                address={`${user.location.street.number} ${user.location.street.name} ${user.location.city}, ${user.location.country} ${user.location.postcode}`}
                dob={user.dob.date}
            />
    ))}
        </div>
    )
}

export default EmpData;
