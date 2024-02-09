export interface TagsList {
  course: {
    label: string;
    name: string;
  }[];
  topics: {
    label: string;
    name: string;
  }[];
  resource: {
    label: string;
    name: string;
  }[];
}

export interface PageHeader {
  title: string;
  description: string;
  tags: string[];
}
