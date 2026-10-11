import { Box, Button, Stack, Typography } from "@mui/material";
import { Body, ProjectLayout, SectionTitle, accent, bodyFont } from "./ProjectLayout";

const base = "/projects/doodlesite";

const steps = [
  {
    title: "Draw the layout on the sheet",
    text: "Boxes are components or sections; a word inside names them. Lines are text, a crossed box is an image, a circle is an avatar or icon. Switch to the red ink for a note to the model that should not appear on the page. A photo of a paper sketch can be dropped in instead and is cleaned up automatically.",
    image: `${base}/step-2-sketch.png`,
  },
  {
    title: "Write a short brief",
    text: "What it is, who it is for, and anything the sketch cannot say: names, tone, what the button does. The brief wins where it disagrees with the sketch; the sketch decides placement where the brief is silent.",
    image: `${base}/step-3-brief.png`,
  },
  {
    title: "Build, and watch the page arrive",
    text: "The sketch and brief go to Claude, through an API key or the local Claude Code CLI. The code view fills in as the model writes; the preview renders as soon as there is a body.",
    image: `${base}/step-5-streaming.png`,
  },
  {
    title: "Check the result at any width",
    text: "Every build lands as a version. Preview it at phone, tablet, or full width, copy or download the HTML, or open it in its own tab.",
    image: `${base}/step-6-result.png`,
  },
  {
    title: "Read how the model read you",
    text: "The Reading tab lists every mark it found, where it sat, what it became, the gaps it filled, any marks it was unsure about, and any motion instructions it picked up.",
    image: `${base}/step-8-reading.png`,
  },
  {
    title: "Refine in rounds",
    text: "Write the next brief and refine from any version. The model applies it as a change to the previous result and reports exactly what it altered.",
    image: `${base}/step-9-refine.png`,
  },
];

export default function DoodleSitePage() {
  return (
    <ProjectLayout>
      <Typography variant="h3" component="h1" sx={{ color: accent, mb: 1 }}>
        DoodleSite
      </Typography>
      <Typography sx={{ fontFamily: bodyFont, color: "#fff", fontSize: "1.25rem", mb: 2 }}>
        Sketch a layout, add a brief, get a working prototype.
      </Typography>
      <Body sx={{ mb: 3 }}>
        Text prompts are bad at placement. A rough doodle carries where things sit, how big they are, and the order they read in; a
        one-line brief fills in what a sketch cannot say. DoodleSite sends both to Claude and gets back a self-contained HTML page,
        plus the model's own account of how it read every mark. It can also take an existing site and adjust it to match a sketch.
      </Body>
      <Stack direction="row" spacing={1.5} useFlexGap flexWrap="wrap" sx={{ mb: 5 }}>
        <Button href={`${base}/showcase.html`} target="_blank" rel="noreferrer" variant="contained" sx={{ bgcolor: accent, color: "#000", fontWeight: 600, fontFamily: bodyFont, "&:hover": { bgcolor: "#ffa733" } }}>
          Open the presentation
        </Button>
        <Button href={`${base}/doodlesite-blueprint.zip`} variant="outlined" sx={{ borderColor: "rgba(255,140,0,0.5)", color: accent, fontFamily: bodyFont }}>
          Blueprint (.zip)
        </Button>
        <Button href="#demo" variant="outlined" sx={{ borderColor: "rgba(255,140,0,0.5)", color: accent, fontFamily: bodyFont }}>
          Watch the demo
        </Button>
        <Button href="https://github.com/ablir/DoodleSite" target="_blank" rel="noreferrer" variant="outlined" sx={{ borderColor: "rgba(255,140,0,0.5)", color: accent, fontFamily: bodyFont }}>
          GitHub (private)
        </Button>
      </Stack>

      <SectionTitle id="demo">Demo</SectionTitle>
      <Body sx={{ mb: 2 }}>
        A real session, recorded end to end: drawing a landing page for a hiking-tour company, briefing it, building through the local
        Claude Code CLI, and touring the result. The wait for the model is sped up; nothing else is edited.
      </Body>
      <Box
        component="video"
        controls
        preload="metadata"
        playsInline
        poster={`${base}/step-6-result.png`}
        sx={{ width: "100%", maxWidth: 1100, borderRadius: 2, border: "1px solid rgba(255,140,0,0.25)", bgcolor: "#000", display: "block" }}
      >
        <source src={`${base}/demo.webm`} type="video/webm" />
        Your browser cannot play this video. <a href={`${base}/demo.webm`}>Download it</a> instead.
      </Box>

      <SectionTitle id="how-to">How to use it</SectionTitle>
      <Stack spacing={5} sx={{ mt: 3 }}>
        {steps.map((s, i) => (
          <Box
            key={s.title}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "minmax(0, 2fr) minmax(0, 3fr)" },
              gap: { xs: 2, md: 4 },
              alignItems: "start",
            }}
          >
            <Box>
              <Typography variant="h5" component="h3" sx={{ color: "#fff", mb: 1 }}>
                <Box component="span" sx={{ color: accent, mr: 1.5 }}>
                  {i + 1}
                </Box>
                {s.title}
              </Typography>
              <Body sx={{ fontSize: "0.98rem" }}>{s.text}</Body>
            </Box>
            <Box
              component="img"
              src={s.image}
              alt={s.title}
              loading="lazy"
              sx={{ width: "100%", borderRadius: 2, border: "1px solid rgba(255,255,255,0.12)", display: "block", bgcolor: "#111" }}
            />
          </Box>
        ))}
      </Stack>

      <SectionTitle id="under-the-hood">Under the hood</SectionTitle>
      <Body>
        Two backends, chosen per request: the Anthropic API with a key, or the Claude Code CLI already installed and logged in on the
        machine, driven in print mode with the sketch saved to a temp file. The system prompt is assembled from Markdown modules: how to
        read marks, how to read rough or photographed sketches, how to identify animation instructions, and separate rules for creating
        a page, adjusting an existing site, and refining a previous result.
      </Body>
      <Body sx={{ mt: 2 }}>
        A scenario suite runs hand-drawn wireframes through the real pipeline and checks the output: a complete document, every in-page
        link resolving, no external scripts, motion that respects reduced-motion, and per-scenario expectations such as a moved section
        or a deleted mark. The showcase below is generated from those runs.
      </Body>

      <SectionTitle id="showcase">Presentation</SectionTitle>
      <Body sx={{ mb: 2 }}>
        The system presented in three parts: an overview of how it works and its two back-ends, a blueprint explorer that shows the
        real prompt modules, assembler, providers, checks, and project skills with a plain-English pane beside each file, and the usage
        guide with the recorded session and one worked example. The six generated pages from the scenario suite are in a separate{" "}
        <a href={`${base}/gallery.html`} target="_blank" rel="noreferrer" style={{ color: accent }}>
          gallery
        </a>
        .{" "}
        <a href={`${base}/showcase.html`} target="_blank" rel="noreferrer" style={{ color: accent }}>
          Open the presentation full size
        </a>
        .
      </Body>
      <Box
        component="iframe"
        src={`${base}/showcase.html`}
        title="DoodleSite showcase"
        loading="lazy"
        sx={{ width: "100%", height: { xs: 640, md: 900 }, border: "1px solid rgba(255,140,0,0.25)", borderRadius: 2, bgcolor: "#f2f3ef", display: "block" }}
      />
    </ProjectLayout>
  );
}
