export declare class ContentMovieDto {
    title: string;
    thumbnail: string;
    publishAt: Date;
    quality: string;
}
export declare class ContentEpisodeDto extends ContentMovieDto {
    episodeNumber: number;
    series: string;
}
