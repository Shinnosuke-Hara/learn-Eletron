import { useEffect, useRef, useState } from "react";
import "./App.css";
import FilePath from "./FilePath";

export const App = () => {
  const [count, setCount] = useState(0);
  const [filePathList, setFilePathList] = useState<string[]>([]);
  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    ref.current.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    ref.current.addEventListener("drop", (e) => {
      e.preventDefault();
      if (e.dataTransfer) {
        const files = e.dataTransfer.files;
        if (files.length > 0) {
          setFilePathList([]);
          for (let i = 0; i < files.length; i++) {
            setFilePathList((cur) => [...cur, files[i].path]);
          }
        }
      }
    });
  }, []);

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Count</button>
      <div
        id="dropZone"
        style={{ width: "200px", height: "200px", border: "1px solid black" }}
        ref={ref}
      >
        Drop files here
      </div>
      <FilePath filePathList={filePathList} />
    </div>
  );
};
