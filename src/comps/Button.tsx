"use client";

import { ReactNode } from "react";
import { BarLoader } from "react-spinners";

interface Props {
    onClick?: () => void;
    children: ReactNode;
    loading?: boolean;
}

export const Button = (props: Props) => {
    return (
        <div className="button-wrapper">
            <button onClick={props.onClick} disabled={props.loading}>
                {props.loading ?
                    ("Loading...") :
                    (props.children)}
            </button>
        </div>
    )
}