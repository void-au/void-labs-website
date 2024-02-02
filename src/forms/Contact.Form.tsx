"use client";

import { Button } from "@/comps/Button";
import { Input } from "@/comps/Input";
import { useState } from "react";

export const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [enquiry, setEnquiry] = useState("");
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState("");

    const submit = async () => {
        setLoading(true);

        try {
            const res = await fetch("https://formspree.io/f/mzbneznb", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    enquiry: enquiry,
                }),
            });

            if (res.ok) {
                setName("");
                setEmail("");
                setEnquiry("");
                setMsg("Thank you for your enquiry, we will get back to you soon.");
            } else {
                setMsg("Failed to submit form, please try again later.");
            }
        } catch (err) {
            setMsg("Failed to submit form, please try again later.");
        }

        setLoading(false);
    }

    return (
        <div className="form contact-form">
            <Input label="Name" placeholder="Enter your name..." value={name} onChange={setName} />
            <Input label="Email" placeholder="Enter your email..." value={email} onChange={setEmail} />
            <Input label="Enquiry" placeholder="Enter your request..." value={enquiry} onChange={setEnquiry} />
            <Button onClick={() => submit()} loading={loading}>
                Submit
            </Button>
            {msg && <p>{msg}</p>}
        </div>
    )
}