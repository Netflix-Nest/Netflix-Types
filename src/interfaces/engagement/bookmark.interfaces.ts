export interface Bookmark {
  id: number;
  userId: number;
  videoId: number;
  timestamp: number;
  note: string;
  createdAt: Date;
  deletedAt: Date;
}
