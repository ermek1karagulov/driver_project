import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

interface IProps {
  avatar: string | undefined;
}

export default function AvatarDrivers({ avatar }: IProps) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src={
          avatar ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi2JSYMZeY8ZVNNZ7LwgCXw3VSXGuxSLet2xAdFp6zDw&s"
        }
      />
    </Stack>
  );
}
