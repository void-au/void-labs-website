"use client"

import { useState } from "react";
import { Button } from "./Button"
import { Input } from "./Input"

export const Subscribe = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    // Send the form
    const send = async () => {
        setLoading(true);
        setSuccess(false);
        try {
            const res = await fetch(`/the_void/api?email=${email}`, {
            });

            if (res.status !== 200) {
                throw new Error("Failed to subscribe! Please try again later.")
            }

            setSuccess(true);
        } catch (err) {
            setError("Failed to subscribe! Please try again later.")
        }
        setLoading(false);
    }

    return (
        <div className="subscribe">
            <h3>Never miss a beat.</h3>
            <p>Subscribe to the void today, get the latest on; Sensors, IoT, Tech & Software, News, and Updates.</p>
            <br />
            <Input label="Email" value={email} onChange={setEmail} placeholder="Enter your email address..." />


            {success === false ?
                (<Button onClick={send} loading={loading}> Enter The Void.</Button>)
                :
                (<p>Check your inbox!</p>)
            }
        </div >
    )
}