import React from 'react';
import { BsGithub, BsTelegram } from 'react-icons/bs';
import { GiWorld } from 'react-icons/gi';
import { AiOutlineInstagram } from 'react-icons/ai';

export default function AboutUs() {
    return (
        <>
                <BsGithub size={50} />
                <BsTelegram size={50} />
                <GiWorld size={50} />
                <AiOutlineInstagram size={50} />
        </>
    );
}