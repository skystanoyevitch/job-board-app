export interface IJobSearchProps {
    queryParams: string;
    setQueryParams: React.Dispatch<React.SetStateAction<string>>;
    handleChange: (e: any) => void;
  }