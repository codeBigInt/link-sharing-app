import { useState, ChangeEvent } from 'react';

type Link = {
    platform: string;
    link: string;
};

const useLinksManager = () => {
    const [links, setLinks] = useState<Link[]>([]);
    const [phoneLink, setPhoneLink] = useState<Link[]>([]);

    const addLink = () => {
        setLinks([...links, { platform: '', link: '' }]);
    };

    const removeLink = (index: number) => {
        const updatedLinks = [...links.slice(0, index), ...links.slice(index + 1)];
        setLinks(updatedLinks);
    };

    const handleInputChange = (index: number, event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const values = [...links];
        values[index][event.target.name as keyof Link] = event.target.value;
        setLinks(values);
    };

    const handlePlatformChange = (index: number, value: string) => {
        const newLinks = [...links];
        newLinks[index] = { ...newLinks[index], platform: value };
        setLinks(newLinks);
    };

    const saveLinks = () => {
        // Implement saving logic here
        //Check if links are valid before saving
        const isValid = links.every(({ platform, link }) =>
            platform && link && link.startsWith('http://') ||
            link.includes('https://') && link.includes('.com') ||
            link.includes('.org') || link.includes('.net') ||
            link.includes('.edu') || link.includes('.gov'));
        if (isValid) {
            setPhoneLink([...links]);
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
    };
};

export default useLinksManager;
