import useLinksManager from '@/app/customHookes/useLinkManager'
import Link from 'next/link'
import bg from '../../assets/preview-section.png'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

type Link = {
    platform: string;
    link: string;
}

const DisplayScreen = () => {
    const { phoneLink } = useLinksManager()
    const [showLinks, setShowLinks] = useState<Link[]>([])


    return (
        
            );
}

            export default DisplayScreen;
