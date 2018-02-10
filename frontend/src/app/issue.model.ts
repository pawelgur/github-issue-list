export enum IssueStatus {
    open = "OPEN",
    closed = "CLOSED"
}


export interface Issue {
    title: string;
    id: string;
    opened: string; //todo: use date and calculate readable string
    author: string;
    commentCount: number;
    status: IssueStatus;
    tags?: string[]; // todo: create interface to support custom types (colors)
}

export interface Comment {
    author: string;
    date: string;  //todo: use date and calculate readable string
    content: string;
}