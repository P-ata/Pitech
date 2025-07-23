import { useEffect } from "react";

export default function TabTitle({ title }) { 
    useEffect(() => { 
        document.title = title;
    }, [title]);

    return null; 
}