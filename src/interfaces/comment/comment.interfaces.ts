export class Comment {
  userId: number;
  content: string;
  contentId: number;
  parentId: string | null; // ObjectId
  mentions: number[];
  createdAt: Date;
  updatedAt: Date;
}
