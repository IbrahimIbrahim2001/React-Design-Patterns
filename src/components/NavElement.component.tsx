import { DisclosureButton } from "@headlessui/react";
import { NavLink, useMatch } from "react-router-dom";
import { navigationType } from "../types/ListProps";




function classNames(...classes: string[]) {

    return classes.filter(Boolean).join(' ');
}

export default function NavElementComponent({ item }: { item: navigationType }) {
    const match = useMatch(item.href);
    return (
        <DisclosureButton
            key={item.name}
            className={classNames(
                match ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium w-full text-left'
            )}
            aria-current={match ? 'page' : undefined}
        >
            <NavLink to={item.href}>{item.name}</NavLink>
        </DisclosureButton>
    )
}