import React from 'react';
import {ISectionProps} from "@/types/section.interface";
import Container from "@/components/shared/container";
import {cn} from "@/lib/utils";

const Section = ( { id, className, children, variant = "primary" }: ISectionProps) => {
    const setVariant = () => {
        switch (variant) {
            case "primary":
                return "bd-background";
            case "secondary":
                return "bd-secondary";
        }
    }
    return (
        <section className={cn(className, setVariant(), 'w-full py-12' +
            ' md:py-16 lg:py-24')} id={`${id}-section`}>
            <Container>
                {children}
            </Container>
        </section>
    );
};

export default Section;