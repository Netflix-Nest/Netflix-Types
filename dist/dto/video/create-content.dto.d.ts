export declare class CreateContentDto {
    title: string;
    description?: string;
    thumbnail?: string;
    genreIds: number[];
    tagIds: number[];
    country?: string;
    director?: string;
    type: 'single' | 'series';
    videoId?: number;
    seriesId?: number;
    actorIds?: number[];
    year: number;
    view: number;
    followers: number[];
    publishAt: Date;
    quality: string;
    totalScoreRating: number;
    ratingCount: number;
    studio: string;
    season: string;
    trailerId?: number;
    ageRating: number;
}
