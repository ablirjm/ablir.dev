import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { projects } from "./projectList";
import { Body, ProjectLayout, accent, bodyFont } from "./ProjectLayout";

export default function Projects() {
  return (
    <ProjectLayout>
      <Typography variant="h3" component="h1" sx={{ color: accent, mb: 1 }}>
        Projects
      </Typography>
      <Body sx={{ mb: 5 }}>Things I have built recently, each with a live page or a recorded walkthrough.</Body>

      <Stack spacing={5}>
        {projects.map((p) => (
          <Box
            key={p.slug}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "minmax(0, 5fr) minmax(0, 4fr)" },
              gap: { xs: 3, md: 5 },
              alignItems: "center",
              p: { xs: 2.5, md: 4 },
              border: "1px solid rgba(255,140,0,0.25)",
              borderRadius: 3,
              bgcolor: "#0b0b0b",
            }}
          >
            <Box
              component={RouterLink}
              to={`/projects/${p.slug}`}
              sx={{ display: "block", borderRadius: 2, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", bgcolor: "#111" }}
            >
              <Box
                component="img"
                src={p.cover}
                alt={`${p.name} screenshot`}
                loading="lazy"
                sx={{ width: "100%", aspectRatio: "16 / 10", objectFit: "cover", objectPosition: "top", display: "block" }}
              />
            </Box>
            <Box>
              <Typography variant="h4" component="h2" sx={{ color: accent, mb: 0.5 }}>
                {p.name}
              </Typography>
              <Typography sx={{ fontFamily: bodyFont, color: "#fff", fontSize: "1.1rem", mb: 1.5 }}>{p.tagline}</Typography>
              <Body sx={{ fontSize: "0.98rem", mb: 2 }}>{p.summary}</Body>
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 2.5 }}>
                {p.stack.map((s) => (
                  <Chip key={s} label={s} size="small" sx={{ bgcolor: "rgba(255,140,0,0.12)", color: accent, fontFamily: bodyFont }} />
                ))}
              </Stack>
              <Stack direction="row" spacing={1.5} useFlexGap flexWrap="wrap">
                <Button component={RouterLink} to={`/projects/${p.slug}`} variant="contained" sx={{ bgcolor: accent, color: "#000", fontFamily: bodyFont, fontWeight: 600, "&:hover": { bgcolor: "#ffa733" } }}>
                  Read more
                </Button>
                {p.links.map((l) => (
                  <Button
                    key={l.href}
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noreferrer" : undefined}
                    variant="outlined"
                    sx={{ borderColor: "rgba(255,140,0,0.5)", color: accent, fontFamily: bodyFont, "&:hover": { borderColor: accent, bgcolor: "rgba(255,140,0,0.08)" } }}
                  >
                    {l.label}
                  </Button>
                ))}
              </Stack>
            </Box>
          </Box>
        ))}
      </Stack>
    </ProjectLayout>
  );
}
