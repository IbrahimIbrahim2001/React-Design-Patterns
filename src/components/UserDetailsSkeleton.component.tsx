//components
import UserSkeletonTextComponent from "./UserSkeletonText.component";

const skeletonProps = [
    {
        height: 'h-4',
        titleSkeletonSpan: 'col-span-3',
        textSkeletonSpan: 'col-span-9'
    },
    {
        height: 'h-3',
        titleSkeletonSpan: 'col-span-4',
        textSkeletonSpan: 'col-span-8'
    },
    {
        height: 'h-3',
        titleSkeletonSpan: 'col-span-4',
        textSkeletonSpan: 'col-span-8'
    },
];

export default function UserDetailsSkeletonComponent() {
    return (
        <div className="px-3 sm:px-0 pb-2">
            <h1 className="text-2xl font-bold">Users List  Component:</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 rounded-lg">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_element, index) => (
                    <div key={index} className="border-2 rounded-lg p-4 min-h-24 animate-pulse space-y-3">
                        {skeletonProps.map((skeletonPropsItem, itemIndex) => (
                            <UserSkeletonTextComponent {...skeletonPropsItem} key={itemIndex} />
                        ))}
                    </div>
                ))
                }
            </div>
        </div>
    )
}