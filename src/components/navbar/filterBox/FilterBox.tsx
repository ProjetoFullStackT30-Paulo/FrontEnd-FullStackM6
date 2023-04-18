import { Box, Stack } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { StyledOptions } from "./style";

interface iProps {
  title: string;
  options: Array<string>;
}

const FilterBox = ({ title, options }: iProps) => {
  const matches900 = useMediaQuery(`(min-width:900px)`);
  return (
    <Box>
      <h6 className={matches900 ? "heading4-600" : "heading6-600"}>{title}</h6>
      <Stack
        sx={{
          m: 1,
          mb: 2,
          mt: 2,
        }}
        spacing={1}
      >
        {options.map((value, i) => (
          <StyledOptions
            className={matches900 ? "heading6-600" : "heading7-600"}
            key={i}
          >
            {value}
          </StyledOptions>
        ))}
      </Stack>
    </Box>
  );
};

export default FilterBox;
