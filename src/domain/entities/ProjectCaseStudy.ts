/**
 * Reusable case-study model. Every project case study is described by this
 * same shape; a `template` enum selects which presentation component renders
 * it. Start with a single template (`TemplateOne`) — additional templates can
 * be added later and reuse this exact data contract.
 */
export const ProjectTemplate = {
  TemplateOne: 'templateOne',
} as const;

export type ProjectTemplate =
  (typeof ProjectTemplate)[keyof typeof ProjectTemplate];

export interface ProjectMeta {
  /** Uppercase label, e.g. "CATEGORY". */
  label: string;
  /** Its value, e.g. "Banking-as-a-service, United States". */
  value: string;
}

export interface ProjectStat {
  /** The headline figure, e.g. "89K+". */
  value: string;
  /** What it measures, e.g. "Combined reach". */
  label: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectSection {
  /** Small uppercase eyebrow above the heading, e.g. "POSITIONING AND MESSAGING". */
  eyebrow?: string;
  /** Section heading. */
  heading?: string;
  /** Body copy — one string per paragraph. */
  body?: string[];
  /** Optional row of headline stats. */
  stats?: ProjectStat[];
  /** Optional supporting image. */
  image?: ProjectImage;
}

export interface ProjectCaseStudy {
  /** URL slug — the route is `/projects/{slug}`. */
  slug: string;
  /** Which template renders this case study. */
  template: ProjectTemplate;
  /** Hero title. */
  title: string;
  /** Hero lead paragraph. */
  intro: string;
  /** Hero meta rows (category, scope, recognition, …). */
  meta: ProjectMeta[];
  /** Ordered body sections. */
  sections: ProjectSection[];
}
