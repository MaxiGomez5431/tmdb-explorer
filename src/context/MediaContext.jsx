import { createContext, useContext } from "react";
import { useLocation } from "react-router";

const MediaContext = createContext();

export function MediaProvider({ children }) {
  const location = useLocation();

  const mediaType = location.pathname.includes("/movie") ? "movie" : "serie";

  return (
    <MediaContext.Provider value={mediaType}>
      {children}
    </MediaContext.Provider>
  );
}

export function useMediaType() {
  return useContext(MediaContext);
}
