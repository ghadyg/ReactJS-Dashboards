import { Typography,Box,useTheme, colors } from "@mui/material";
import { tokens } from "../theme";

import React from 'react'
import { palette } from "@mui/system";

export default function Header({title, subtitlte}) {
    const theme = useTheme();
   const  colors= tokens(theme.palette.mode);
  return (
    <Box mb="30px">
        <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{mb : "5px"}}>{title}</Typography>
        <Typography variant="h5" color={colors.greenAccent[400]} >{subtitlte}</Typography>

    </Box>
  )
}
