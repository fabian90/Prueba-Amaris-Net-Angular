export interface ApiResponse<T> {
    data: T;
    success: boolean;
    message: string;
    detail?: string;
    records?: RecordsResponse<T>;
  }
  
  export interface RecordsResponse<T> {
    items: T[];
    total: number;
    page: number;
    pages: number;
  }