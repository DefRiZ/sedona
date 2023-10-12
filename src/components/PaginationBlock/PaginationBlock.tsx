import { Pagination, Stack, createTheme } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { setCurrentPage } from "../../redux/slices/filterSlice";
import { useGetHotelsQuery } from "../../redux/hotelsApi";

const PaginationBlock = () => {
  const dispatch = useAppDispatch();
  const { apartmenType, range, currentPage, itemsPerPage } = useSelector(
    (state: RootState) => state.filter
  );

  const { data = [] } = useGetHotelsQuery({ apartmenType, range });
  const pageNumber = [];
  for (let i = 0; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <Stack>
      <Pagination
        count={pageNumber.length - 1}
        page={currentPage}
        shape="rounded"
        sx={{
          ".MuiButtonBase-root": {
            bgcolor: "#83B3D3",
            color: "white",
            width: "55px",
            height: "55px",
            fontSize: "20px",
          },
          ".Mui-selected": { bgcolor: "#F2F2F2", color: "black" },
        }}
        hideNextButton
        hidePrevButton
        onChange={(_, num) => dispatch(setCurrentPage(num))}
      />
    </Stack>
  );
};

export default PaginationBlock;
