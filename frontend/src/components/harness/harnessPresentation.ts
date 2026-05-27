import claudeLogo from "../../assets/harness-logos/claude-code-logo.svg";
import claudeDesktopLogo from "../../assets/harness-logos/claude-desktop-logo.svg";
import codexLogo from "../../assets/harness-logos/codex-logo.svg";
import cursorLogo from "../../assets/harness-logos/cursor-logo.svg";
import openclawLogo from "../../assets/harness-logos/openclaw-logo.svg";
import opencodeLogo from "../../assets/harness-logos/opencode-logo.svg";
import qoderLogo from "../../assets/harness-logos/qoder-logo.svg";

export type HarnessLogoKey =
  | "claude"
  | "claude-desktop"
  | "codex"
  | "cursor"
  | "opencode"
  | "openclaw"
  | "qoder";

interface HarnessPresentation {
  logoSrc: string;
  variant: HarnessLogoKey;
}

const HARNESS_LOGO_ASSETS: Record<HarnessLogoKey, HarnessPresentation> = {
  claude: {
    logoSrc: claudeLogo,
    variant: "claude",
  },
  "claude-desktop": {
    logoSrc: claudeDesktopLogo,
    variant: "claude-desktop",
  },
  codex: {
    logoSrc: codexLogo,
    variant: "codex",
  },
  cursor: {
    logoSrc: cursorLogo,
    variant: "cursor",
  },
  opencode: {
    logoSrc: opencodeLogo,
    variant: "opencode",
  },
  openclaw: {
    logoSrc: openclawLogo,
    variant: "openclaw",
  },
  qoder: {
    logoSrc: qoderLogo,
    variant: "qoder",
  },
};

export function getHarnessPresentation(logoKey: string | null | undefined): HarnessPresentation | null {
  if (!logoKey) {
    return null;
  }
  return HARNESS_LOGO_ASSETS[logoKey as HarnessLogoKey] ?? null;
}
