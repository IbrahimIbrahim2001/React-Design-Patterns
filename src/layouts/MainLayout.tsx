//react router
import { Outlet } from "react-router-dom"

//components
import MainNavbar from "../components/MainNavbar"

export default function MainLayout() {
    return (
        <div className="min-h-[calc(100vh-theme('spacing.16'))] font-mainFont text-mainTextColo">
            <MainNavbar />
            <div className="mt-16 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-4 ">
                <Outlet />
            </div>
        </div>
    )
}