import { useEffect, useState } from "react";

export default function Demo() {
    const [ur, SetUrl] = useState('');
    const location = window.location.hostname.split('.')[0];
    useEffect(() => {
        SetUrl(location)
    }, [])
    return <div className="h-screen w-full bg-black text-white">
        {ur}
    </div>
}