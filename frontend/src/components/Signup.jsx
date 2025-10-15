import React, { useState } from "react";
import "./Signup.css";


function Signup() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirm, setConfirm] = useState("");
const [message, setMessage] = useState("");


const handleSubmit = (e) => {
e.preventDefault();
if (!name || !email || !password || !confirm) {
setMessage("Please fill all fields");
} else if (password !== confirm) {
setMessage("Passwords do not match");
} else {
setMessage("Signup successful!");
console.log({ name, email, password });
}
};


return (
<div className="signup-container">
<form className="signup-box" onSubmit={handleSubmit}>
<h2>Create Account</h2>


{message && <p className="msg">{message}</p>}


<input
type="text"
placeholder="Full Name"
value={name}
onChange={(e) => setName(e.target.value)}
/>


<input
type="email"
placeholder="Email"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>


<input
type="password"
placeholder="Password"
value={password}
onChange={(e) => setPassword(e.target.value)}
/>


<input
type="password"
placeholder="Confirm Password"
value={confirm}
onChange={(e) => setConfirm(e.target.value)}
/>


<button type="submit">Sign Up</button>


<p className="login-link">Already have an account? <a href="/login">Login</a></p>
<p className="signup-link">Back to Home <a href="/">🏠︎</a></p>
</form>
</div>
);
}


export default Signup;