import { useState } from "react";

export function FormDemo(){
    const [userDetails, setUserDetails] = useState(
        {
            userName:'',
            password:'',
            mobile:'',
            city:'',
            gender:''
        }
    );

    function handleSubmit(ev){
        ev.preventDefault();
        console.log(userDetails);
    }
    function handleUserNameChange(ev){
        setUserDetails(
            {
                userName: ev.target.value,
                password: userDetails.password,
                mobile: userDetails.mobile,
                city: userDetails.city,
                gender:userDetails.gender 
            }
        );
    }

    function handlePasswordChange(ev){
        setUserDetails(
            {
                userName: userDetails.userName,
                password: ev.target.value,
                mobile: userDetails.mobile,
                city: userDetails.city,
                gender:userDetails.gender 
            }
        );
    }
    function handleMobileChange(ev){
        setUserDetails(
            {
                userName: userDetails.userName,
                password: userDetails.password,
                mobile: ev.target.value,
                city: userDetails.city,
                gender:userDetails.gender 
            }
        );
    }
    function handleCityChange(ev){
        setUserDetails(
            {
                userName: userDetails.userName,
                password: userDetails.password,
                mobile: userDetails.mobile,
                city: ev.target.value,
                gender:userDetails.gender 
            }
        );
    }
    
    function handleGenderChange(ev){
        setUserDetails(
            {
                userName: userDetails.userName,
                password: userDetails.password,
                mobile: userDetails.mobile,
                city: userDetails.city,
                gender:ev.target.value 
            }
        );
    }
    return (
        <div className="container-fluid">
            <form onSubmit={handleSubmit} className="w-25">
                <h2>Register User</h2>
                <dl>
                    <dt>Username</dt>
                    <dd><input type="text" onChange={handleUserNameChange} className="form-control" value={userDetails.userName} /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" onChange={handlePasswordChange} className="form-control" value={userDetails.password}/></dd> 
                    <dt>Mobile</dt>
                    <dd><input type="text" onChange={handleMobileChange} className="form-control" value={userDetails.mobile} /></dd>  
                    <dt>City</dt>
                    <dd>
                        <select className="form-select" onChange={handleCityChange} value={userDetails.city}>
                            <option>Hyd</option>
                            <option>Ngp</option>
                            <option>Mum</option>
                        </select>
                    </dd>
                    <dt>Gender</dt>
                    <dd>
                        <input type="checkbox" onChange={handleGenderChange} name="gender" value="male"/> <label>Male</label>
                        <input type="checkbox" onChange={handleGenderChange} name="gender" value="female"/> <label>Female</label>
                    </dd>
                    <button className="btn btn-primary w-100">Register</button>                            
                </dl>
            </form>
        </div>
    );
}