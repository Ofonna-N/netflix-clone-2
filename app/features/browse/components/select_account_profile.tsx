import { ButtonBase, Typography, type ButtonBaseProps } from "@mui/material";
import type { ReactNode } from "react";

type Props = {
  ButtonBaseProps?: ButtonBaseProps;
  textProps: {
    label: string;
  };
  children?: ReactNode;
};

export default function SelectAccountProfile(props: Props) {
  const { sx, ...otherButtonBaseProps } = props.ButtonBaseProps ?? {};
  return (
    <ButtonBase
      sx={{
        position: "relative",
        width: {
          xs: "80px",
          sm: "100px",
          md: "130px",
          lg: "150px",
        },
        height: {
          xs: "80px",
          sm: "100px",
          md: "130px",
          lg: "150px",
        },
        ":hover": {
          outline: "3px solid #fff",
          borderRadius: 1,
          "& span": {
            opacity: 1,
          },
        },
        ...sx,
      }}
      {...otherButtonBaseProps}
    >
      {props.children}
      <Typography
        component={"span"}
        sx={{
          // backgroundColor: "green",
          position: "absolute",
          bottom: "-30px",
          left: "0",
          width: "100%",
          opacity: 0.5,
          fontSize: {
            xs: "0.65rem",
            sm: "0.8rem",
            md: "1rem",
          },
        }}
      >
        {props.textProps.label}
      </Typography>
    </ButtonBase>
  );
}
