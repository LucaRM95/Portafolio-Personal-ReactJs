import db from './firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const useFireBase = () => {
    
    const [project, setProject] = useState({
        data:[],
        loading: true
    })    
    
    useEffect(() => {
        const q = collection(db, "projects");
        getDocs(q).then(snapshot => {
            setProject({
                data: snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})),
                loading: false
            })
        })
    }, [])

    return project;
}

export default useFireBase;