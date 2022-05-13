import React from "react";

export interface sidebarTagPropsInterface {
    text: string;
    color: string;
    style?: React.CSSProperties;
    key?: number;
    extra?: React.ReactNode
}