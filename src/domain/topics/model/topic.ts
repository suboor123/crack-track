interface Has_Uid {
    uid?: string
}

export interface Topic extends Has_Uid {
    title: string;
    description: string;
    imageUrl: string;
    created_by: string
}

export type TopicFrom = Omit<Topic, "created_by" | "imageUrl">

