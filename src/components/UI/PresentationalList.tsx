//types
import { ListProps } from "../../types/PresentationalListProps"


//Presentational component
export default function PresentationalList({ items, resourceName, itemComponent: ItemComponent }: ListProps) {
    return (
        <>
            {items?.map((item, index) => (
                <ItemComponent key={index} {...{ [resourceName]: item }} />
                // for more understanding :
                // {...{ [resourceName]: item }} becomes user={user} as an example
                // <UserDetails key={index} userUser=user /> //this is how it looks at the end

            ))}
        </>
    )
}