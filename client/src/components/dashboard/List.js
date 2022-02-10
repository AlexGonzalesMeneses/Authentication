import React from "react";
import { Box } from "@mui/system";
import ShareIcon from "@mui/icons-material/Share";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import KeyIcon from "@mui/icons-material/Key";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PhoneIcon from "@mui/icons-material/Phone";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PersonIcon from "@mui/icons-material/Person";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
function List() {
  const namelist = "Key1";
  return (
    <Box sx={{ width: "80%", padding: "30px 0", margin: "auto" }}>
      <Box>
        <Box
          sx={{
            bgcolor: "white",
            borderRadius: "15px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "40px",
            mt: "10px",
            mb: "30px"
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              height: "100%",
              borderRadius: "12px",
              border: "1px solid #e0e0e0",
              padding: "0 10px",
            }}
          >
            {namelist || "Key 1"}
            <Box>
              <KeyIcon />
              <FavoriteBorderIcon sx={{ color: "secondary.dark" }} />
              <MoreHorizIcon sx={{ cursor: "pointer" }} />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            bgcolor: "white",
            borderRadius: "12px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "40px",
            mt: "10px",
            mb: "30px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              height: "100%",
              borderRadius: "12px",
              border: "1px solid #e0e0e0",
              padding: "0 10px",
            }}
          >
            {namelist || "Key 1"}
            <Box>
              <KeyIcon />
              <FavoriteBorderIcon sx={{ color: "secondary.dark" }} />
              <MoreHorizIcon sx={{ cursor: "pointer" }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default List;
