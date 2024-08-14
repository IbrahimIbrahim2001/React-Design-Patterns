import { Fragment } from "react/jsx-runtime";
import { userType } from "../types/PresentationalListProps";
import UserDetailsCardTextComponent from "./UserDetailsCardText.component";

interface UserProps {
    user?: userType;
}

export default function UserDetails({ user }: UserProps) {
    const userDetailsCardTextProps = [{
        userDetailsKey: 'Name',
        userDetailsValue: user?.name,
        extraStyles: 'sm:text-base'
    },
    {
        userDetailsKey: 'UserName',
        userDetailsValue: user?.username,
        extraStyles: ''
    },
    {

        userDetailsKey: 'Company',
        userDetailsValue: user?.company?.name,
        extraStyles: ''
    }]


    if (!user) return <p className="text-lg font-bold">not enough information, sorry...</p>
    return (
        <div className="border rounded-lg min-h-24 p-2 text-left flex flex-col justify-between h-full">
            {userDetailsCardTextProps.map((userDetailsCardTextPropsItem, itemIndex) => (
                <Fragment key={itemIndex}>
                    <UserDetailsCardTextComponent {...userDetailsCardTextPropsItem} />
                </Fragment>
            ))}
        </div>
    )
}
