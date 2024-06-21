//types
import { ListProps } from "../../types/ListProps"


export default function List({ items, resourceName, itemComponent: ItemComponent }: ListProps) {
    return (
        <>
            {items?.map((item, index) => (
                <ItemComponent key={index} {...{ [resourceName]: item }} />
            ))}
        </>
    )
}
