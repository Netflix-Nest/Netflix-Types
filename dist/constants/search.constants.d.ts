export declare const MOVIE_INDEX = "movies";
export declare const MOVIE_INDEX_SETTINGS: {
    settings: {
        analysis: {
            filter: {
                edge_ngram_filter: {
                    type: string;
                    min_gram: number;
                    max_gram: number;
                };
            };
            analyzer: {
                autocomplete_analyzer: {
                    type: string;
                    tokenizer: string;
                    filter: string[];
                };
                autocomplete_search_analyzer: {
                    type: string;
                    tokenizer: string;
                    filter: string[];
                };
            };
        };
    };
    mappings: {
        properties: {
            id: {
                type: string;
            };
            slug: {
                type: string;
            };
            title: {
                type: string;
                analyzer: string;
                search_analyzer: string;
                fields: {
                    raw: {
                        type: string;
                    };
                };
            };
            title_suggest: {
                type: string;
            };
            description: {
                type: string;
            };
            thumbnail: {
                type: string;
            };
            genres: {
                type: string;
            };
            tags: {
                type: string;
            };
            actors: {
                type: string;
            };
            country: {
                type: string;
            };
            director: {
                type: string;
            };
            type: {
                type: string;
            };
            video: {
                type: string;
            };
            series: {
                type: string;
            };
            year: {
                type: string;
            };
            view: {
                type: string;
            };
            followers: {
                type: string;
            };
            publishAt: {
                type: string;
            };
            quality: {
                type: string;
            };
            totalScoreRating: {
                type: string;
            };
            ratingCount: {
                type: string;
            };
            likeCount: {
                type: string;
            };
            studio: {
                type: string;
            };
            season: {
                type: string;
            };
            trailer: {
                type: string;
            };
            ageRating: {
                type: string;
            };
            createdAt: {
                type: string;
            };
            updatedAt: {
                type: string;
            };
            deletedAt: {
                type: string;
            };
        };
    };
};
