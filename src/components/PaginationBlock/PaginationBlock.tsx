import { Pagination, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { setCurrentPage } from "../../redux/slices/filterSlice";
import { useGetHotelsQuery } from "../../redux/hotelsApi";
import { URLSearchParamsInit, useSearchParams } from "react-router-dom";

const PaginationBlock = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const { apartmenType, range, currentPage, itemsPerPage } = useSelector(
    (state: RootState) => state.filter
  );

  const { data = [] } = useGetHotelsQuery({ apartmenType, range });
  const pageNumber = [];
  for (let i = 0; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumber.push(i);
  }

  const handlePageChange = (newPage: number) => {
    const newSearchParams: URLSearchParamsInit = { page: newPage.toString() };
    setSearchParams(newSearchParams);
    dispatch(setCurrentPage(newPage));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
        onChange={(_, i) => handlePageChange(i)}
      />
    </Stack>
  );
};

export default PaginationBlock;
