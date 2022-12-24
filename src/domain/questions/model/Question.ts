import { User } from '../../user/model/user';

interface Has_Uid {
    uid?: string;
}

export interface Question extends Has_Uid {
    title: string;
    content: string;

    topicId: string;
    createdBy: string;
    createdAt: string;

    tags: QuestionTags[];

    comments?: Comment[];
    votes?: Vote[];

    publishedBy?: User;
    topicImage?: string;
}

export interface Comment {
    uid?: string;
    commentedBy: string;
    content: string;
    createdAt: string;
    commentByUser?: User;
}

export interface Vote {
    votedBy: string;
}

export interface QuestionTags {
    tagId: string;
}

export interface IQuestionForm {
    title: string;
    tags: string[];
    content: string;
    topicId: string;
}
