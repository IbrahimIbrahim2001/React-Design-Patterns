import {
    Disclosure
} from '@headlessui/react';


//components
import NavbarContainer from './NavbarContainer';
import NavbarDisclosurePanelOnXSOnly from './NavbarDisclosurePanelOnXSOnly';



export default function MainNavbar() {
    return (
        <Disclosure as="nav" className="bg-gray-800 fixed top-0 w-full z-10">
            {({ open }) => (
                <>
                    <NavbarContainer open={open} />
                    <NavbarDisclosurePanelOnXSOnly />
                </>
            )}
        </Disclosure>
    )
}