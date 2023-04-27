import useMediaQuery from "@mui/material/useMediaQuery";
import { ReactNode, createContext, useContext } from "react";

interface iProps {
  children: ReactNode;
}

interface iContextProvider {
  matches500: boolean;
  matches700: boolean;
  matches900: boolean;
  matches1200: boolean;
  minMatches500: boolean;
  minMatches700: boolean;
  minMatches900: boolean;
  minMatches1200: boolean;
}

const MediaContext = createContext({} as iContextProvider);

export const useMediaContext = () => {
  return useContext(MediaContext);
};

export const MediaProvider = ({ children }: iProps) => {
  const matches500 = useMediaQuery("(max-width:500px)");
  const matches700 = useMediaQuery("(max-width:700px)");
  const matches900 = useMediaQuery("(max-width:900px)");
  const matches1200 = useMediaQuery("(max-width:1200px)");
  const minMatches500 = useMediaQuery("(min-width:500px)");
  const minMatches700 = useMediaQuery("(min-width:700px)");
  const minMatches900 = useMediaQuery("(min-width:900px)");
  const minMatches1200 = useMediaQuery("(min-width:1200px)");

  return (
    <MediaContext.Provider
      value={{
        matches500,
        matches700,
        matches900,
        matches1200,
        minMatches500,
        minMatches700,
        minMatches900,
        minMatches1200,
      }}
    >
      {children}
    </MediaContext.Provider>
  );
};
