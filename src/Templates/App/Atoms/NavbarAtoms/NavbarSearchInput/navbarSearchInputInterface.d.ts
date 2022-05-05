import React from "react";

export interface navbarSearchInputPropsInterface {
    value: string;
    onChange: React.Dispatch<React.SetStateAction<string>>;
    style?: React.CSSProperties;
    placeholder?: string;
}