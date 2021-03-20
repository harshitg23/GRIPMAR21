// import React from 'react';

// const Contact = () => {
//     return (
//         <div className="container">
//             <div className="py-4">
//                 <h1>Contact</h1>
//                 <form>
//                     <div className="mb-3">
//                         <label for="exampleInputEmail1" className="form-label">Email address</label>
//                         <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//                         <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//                     </div>
//                     <div className="mb-3">
//                         <label for="exampleInputPassword1" className="form-label">Password</label>
//                         <input type="password" className="form-control" id="exampleInputPassword1" />
//                     </div>
//                     <div className="mb-3 form-check">
//                         <input type="checkbox" className="form-check-input" id="exampleCheck1" />
//                         <label className="form-check-label" for="exampleCheck1">Check me out</label>
//                     </div>
//                     <button type="submit" className="btn btn-primary">Submit</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Contact;


import React, { useState } from "react";
import '../Contact.css';
import firebaseDb from '../Firebase';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        firebaseDb.child("contacts")
            .push({
                name: name,
                email: email,
                message: message,
            })
            .then(() => {
                setLoader(false);
                alert("Your message has been submitted👍");
            })
            .catch((error) => {
                alert(error.message);
                setLoader(false);
            });

        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="app">
        <form className="form" onSubmit={handleSubmit}>
            <h1>Contact Us 🤳</h1>

            <label>Name</label>
            <input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label>Email</label>
            <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label>Message</label>
            <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button
                type="submit"
                style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
            >
                Submit
      </button>
        </form>
        </div>
    );
};

export default Contact;