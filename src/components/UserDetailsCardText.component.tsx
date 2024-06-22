type UserDetailsCardTextComponentPropsType = { userDetailsKey: string, userDetailsValue?: string, extraStyles?: string };


export default function UserDetailsCardTextComponent({ userDetailsKey, userDetailsValue, extraStyles }: UserDetailsCardTextComponentPropsType) {
    return (
        <div className={`text-sm ${extraStyles}`}>
            <span className="font-semibold text-specialColor">{userDetailsKey}:</span>
            <p className="italic inline-block ml-1">{userDetailsValue}</p>
        </div>
    )
}