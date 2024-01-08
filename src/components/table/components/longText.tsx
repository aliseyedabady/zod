import React, { useState } from "react";
interface Props {
  text: string;
}
const LongText: React.FC<Props> = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  if (text) {
    return (
      <div>
        <p>
          {isExpanded ? text : text?.slice(0, 30)}
          {isExpanded || text?.length <= 30 ? null : "..."}
        </p>
        {text?.length > 30 && (
          <button className="text-xs  text-primary" onClick={toggleExpansion}>
            {!isExpanded ? "مشاهده بیشتر" : "مشاهده کمتر"}
          </button>
        )}
      </div>
    );
  }
  return (
    <div>
      <p className="text-center">ثبت نشده</p>
    </div>
  );
};

export default LongText;
