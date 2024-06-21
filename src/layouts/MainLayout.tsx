//react router
import { Outlet } from "react-router-dom"

//components
import MainNavbar from "../components/MainNavbar"

export default function MainLayout() {
    return (
        <div className="min-h-screen font-mainFont text-mainTextColor">
            <MainNavbar />
            <div className="mx-auto  max-w-7xl px-2 sm:px-6 lg:px-8 py-4 ">
                <Outlet />
            </div>
        </div>
    )
}