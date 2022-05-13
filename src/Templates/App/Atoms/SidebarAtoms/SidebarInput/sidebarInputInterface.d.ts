import React from "react"

export interface sidebarInputPropsInterface {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    style?: React.CSSProperties;
    placeholder?: string;
}