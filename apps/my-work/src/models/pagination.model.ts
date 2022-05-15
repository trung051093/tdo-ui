export type PaginationRequest = {
    page?: number;
    limit?: number;
}

export type PaginationReponse = {
    pagination: {
        page: number;
        limit: number;
        total: number;
        offset: number;
    }
}