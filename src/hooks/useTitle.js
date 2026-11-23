import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Artify`;
  }, [title]);
};

export default useTitle;
