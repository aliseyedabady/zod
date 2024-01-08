import React from "react";
import { Header } from "../../../types/table";
// import { Select } from "antd";
import { useQuery } from "../../../hooks/useQuery";
interface Props {
  head: Header;
}
const SelectHead = ({ head }: Props) => {
  const { changeObj } = useQuery();
  return <></>;
};

export default SelectHead;
