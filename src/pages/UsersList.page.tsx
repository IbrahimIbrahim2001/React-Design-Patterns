//components
import List from "../components/UI/List";
import UserDetails from "../components/UserDetails";

//hooks
import { useFetchUsers } from "../hooks/useFetchUsers";

//component
import UserDetailsSkeletonComponent from "../components/UserDetailsSkeleton.component";

export default function UsersListPage() {

    const { data: users, isLoading, isError } = useFetchUsers();
    if (isLoading) {
        return <UserDetailsSkeletonComponent />
    }
    if (isError) {
        return <p>Error....</p>;
    }
    return (
        <div className="px-3 sm:px-0 pb-2">
            <h1 className="text-2xl font-bold">Users List  Component:</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 rounded-md">
                <List items={users?.data} resourceName="user" itemComponent={UserDetails} />
            </div>
        </div>
    )
}
