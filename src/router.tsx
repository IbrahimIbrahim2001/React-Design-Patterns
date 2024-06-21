//react router
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

// layouts
import MainLayout from "./layouts/MainLayout";

//pages
import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersList.page";
import NotFound from "./pages/NotFound";


const routes = createRoutesFromElements(

    <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="users" element={<UsersListPage />} />
        <Route path="*" element={<NotFound />} />
    </Route>
)

export const router = createBrowserRouter(routes, { basename: "/react-design-patterns/" });