import { Channels, Status, StatusInApp } from "../../enum/notification.enum";

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type?: string; // RECOMMENDATION, BILLING, SYSTEM...
  channels?: Channels;
  status?: Status | StatusInApp;
  metadata?: {
    movieId?: string;
    link?: string;
  };
  isRead: boolean;
  createdAt: Date;
  readAt: Date;
}
