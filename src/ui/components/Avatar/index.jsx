import * as React from "react";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { RadioAvatar, StyledBadge } from "./style";

export default function BadgeAvatars() {
  return (
    <RadioAvatar>
      <Stack direction="row">
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          variant="dot"
        >
          <Avatar alt="Lemy Sharp" src="assets/Base.jpg" />
        </StyledBadge>
      </Stack>
    </RadioAvatar>
  );
}
