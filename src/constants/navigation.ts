export interface INavigation {
    id: number;
    href: string;
    label: string;
}

export const  NAV_ITEMS: INavigation[] = [
    {
        id: 1,
        href: "/",
        label: "Home",
    },
    {
        id: 2,
        href: "/",
        label: "About me",
    },
    {
        id: 3,
        href: "/",
        label: "Skills",
    },
    {
        id: 4,
        href: "/",
        label: "Portfolio",
    },
    {
        id: 5,
        href: "/",
        label: "Contacts",
    },
];