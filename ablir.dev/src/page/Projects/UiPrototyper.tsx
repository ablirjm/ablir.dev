import { Box, Button, Stack, Typography } from "@mui/material";
import { Body, ProjectLayout, SectionTitle, accent, bodyFont } from "./ProjectLayout";

const live = "https://ablir.github.io/ui-prototyper/";
const repo = "https://github.com/ablir/ui-prototyper";

const parts = [
  {
    title: "Spec Explorer",
    text: "Browse the complete build-from-scratch specification file by file, with the real text on one side and a plain-English explanation on the other. The specification is what the AI engine is built from; the engine itself stays outside this repository.",
  },
  {
    title: "Usage Guide",
    text: "A walkthrough of the system learning the Mantine component library and then building a Banking Portfolio, Client Assets dashboard from real Mantine components, with a true Playwright screenshot of the rendered result at each stage.",
  },
  {
    title: "The north star",
    text: "The engine never hardcodes a single library's components, data, colours, or theme. It learns each library at runtime and reasons over the profile it shelved, so the same pipeline works for Ant Design, MUI, Mantine, or an in-house library.",
  },
];

const steps = [
  { name: "Analyze", text: "An AI reads the library's source and types, then shelves a structured profile plus a human-readable reference." },
  { name: "Select", text: "Given a prompt, the AI gauges which components fit, and honestly flags what the library cannot do." },
  { name: "Generate", text: "The AI writes real .tsx using only that library; every imported symbol is audited against the profile." },
  { name: "Render", text: "A non-AI step bundles the real installed library with Vite and captures a true Playwright screenshot." },
];

export default function UiPrototyperPage() {
  return (
    <ProjectLayout>
      <Typography variant="h3" component="h1" sx={{ color: accent, mb: 1 }}>
        UI Prototyper
      </Typography>
      <Typography sx={{ fontFamily: bodyFont, color: "#fff", fontSize: "1.25rem", mb: 2 }}>
        Point at any React UI library. Describe a screen. Get real code and a true screenshot.
      </Typography>
      <Body sx={{ mb: 3 }}>
        AI Prototyping Studio is an interactive walkthrough of an AI-driven, library-agnostic prototyping system. It documents the
        system from two angles: the build-from-scratch specification it is built from, and a real run that turns Mantine plus a
        prompt into a working, screenshotted dashboard. Built with React, TypeScript, Vite, and Mantine, deployed to GitHub Pages
        from a workflow in the repository.
      </Body>
      <Stack direction="row" spacing={1.5} useFlexGap flexWrap="wrap" sx={{ mb: 5 }}>
        <Button href={live} target="_blank" rel="noreferrer" variant="contained" sx={{ bgcolor: accent, color: "#000", fontWeight: 600, fontFamily: bodyFont, "&:hover": { bgcolor: "#ffa733" } }}>
          Open the live presentation
        </Button>
        <Button href={repo} target="_blank" rel="noreferrer" variant="outlined" sx={{ borderColor: "rgba(255,140,0,0.5)", color: accent, fontFamily: bodyFont }}>
          GitHub
        </Button>
      </Stack>

      <SectionTitle id="what-is-inside">What is inside</SectionTitle>
      <Stack spacing={3} sx={{ mt: 2, maxWidth: 760 }}>
        {parts.map((p) => (
          <Box key={p.title}>
            <Typography variant="h5" component="h3" sx={{ color: "#fff", mb: 0.5 }}>
              {p.title}
            </Typography>
            <Body sx={{ fontSize: "0.98rem" }}>{p.text}</Body>
          </Box>
        ))}
      </Stack>

      <SectionTitle id="how-it-works">How it works</SectionTitle>
      <Body sx={{ mb: 2 }}>Three AI hooks plus one real render. Two artifacts every time: the code and the screenshot.</Body>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: 2, mb: 2 }}>
        {steps.map((s, i) => (
          <Box key={s.name} sx={{ p: 2.5, border: "1px solid rgba(255,140,0,0.25)", borderRadius: 2, bgcolor: "#0b0b0b" }}>
            <Typography variant="h6" component="h3" sx={{ color: "#fff", mb: 1 }}>
              <Box component="span" sx={{ color: accent, mr: 1 }}>
                {i + 1}
              </Box>
              {s.name}
            </Typography>
            <Body sx={{ fontSize: "0.92rem" }}>{s.text}</Body>
          </Box>
        ))}
      </Box>

      <SectionTitle id="run-it">Run it locally</SectionTitle>
      <Box
        component="pre"
        sx={{
          fontFamily: "ui-monospace, Consolas, monospace",
          fontSize: "0.9rem",
          bgcolor: "#0b0b0b",
          border: "1px solid rgba(255,140,0,0.25)",
          borderRadius: 2,
          p: 2.5,
          color: "rgba(255,255,255,0.85)",
          overflowX: "auto",
          maxWidth: 760,
        }}
      >
        {`git clone ${repo}.git
cd ui-prototyper
npm install
npm run dev      # http://localhost:5173`}
      </Box>

      <SectionTitle id="live">Live</SectionTitle>
      <Body sx={{ mb: 2 }}>
        The presentation, embedded from GitHub Pages.{" "}
        <a href={live} target="_blank" rel="noreferrer" style={{ color: accent }}>
          Open it in its own tab
        </a>
        .
      </Body>
      <Box
        component="iframe"
        src={live}
        title="UI Prototyper live presentation"
        loading="lazy"
        sx={{ width: "100%", height: { xs: 640, md: 900 }, border: "1px solid rgba(255,140,0,0.25)", borderRadius: 2, bgcolor: "#fff", display: "block" }}
      />
    </ProjectLayout>
  );
}
