import { userType } from "../types/ListProps";

interface UserProps {
    user?: userType;
}

export default function UserDetails({ user }: UserProps) {

    if (!user) return <p className="text-lg font-bold">not enough information, sorry...</p>
    return (
        <div className="border-2 text-lg rounded-lg min-h-24">
            <div className="p-2 text-left">
                <div className="mb-1">
                    <span className="font-semibold text-specialColor">Name:</span>
                    <p className="italic inline-block ml-1">{user.name}</p>
                </div>
                <div className="text-sm mb-1">
                    <span className="font-semibold text-specialColor">Username:</span>
                    <p className="italic inline-block ml-1">{user.username}</p>
                </div>
                <div className="text-sm mb-1">
                    <span className="font-semibold text-specialColor">Company:</span>
                    <p className="italic inline-block ml-1">{user.company.name}</p>
                </div>
            </div>
        </div>
    )
}
