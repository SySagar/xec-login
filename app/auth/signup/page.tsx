import { Stack, Typography, TextField, Button } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";

export default function SignUp() {
  return (
    <Stack
      border={2}
      sx={{
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        className="form"
        border={2}
        sx={{
          gap: 2,
          padding: 2,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "35%",
        }}
      >
        <Stack className="heading">
          <Typography variant="h4" fontWeight={"700"}>
            Hello!
          </Typography>
        </Stack>

        <Stack
          sx={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Divider
            sx={{
              flexGrow: 1,
              color: "#AAB2C8",
              borderBottomWidth: "2px",
            }}
          />
          <Typography
            variant="subtitle2"
            sx={{
              color: "#000022",
              opacity: 0.5,
              fontWeight: "700",
              whiteSpace: "nowrap",
            }}
          >
            Create Your Account
          </Typography>
          <Divider
            sx={{
              flexGrow: 1,
              color: "#AAB2C8",
              borderBottomWidth: "2px",
            }}
          />
        </Stack>

        <Stack
          width={"100%"}
          sx={{
            gap: 2,
            padding: 2,
            marginTop: 2,
          }}
        >
          <TextField
            id="firstName"
            label="First Name"
            variant="outlined"
            sx={{
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "8px",
            }}
          />
          <TextField
            id="lastName"
            label="Last Name"
            variant="outlined"
            sx={{
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "8px",
            }}
          />
          <TextField id="email" label="Email-id" variant="outlined" />
          <TextField id="password" label="Password" variant="outlined" />
          <TextField id="" label="Confirm Password" variant="outlined" />
        </Stack>

        <Button variant="contained" fullWidth>
          Sign Up
        </Button>
      </Stack>
    </Stack>
  );
}
