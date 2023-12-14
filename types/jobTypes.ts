export interface IJobSearchProps {
  queryTitle: string;
  titleSearchResults: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: (tagName: any) => void;
  tagState: any;
  tagInfo: any;
  jobs: [];
}
