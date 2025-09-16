export interface Comment {
  userId: number;
  content: string;
  contentId: number;
  parentId: string | null; // ObjectId
  mentions: number[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CommentClient extends Comment {
  _id: string;
  replies?: CommentClient[];
}
