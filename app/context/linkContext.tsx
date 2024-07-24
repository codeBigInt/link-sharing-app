// 'use client'
// import { ChangeEvent, useState } from "react";
// import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
// import { FaX } from "react-icons/fa6";
// import { PiEmpty } from "react-icons/pi";
// import { createContext } from "vm";


// type LinkContextType = {
//     links: {
//       platform: string;
//       link: string;
//     }[];
//     handleInputChange: (index: number, e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
//     handlePlatformChange: (index: number, value: string) => void;
//     removeLink: (index: number) => void;
//     iconsToDisplay: {
//       icon: React.ReactNode;
//     }[];
//     children: React.ReactNode
//   }

// type LinkContextProp = {
//     children: React.ReactNode;
// }


// export const linkContext = createContext({})



// export const LinkProvider = ({ children }: LinkContextType) => {
//     const iconToDisplay: { icon: React.ReactNode }[] = [
//         { icon: <PiEmpty /> },
//         { icon: <FaGithub /> },
//         { icon: <FaLinkedin /> },
//         { icon: <FaFacebook /> },
//         { icon: <FaX /> }
//     ];
//     const [icon, setIcon] = useState<React.ReactNode>(iconToDisplay[0].icon)
//     const [links, setLinks] = useState<LinkContextType[]>([])
    
    
//     const addLink = () => {
//         setLinks([...links, { platform: '', link: '' }]);
//     };
    
//     const removeLink = (index: number) => {
//         setLinks(links.filter((_, i) => i !== index));
//     };
    
//     const handleInputChange = (index: number, event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//         const values = [...links];
//         values[index][event.target.name as keyof Link] = event.target.value;
//         setLinks(values);
//         console.log(links);
    
//     };
//     const handlePlatformChange = (index: number, value: string) => {
//         const newLinks = [...links];
//         newLinks[index] = { ...newLinks[index], platform: value };
//         setLinks(newLinks);
//     };

//     const values = {
//         links,
//         addLink,
//         removeLink,
//         handleInputChange,
//         handlePlatformChange,
//         icon,
//         setIcon,
//         iconToDisplay,
//     }
//     return (
//         <linkContext.Provider value={values}>
//             {children}
//         </linkContext.Provider>
//     )
// }