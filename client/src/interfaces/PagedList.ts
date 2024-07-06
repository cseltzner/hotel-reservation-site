export interface PagedList<T> {
    totalCount: number;
    pageNumber: number;
    pageSize: number;
    data: T[];
}