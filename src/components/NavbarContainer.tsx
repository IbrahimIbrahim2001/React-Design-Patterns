

//components
import Logo from './Logo';
import NavbarDiscosureButtonOnXSOnly from './NavbarDiscosureButtonOnXSOnly';
import NavbarElementContainerOnSMAndAbove from './NavbarElementContainerOnSMAndAbove';

interface NavbarContainerProps {
    open: boolean
}

export default function NavbarContainer({ open }: NavbarContainerProps) {
    return (
        <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-10">
                <div className="relative flex h-16 items-center justify-between ">
                    <NavbarDiscosureButtonOnXSOnly open={open} />
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <Logo />
                        <NavbarElementContainerOnSMAndAbove />
                    </div>
                </div>
            </div>
        </>
    )
}
