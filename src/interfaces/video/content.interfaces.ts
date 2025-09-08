import { Actor } from "./actor.interfaces";
import { Genre } from "./genre.interfaces";
import { Series } from "./series.interfaces";
import { Tag } from "./tag.interfaces";
import { Video } from "./video.interfaces";

export class Content {
  id: number;
  title: string;
  slug: string;
  description?: string;
  thumbnail?: string;
  genres?: Genre[];
  tags?: Tag[];
  country?: string;
  director?: string;
  type: "single" | "series";
  video?: Video[];
  series?: Series;
  actors?: Actor[];
  year: number;
  view: number;
  followers: number[];
  publishAt: Date;
  quality: string;
  totalScoreRating: number;
  ratingCount: number;
  likeCount: number;
  studio: string;
  season: string;
  trailer: string;
  ageRating: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
