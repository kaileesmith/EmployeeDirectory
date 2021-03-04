import React, {useState, useEffect} from "react";
import axios from "axios";
import Table from "./Table";


const EmpData = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{

        const url = "https://randomuser.me/api/?results=10&";
        const params = "exc=gender,nat,login,registered,phone,id";
            const fullUrl = url + params;
            axios
            .get(fullUrl)
            .then((res) => {
                setUsers(res.data.results);
                
            })
            .catch((error) => console.log(error));
        
    }, []);

    console.log(users);

    return (
        <div>
            {users.map((user, index) => (
            <Table 
                key={index}
                image={user.picture.thumbnail}
                phone={user.phone}
                first={user.name.first}
                last={user.name.last}
                email={user.email}
                address={`${user.location.street.number} ${user.location.street.name} ${user.location.city}, ${user.location.country} ${user.location.postcode}`}
                dob={user.dob.date}
            />
    ))}
        </div>
    )
}

export default EmpData;
