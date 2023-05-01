import React, { useState, useEffect } from "react";
import "./test-api.scss";
import getData from "./test-get-api";

export default function TestGetApi() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const [tenantRoleId, setTenantRoleId] = useState(null);


    useEffect(() => {
        fetch(`http://13.233.49.194/api/gettenantpreference/21`)
            .then((response) => response.json())
            .then((actualData) => {
                setData(actualData?.["TENANT_PREFERENCE"]);
                setError(null);
                
            })
            .catch((err) => {
                setError(err.message);
                setData(null);
            })

    }, []);

    useEffect(() => {
        if (data != null) {
            console.log(data)
            const { user, tenant_role_id } = data
            setUser(user);
            setTenantRoleId(tenant_role_id)
        }
    }, [data]);

    user != null && console.log(user.email_address);

    return (<>
        <div className="test-api-main-container">

            <h1>DEMO</h1>
            <div className="Contents">
                <p>
                    {user != null && user.name}
                </p>
                <p>
                    {user != null && user.email_address}
                </p>
            </div>
        </div>
    </>)
}


//http://3.142.208.241/api/gettenantpreference/12