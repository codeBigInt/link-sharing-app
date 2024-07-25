// src/context/LinksContext.tsx
'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Link = {
  platform: string;
  link: string;
};

type LinksContextType = {
  links: Link[];
  phoneLink: Link[];
  addLink: () => void;
  removeLink: (index: number) => void;
  handleInputChange: (index: number, event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handlePlatformChange: (index: number, value: string) => void;
  saveLinks: () => void;
};

export const LinksContext = createContext<LinksContextType | undefined>(undefined);

export const LinksProvider = ({ children }: { children: ReactNode }) => {
  const [links, setLinks] = useState<Link[]>([]);
  const [phoneLink, setPhoneLink] = useState<Link[]>([]);

  const addLink = () => {
    setLinks([...links, { platform: '', link: '' }]);
  };

  const removeLink = (index: number) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
    const isValid = links.every(({ platform, link }) =>
      platform &&
      (link.startsWith('http://') || link.startsWith('https://')) &&
      (link.includes('.com') || link.includes('.org') || link.includes('.net') || link.includes('.edu') || link.includes('.gov'))
    );
    if (isValid) {
      setPhoneLink([...links]);
    } else {
      alert('Please fill in all the required fields for each link.');
    }
  };

  return (
    <LinksContext.Provider value={{ links, phoneLink, addLink, removeLink, handleInputChange, handlePlatformChange, saveLinks }}>
      {children}
    </LinksContext.Provider>
  );
};


export const useLinksManager = (): LinksContextType => {
    const context = useContext(LinksContext);
    if (!context) {
      throw new Error('useLinksManager must be used within a LinksProvider');
    }
    return context;
  };