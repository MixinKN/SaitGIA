import React from "react";
import { FOOTER_MENU_EGE } from "@/types/footerMenu";
import { FOOTER_MENU_OGE } from "@/types/footerMenu";
import { FOOTER_MENU_ABOUT } from "@/types/footerMenu";
import { FOOTER_MENU_CONTACTS } from "@/types/footerMenu";
import Link from "next/link";
import Container from "@/components/shared/container";

const Footer = () => {
    return (
        <footer className="w-full h-full bg-[#E0E0E0]">
            <Container>
                <div className="flex flex-col gap-y-[90px] pb-[60px]">
                    <div className="flex justify-between pt-[60px]">
                        <div className="flex flex-col gap-y-[20px]">
                            <span className="text-black text-[20px]">ЕГЭ</span>
                            <div className="flex flex-col gap-y-[20px]">
                                {FOOTER_MENU_EGE.map((item, index) => (
                                    <li key={index}>
                                        <Link href={item.href} className="text-black/50 text-[16px]">{item.label}</Link>
                                    </li>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-[20px]">
                            <span className="text-black text-[20px]">ОГЭ</span>
                            <div className="flex flex-col gap-y-[20px]">
                                {FOOTER_MENU_OGE.map((item, index) => (
                                    <li key={index}>
                                        <Link href={item.href} className="text-black/50 text-[16px]">{item.label}</Link>
                                    </li>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-[20px]">
                            <span className="text-black text-[20px]">О нас</span>
                            <div className="flex flex-col gap-y-[20px]">
                                {FOOTER_MENU_ABOUT.map((item, index) => (
                                    <li key={index}>
                                        <Link href={item.href} className="text-black/50 text-[16px]">{item.label}</Link>
                                    </li>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-col gap-y-[20px]">
                            <span className="text-black text-[20px]">ЕГЭ</span>
                            <div className="flex flex-col gap-y-[20px]">
                                {FOOTER_MENU_CONTACTS.map((item, index) => (
                                    <li key={index}>
                                        <Link href={item.href} className="text-black/50 text-[16px]">{item.label}</Link>
                                    </li>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
