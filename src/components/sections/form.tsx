import React from 'react';
import Heading from "@/components/shared/heading";
import Container from "@/components/shared/container";

const Form = () => {
    return (
        <section className="mt-[120px] mb-[120px]" id="section-form">
            <Container>
                <div className="bg-white h-[886px] flex flex-col justify-center items-center rounded-[20px]">
                    <div className="bg-[#5EB7C6] w-[1195px] h-[686px] flex rounded-[20px]">
                        <div className="flex flex-col pl-[70px] mt-[50px] mb-[50px] gap-y-[40px] w-[708px] border-r-2">
                            <Heading variant={"2xl"} className="text-white w-[488px]">Оставь заявку и мы ответим на вопросы</Heading>
                            <span className="text-[40px] w-[488px]">Позвоним в течении 30 минут в рабочее время с 8:00 до 21:00. Задавай любые вопросы, а мы ответим и поможем подобрать занятия</span>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex bg-white rounded-[10px] mt-[50px] ml-[25px] w-[395px] h-[105px] items-center pl-[25px] pr-[25px]">
                                <select className="outline-none hover:cursor-pointer text-[24px] w-[330px] text-black/50">
                                    <option value="">Класс</option>
                                    <option value="petersburg">11</option>
                                    <option value="samara">10</option>
                                    <option value="perm">Другой</option>
                                </select>
                            </div>
                            <div className="flex bg-white rounded-[10px] mt-[50px] ml-[25px] w-[395px] h-[105px] items-center pl-[25px] pr-[25px]">
                                <input className="outline-none text-[24px] w-[330px] text-black/50" placeholder="Телефон"/>
                            </div>
                            <div className="flex bg-white rounded-[10px] mt-[50px] ml-[25px] w-[395px] h-[105px] items-center pl-[25px] pr-[25px]">
                                <input className="outline-none text-[24px] w-[330px] text-black/50" placeholder="Имя, Фамилия"/>
                            </div>
                            <div className="flex bg-[#DAEFC9] rounded-[10px] mt-[50px] ml-[25px] w-[395px] h-[105px] items-center pl-[25px] pr-[25px] duration-200 transition-all hover:scale-110">
                                <button className="outline-none hover:cursor-pointer text-[36px] font-bold w-[330px] text-black">
                                    Оставить заявку
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Form;