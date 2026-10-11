export interface ProjectLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  stack: string[];
  cover: string;
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    slug: "doodlesite",
    name: "DoodleSite",
    tagline: "Sketch a layout, add a brief, get a working prototype.",
    summary:
      "A drawing sheet and a short written brief go to Claude together, so the model gets the spatial intent a text prompt cannot carry: where things sit, how big they are, what order they read in. It returns a self-contained page and an account of how it read every mark. Works with an Anthropic API key or the locally installed Claude Code CLI.",
    stack: ["React", "Vite", "TypeScript", "Express", "Claude API", "Claude Code CLI", "Playwright"],
    cover: "/projects/doodlesite/step-6-result.png",
    links: [
      { label: "Presentation", href: "/projects/doodlesite/showcase.html", external: true },
      { label: "Gallery", href: "/projects/doodlesite/gallery.html", external: true },
      { label: "GitHub (private)", href: "https://github.com/ablir/DoodleSite", external: true },
    ],
  },
  {
    slug: "ui-prototyper",
    name: "UI Prototyper",
    tagline: "AI Prototyping Studio: a presentation of a spec-driven React UI prototyping system.",
    summary:
      "An interactive presentation of an AI-driven React UI prototyping system. A Spec Explorer walks through the complete build-from-scratch specification file by file, with the real text on one side and a plain-English explanation on the other. A Usage Guide shows the system learning the Mantine library and building a banking portfolio dashboard from real components.",
    stack: ["React", "TypeScript", "Vite", "Mantine", "GitHub Pages"],
    cover: "/projects/ui-prototyper/cover.png",
    links: [
      { label: "Live presentation", href: "https://ablir.github.io/ui-prototyper/", external: true },
      { label: "GitHub", href: "https://github.com/ablir/ui-prototyper", external: true },
    ],
  },
];
