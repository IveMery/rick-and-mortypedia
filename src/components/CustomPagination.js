import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { Box } from "@material-ui/core";

const CustomPagination = ({ setPage, numOfPage }) => {
  const handleChangePage = (e, pages) => {
    setPage(pages);
  };
  return (
    <Box display="flex" justifyContent="center" marginTop={4} marginBottom={2}>
      <Pagination
        count={numOfPage}
        color="secondary"
        onChange={handleChangePage}
      />
    </Box>
  );
};

export default CustomPagination;
