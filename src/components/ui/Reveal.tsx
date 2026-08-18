"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
export function Reveal({children,className=""}:{children:ReactNode;className?:string}) { const ref=useRef<HTMLDivElement>(null); const [shown,setShown]=useState(false); useEffect(()=>{if(!ref.current)return;const observer=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){setShown(true);observer.disconnect();}},{threshold:.12});observer.observe(ref.current);return()=>observer.disconnect();},[]); return <div ref={ref} className={`reveal ${shown?"is-visible":""} ${className}`}>{children}</div>; }
