import React from "react";
interface Props {
  children: React.ReactNode;
  title: string;
}
const FormLayout = ({ children, title }: Props) => {
  return (
    <div className="rounded-[7px] form-layout-box-shadow mt-4">
      <div className="flex p-[30px]">
        <h4 className="text-lg font-semibold text-text">{title}</h4>
      </div>
      <div className="bg-borderSidebar h-[1px]"></div>

      <div className="p-4">{children}</div>
    </div>
  );
};

export default FormLayout;
