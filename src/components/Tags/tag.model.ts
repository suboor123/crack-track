import { ReactNode } from "react"

export interface ITag {
    tagName: string
}

export const TAG_PATH = 'tags'

export const tag_colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'cyan',
    'blue',
    'violet'
]

export const getRandomTagColor = () => {
    return tag_colors[Math.floor(Math.random()*tag_colors.length)]
}

export interface ItemDataType {
    /** The value of the option corresponds to the `valueKey` in the data. **/
    value: string;

    /** The content displayed by the option corresponds to the `labelKey` in the data. **/
    label: ReactNode;

    /**
     * The data of the child option corresponds to the `childrenKey` in the data.
     * Properties owned by tree structure components, such as TreePicker, Cascader.
     */
    children?: ItemDataType[];

    /**
     * Properties of grouping functional components, such as CheckPicker, InputPicker
     */
    groupBy?: string;

    /**
     * The children under the current node are loading.
     * Used for components that have cascading relationships and lazy loading of children. E.g. Cascader, MultiCascader
     */
    loading?: boolean;

    /**
     * Color of tags
     */
    color?: string
}
