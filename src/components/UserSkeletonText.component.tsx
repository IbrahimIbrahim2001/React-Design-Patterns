
type UserSkeletonTextComponentType = {
    height: string,
    titleSkeletonSpan: string,
    textSkeletonSpan: string
}

export default function UserSkeletonTextComponent({ height, titleSkeletonSpan, textSkeletonSpan }: UserSkeletonTextComponentType) {
    return (
        <div className="grid grid-cols-12 gap-x-4">
            <div className={`bg-[#eee] rounded ${height}  ${titleSkeletonSpan}`}></div>
            <div className={`bg-[#eee] rounded  ${height} ${textSkeletonSpan}`}></div>
        </div>
    )
}
