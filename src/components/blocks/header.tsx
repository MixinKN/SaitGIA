import React from 'react';
import Container from "@/components/shared/container";
import {FiSearch} from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import {MENU_DATA} from "@/types/menu";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo.png"

const Header = () => {
    return (
        <header className="w-full" id="header">
            <Container>
                <div className="border-b-5 border-[#59C0D1]">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-x-[25px]">
                            <div className="bg-background size-[100px]"></div>
                            <Image className="absolute left-[256px] -top-[20px]" src={Logo} alt={"logo"} />
                            <span className="text-[#59C0D1] leading-[52px] font-medium text-[48px]">ПОДГОТОВЬСЯ К ЭКЗАМЕНАМ ЗАРАНЕЕ С НАМИ</span>
                        </div>
                        <div className="flex pb-5 gap-x-[72px]">
                            <button className="text-black cursor-pointer">
                                <FiSearch size={50} className="hover:text-[#84BFC6] duration-200" />
                            </button>
                            <button className="text-black cursor-pointer">
                                <CgProfile size={50} className="hover:text-[#84BFC6] duration-200" />
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-x-[30px]">
                        <span className="text-black text-[32px] leading-[37px] text-center w-[98px]">Решу<br/>Сам</span>
                        <span className="text-black text-[24px]">Подготовка, после которой не страшно на экзаменах.</span>
                    </div>
                </div>
                <menu className="flex gap-x-[50px] border-b-5 border-[#59C0D1] h-[100px] items-center">
                    {MENU_DATA.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} className="text-black font-bold text-[32px] hover:text-[#84BFC6] duration-200 hover:cursor-pointer">{item.label}</Link>
                        </li>
                    ))}
                </menu>
            </Container>
        </header>
    );
};

export default Header;