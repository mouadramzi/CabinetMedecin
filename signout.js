import React from 'react';
 
import firebase from 'firebase';
const logOutUser = () => {
 firebase.auth().signOut();
};
const LogOut = () => {
 return <a onClick={logOutUser} children="Log-Out" href="/login"    style={{color: "red"}} />;
};
export default LogOut;