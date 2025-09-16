export interface Watchlist {
  id: number;
  userId: number;
  contentIds: number[];
  name: string;
  thumbnailUrl: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
