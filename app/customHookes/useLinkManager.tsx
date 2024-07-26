import { useState, ChangeEvent } from 'react';
import { v4 as uuid } from 'uuid'
import { collection, addDoc, getDocs, DocumentData } from "firebase/firestore";
import { db } from '../firebase/config';

type Link = {
    id: string
    platform: string;
    link: string;
};

const useLinksManager = () => {
    const [links, setLinks] = useState<Link[]>([]);
    const [phoneLink, setPhoneLink] = useState<Link[]>([]);
    const [fetchedLinks, setFetchedLinks] = useState<DocumentData[]>([]);
    const [saving, setSaving] = useState(false);

    const addLink = () => {
        setLinks(prev => [...prev, { id: uuid(), platform: '', link: '' }]);
    };

    const removeLink = (id: string) => {
        setLinks(prev => {
            const prevLinks = [...prev]
            const newUpdatedLinks = prevLinks.filter(link => link.id !== id)
            console.log(newUpdatedLinks)
            return newUpdatedLinks;
        })
    };

    const handleInputChange = (id: string, event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const values = [...links];
        const itemLinkToChange = values.find(item => item.id === id);
        if (itemLinkToChange) {
            itemLinkToChange.link = event.target.value;
        }
        setLinks(values);
        console.log(links);

    };

    const handlePlatformChange = (index: number, value: string) => {
        const newLinks = [...links];
        newLinks[index] = { ...newLinks[index], platform: value };
        setLinks(newLinks);
    };

    const saveLinks = async() => {
        const isValid = links.every(({ platform, link }) =>
            platform && link && link.startsWith('http://') ||
            link.includes('https://') && link.includes('.com') ||
            link.includes('.org') || link.includes('.net') ||
            link.includes('.edu') || link.includes('.gov'));
        if (isValid) {
            //we create our document in Firestore
            setSaving(true);
            try {
                // const batch = db.batch();
                const linksCollectionRef = collection(db, 'links');
                links.forEach(async (link) => {
                    const docRef = await addDoc(linksCollectionRef, link);
                    console.log("Document written with ID: ", docRef.id);
                });

                try {
                    const querySnapshot = await getDocs(collection(db, "links"));
                    querySnapshot.forEach((doc) => {
                        console.log(`${doc.id} => ${doc.data()}`);
                        setFetchedLinks((prev) => {
                            const prevFetch = [...prev];
                            const newFetch = [...prevFetch, doc.data()];
                            console.log(newFetch);
                            
                            return newFetch;
                        });
                    })
                    setSaving(false);
                    alert('Links saved successfully!');
                } catch (error) {
                    console.log("Error getting documents: ", error);
                }
            } catch (e) {
                console.error("Error adding document: ", e);
                alert('Error saving links. Please try again.');
            }
        } else {
            alert('Please fill in all the required fields for each link.');
        }
    }

    return {
        links,
        addLink,
        removeLink,
        handleInputChange,
        handlePlatformChange,
        saveLinks,
        phoneLink,
        saving,
        fetchedLinks
    };
};

export default useLinksManager;
