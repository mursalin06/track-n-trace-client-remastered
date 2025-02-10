import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function PageTitle({ title }) {
    
    const location = useLocation();
    const defaultTitle = 'Track n Trace';

    useEffect(() => {
        document.title = title || defaultTitle;
    }, [location, title]); 

    return null;
}