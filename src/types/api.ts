export type ApiResponseBase<T = any, E = string[]> = T | { errors: E };

export type RequestWithPagination<T> = T & {
  meta: {
    page: number;
    resultsPerPage: number;
  };
};

export type ResponseWithPagination<T, F = null> = T & {
  meta?: {
    requestedPage: number;
    totalPages: number;
    numberOfItems: number;
    filters: F | null;
  };
};
