import React, { memo } from "react";

interface Props {
  filePathList: string[];
}

const FilePath = memo(({ filePathList }: Props) => (
  <div style={{ color: "red" }}>
    aaa
    {filePathList.map((filePath, index) => (
      <div key={index}>{filePath}</div>
    ))}
  </div>
));

export default FilePath;
