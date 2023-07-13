import { Box, Rating, Typography } from "@mui/material"
import { useState } from "react"

function BasicRating() {
  const [value, setValue] = useState<number | null>(3.5)

  return (
    <Box>
      <Typography component='legend'>Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
      />
      <Typography component='legend'>Read only</Typography>
      <Rating name="read-only" value={value} readOnly />
      <Typography component='legend'>Disable</Typography>
      <Rating name="disabled" value={value} disabled />
      <Typography component='legend'>No rating given</Typography>
      <Rating name="no-value" value={null} />
      <Typography component='legend'>No rating given</Typography>
      <Rating
        name="custom-no-value"
        value={3.5}
        precision={0.1}
        sx={{ fontSize: '3rem' }}
      />
    </Box>
  )
}

export default BasicRating