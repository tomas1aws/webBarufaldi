import type { ReactNode } from "react";
export function Button({href,children,variant="primary"}:{href:string;children:ReactNode;variant?:"primary"|"text"|"light"}) { return <a className={`button button--${variant}`} href={href}>{children}<span aria-hidden="true">↗</span></a>; }
