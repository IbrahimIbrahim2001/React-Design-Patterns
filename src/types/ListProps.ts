export type userType = {
    name: string,
    company: {
        name: string
    },
    username: string
}


export type navigationType = {
    name: string,
    href: string,
    current: boolean

}

export interface ListProps {
    items: userType[] | navigationType[],
    resourceName: string,
    itemComponent: ((props: { [key: string]: string | React.ReactNode } & { key: React.Key | undefined }) => React.ReactElement) | unknown
}