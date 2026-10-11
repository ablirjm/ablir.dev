import type { ReactNode } from "react";
import { Box, Container, Typography } from "@mui/material";
import Navigation from "../Navigation";

export const accent = "#ff8c00";
export const accentDeep = "#CC5500";
export const bodyFont = '"Roboto", "Helvetica", "Arial", sans-serif';

export function ProjectLayout({ children }: { children: ReactNode }) {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "black", color: "rgba(255,255,255,0.87)", width: "100%" }}>
      <Navigation />
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 7 } }}>
        {children}
      </Container>
      <Box component="footer" sx={{ py: 4, textAlign: "center", color: "rgba(255,255,255,0.4)", fontFamily: bodyFont, fontSize: "0.85rem" }}>
        ablir.dev
      </Box>
    </Box>
  );
}

export function SectionTitle({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <Typography
      id={id}
      variant="h4"
      component="h2"
      sx={{ color: accent, mt: { xs: 6, md: 8 }, mb: 2, letterSpacing: "0.02em", scrollMarginTop: 80 }}
    >
      {children}
    </Typography>
  );
}

export function Body({ children, sx }: { children: ReactNode; sx?: object }) {
  return (
    <Typography
      variant="body1"
      sx={{ fontFamily: bodyFont, fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(255,255,255,0.8)", maxWidth: 760, ...sx }}
    >
      {children}
    </Typography>
  );
}
