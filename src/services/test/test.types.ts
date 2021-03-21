export interface TestResponse {
  checkout_path?: string;
  domain?: string;
  fetch_url?: string;
  groups?: string;
  platform_id?: number;
  project_id?: number;
  project_name?: string;
  project_path?: string;
  project_url?: string;
  revision?: string;
}

export interface TestParams {
  pageSize?: number;
  currentPage?: number;
  filter?: Record<string, any[]>;
  sorter?: Record<string, any>;
}