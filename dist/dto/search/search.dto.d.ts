export declare class IndexMovieDto {
    id: number;
    title: string;
    slug: string;
    description?: string;
    thumbnail?: string;
    genres?: string[];
    tags?: string[];
    country?: string;
    director?: string;
    type?: 'single' | 'series';
    year?: number;
    view?: number;
    followers?: number[];
    publishAt?: string;
    quality?: string;
    totalScoreRating?: number;
    ratingCount?: number;
    likeCount?: number;
    studio?: string;
    season?: string;
    trailer?: string;
    ageRating?: number;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
}
export declare class BulkIndexMoviesDto {
    movies: IndexMovieDto[];
}
export declare class UpdateMovieDto extends IndexMovieDto {
}
export declare class SearchMoviesDto {
    q?: string;
    genres?: string[];
    tags?: string[];
    country?: string;
    yearFrom?: number;
    yearTo?: number;
    ratingFrom?: number;
    ratingTo?: number;
    type?: 'single' | 'series';
    sort?: 'relevance' | 'view' | 'rating' | 'newest' | 'year';
    page?: number;
    pageSize?: number;
}
export declare class SuggestDto {
    prefix: string;
    size?: number;
}
