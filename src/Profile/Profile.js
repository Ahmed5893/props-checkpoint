import React from 'react'

const Profile = (props) => {

    return (
        <>
        
         <div>  {props.children} </div>
         <h1>{props.FullName}</h1>  
          <h3>{props.bio}</h3>
          <h5>{props.job}</h5>
        </>
    );
};

export default Profile;
