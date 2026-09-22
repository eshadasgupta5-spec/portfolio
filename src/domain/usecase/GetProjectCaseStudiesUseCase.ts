import {
  ProjectTemplate,
  type ProjectCaseStudy,
} from '../entities/ProjectCaseStudy';

const CASE_STUDIES: ProjectCaseStudy[] = [
  {
    slug: 'doublecheck',
    template: ProjectTemplate.TemplateOne,
    title: 'Led positioning and GTM for a US fintech, DoubleCheck.',
    intro:
      'DoubleCheck had spent over 400,000 dollars across agencies with nothing measurable to show, and had run without a marketing function since 2023. Over the following year, it went from a stalled consumer product to BaaS Solution of the Year, on a new position, a new go-to-market, and the sales tools to sell it. I led that work end to end, in partnership with the founders.',
    meta: [
      { label: 'Category', value: 'Banking-as-a-service, United States' },
      { label: 'Scope', value: 'Positioning, Brand, GTM, Sales enablement, Content' },
      { label: 'Recognition', value: 'BaaS Solution of the Year, FinTech Breakthrough 2026' },
    ],
    sections: [
      {
        heading: 'A product built for compliance officers, sold to nobody.',
        body: [
          'DoubleCheck lets a bank or credit union customer decide for themselves what happens in a moment of insufficient funds, instead of the bank deciding for them. The messaging sold that as protection against regulatory and litigation risk, which spoke to a compliance officer and no one else. There was no B2B pipeline behind the consumer product, and the company had run without a content engine, a social presence, or any marketing function since 2023.',
          'The mandate was straightforward and large. Give DoubleCheck a position the market would respond to, and a way to reach the institutions that would actually buy it. Everything below followed from that.',
        ],
      },
      {
        eyebrow: 'Positioning and messaging',
        heading: 'Make the people want it, and the banks will have to listen.',
        body: [
          'The reposition started with a hard fact about the market. The buyer was the bank, but the pain belonged to its customers. Overdraft and NSF fees cost people in the US real money and stress, and most of them had no idea a tool like DoubleCheck even existed. Selling straight to banks meant arguing a feature into a procurement queue. There was a faster route.',
          'The campaign I built borrowed its logic from "I Want My MTV" in 1982, when a fledgling channel got reluctant cable operators to carry it by putting rock stars on air telling fans to phone their cable providers and demand it. The pressure came from the audience. I took the creative team down the same lane for DoubleCheck: build awareness among the people who feel the fees, show them a better option exists, and give them one thing to do about it. “Ask your bank for DoubleCheck.”',
          'So the messaging spoke to people first, not institutions. It named the moment everyone recognises, the surprise fee that lands at the worst time, and framed DoubleCheck as the thing their bank could give them if they asked. The brand line came straight out of that: Be the bank that listens.',
        ],
        image: {
          src: '/projects/doublecheck/traction.png',
          alt: 'Projected traction — mock Instagram comments from customers tagging their banks and asking for DoubleCheck.',
        },
      },
      {
        eyebrow: 'Sales enablement',
        heading:
          "The best thing a sales team can walk in with is a bank's own customers already asking for you by name.",
        body: [
          'The demand campaign produced thousands of signals. We built a demand dashboard that aggregates them by institution, so every tag and every request rolls up against the specific bank or credit union it names.',
          'That let the sales team open a conversation no cold pitch can match. Not "here is a product you might want," but " your own customers are already asking for this." Demand became a number on the table before a dollar of rollout was spent. It is the piece I am proudest of on this engagement, because it changed what the sales team was selling.',
        ],
        image: {
          src: '/projects/doublecheck/demand-dashboard.png',
          alt: 'Business Development internal dashboard sample, aggregating demand by institution.',
        },
      },
      {
        eyebrow: 'Market research',
        heading: 'How we pitched financial institutions',
        body: [
          'DoubleCheck sells to Banks and Credit Unions, two audiences that look alike but behave differently. Each got its own pitch deck, backed by research that sized the opportunity at roughly 8,800 institutions in the total market, 2,700 serviceable, and a focused first target of around 520.',
          'We included a 360-degree MDF package: tiered onboarding kits that gave every partner co-branded content, launch collateral, landing pages, and in-branch signage on day one. It made adoption feel like flipping a switch, and it opened a second revenue line for DoubleCheck alongside the per-transaction model.',
        ],
      },
      {
        eyebrow: 'Execution and proof',
        heading: 'The content earned a customer who volunteered.',
        body: [
          'The clearest signal that the positioning was landing came unprompted. Rishab Oberoi, who runs a BBQ restaurant in Los Angeles and banks with a DoubleCheck partner, offered on his own to go on camera for the founders and gave one of the strongest endorsements a B2B fintech can get.',
        ],
        stats: [
          { value: '89K+', label: 'Combined reach' },
          { value: '52K+', label: 'Engagement' },
          { value: '35K+', label: 'Video views' },
          { value: '$654', label: 'Total media spend' },
        ],
        image: {
          src: '/projects/doublecheck/testimonial.png',
          alt: 'Testimonial from Anne Lee, Interim CEO at DoubleCheck.',
        },
      },
      {
        eyebrow: 'Outcome',
        heading: 'Stalled to validated, in a year.',
        body: [
          'DoubleCheck won BaaS Solution of the Year at the FinTech Breakthrough Awards, and 14 credit union partners moved to expand the scope of what they run with it. A company with no marketing function at the start of the year was being cited as a validated player in its category by the end of it.',
          'The principle holds anywhere the buyer and the user are different people. Build demand on the side that feels the pain, and let it pull the sale through on the side that signs the cheque.',
        ],
        image: {
          src: '/projects/doublecheck/award.png',
          alt: 'DoubleCheck named BaaS Solution of the Year, FinTech Breakthrough Awards 2026.',
        },
      },
    ],
  },
];

export class GetProjectCaseStudiesUseCase {
  execute(): ProjectCaseStudy[] {
    return CASE_STUDIES;
  }

  getBySlug(slug: string): ProjectCaseStudy | undefined {
    return CASE_STUDIES.find((c) => c.slug === slug);
  }
}
