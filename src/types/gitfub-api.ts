export interface ContentData {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: null | string;
  type: string;
  _links: {
    self: string;
    git: string;
    html: string;
  };
}
