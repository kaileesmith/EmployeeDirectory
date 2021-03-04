import React, {useState, useEffect} from "react";
import axios from "axios";


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
        
    });

    return (
        <div>

        </div>
    )
}

export default EmpData;
