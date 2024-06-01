import clsx from "clsx";
import React from "react";

export default function Section({ children, className }) {
    return (
        <div className={clsx(className, "container mx-auto")}>{children}</div>
    );
}
