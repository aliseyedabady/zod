import { useSearchParams } from "react-router-dom";

export const useQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getQueryParams = (url: any) => {
    const params = new URLSearchParams(url.search);
    const queryParams: any = {};

    for (let [key, value] of Array.from(params.entries())) {
      queryParams[key] = value;
    }

    return queryParams;
  };
  const changeObj = (key: string, value: string | number) => {
    if (value && value !== "") {
      searchParams.set(key, value.toString());
    } else {
      searchParams.delete(key);
    }
    setSearchParams(searchParams.toString());
  };
  const count = (url: any): number => {
    return new URL(url).searchParams.size;
  };
  const clear = (): void => {
    setSearchParams({});
  };
  return {
    getQueryParams,
    changeObj,
    searchParams,
    count,
    clear,
  };
};
