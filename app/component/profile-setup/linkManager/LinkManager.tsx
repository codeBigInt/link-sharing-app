import React, { ChangeEvent } from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { LuLink } from "react-icons/lu";
import { RiEqualFill } from "react-icons/ri";
import CustomDropdown from './CustomDropDown';
import useLinksManager from '@/app/customHookes/useLinkManager';

// type LinkProp = {
//     links: {
//         platform: string,
//         link: string,
//     }[];
//     handleInputChange: (index: number, e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
//     handlePlatformChange: (index: number, value: string) => void;
//     removeLink: (index: number) => void;
//     iconsToDisplay: {
//         icon: React.ReactNode
//     }[]
// }


type Link = {
    platform: string;
    link: string;
  };
  
  type LinkManagerProps = {
    links: Link[];
    handleInputChange: (index: number, event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handlePlatformChange: (index: number, value: string) => void;
    removeLink: (index: number) => void;
  };
  

const LinkManager = ({links, handleInputChange, handlePlatformChange, removeLink}: LinkManagerProps) => {
    const platforms = ["GitHub", "LinkedIn", "Twitter", "Instagram", "Facebook"];
    // eslint-disable-next-line react/jsx-key
    const icons = [<FaGithub />, <FaLinkedin />, <FaTwitter />, <FaInstagram />, <FaFacebook />];

    return (
        <ul className={`flex flex-col gap-6 md:min-h-[500px] py-12 md:max-h-[500px] ${links.length >= 2 ? 'overflow-y-scroll' : ''}`}>
            {links.map((link, index) => (
                <li key={index} className='flex flex-col gap-4 p-4 bg-[#fafafa] rounded-xl'>
                    <div className='flex justify-between items-center'>
                        <span className='flex gap-2 items-center'>
                            <span>
                                <RiEqualFill />
                            </span>
                            <span className='font-semibold'>Link #{index + 1}</span>
                        </span>
                        <button onClick={() => removeLink(index)}>Remove</button>
                    </div>
                    <div>
                        <span className='text-[12px]'>Platform</span>
                        <div className='flex items-center gap-2'>
                            <CustomDropdown
                                options={platforms}
                                value={link.platform}
                                onChange={(value) => handlePlatformChange(index, value)}
                                icons={icons}
                            />
                        </div>
                    </div>
                    <span className='text-[12px]'>Link</span>
                    <div className='bg-white w-full flex items-center px-4 rounded-md shadow-md outline-none'>
                        <span><LuLink /></span>
                        <input
                            type="text"
                            name="link"
                            className='p-4 flex-1 w-[80%] outline-none border-none'
                            placeholder="e.g. https://www.github.com/johndoe"
                            value={link.link}
                            onChange={(e) => handleInputChange(index, e)}
                        />
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default LinkManager;
