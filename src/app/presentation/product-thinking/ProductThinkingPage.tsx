import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import GetInTouch from '../../shared/components/GetInTouch';

gsap.registerPlugin(ScrollTrigger);

const POSTS = [
  {
    id: '1',
    title: 'Why most redesigns fail before they start',
    category: 'Process',
    date: 'Dec 2024',
    readTime: '6 min read',
    excerpt: 'The biggest mistake in redesigns isn\'t the design itself — it\'s the framing. Here\'s how to set up your next redesign project for success.',
  },
  {
    id: '2',
    title: 'Jobs-to-be-Done is not a framework, it\'s a mindset',
    category: 'Strategy',
    date: 'Nov 2024',
    readTime: '8 min read',
    excerpt: 'JTBD gets misapplied constantly. This is how I use it to cut through feature debates and get to the real problem every time.',
  },
  {
    id: '3',
    title: 'Designing for trust in FinTech',
    category: 'Case Study',
    date: 'Oct 2024',
    readTime: '10 min read',
    excerpt: 'How we took a 23% drop-off rate in onboarding to under 8% by rethinking every anxiety point in the user journey.',
  },
  {
    id: '4',
    title: 'The problem with "user-friendly"',
    category: 'Opinion',
    date: 'Sep 2024',
    readTime: '4 min read',
    excerpt: '"User-friendly" is a meaningless phrase. Here\'s a better vocabulary for talking about product quality that actually leads to decisions.',
  },
];

function PostCard({ post, index }: { post: typeof POSTS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        delay: index * 0.08,
        scrollTrigger: { trigger: el, start: 'top 88%' },
      }
    );
  }, { dependencies: [index] });

  return (
    <div
      ref={ref}
      className="group cursor-pointer py-8 border-b border-border-default last:border-0 hover:opacity-70 transition-opacity"
    >
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-surface-muted text-secondary uppercase tracking-wide">
              {post.category}
            </span>
            <span className="text-xs text-muted">{post.readTime}</span>
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-primary mb-2 tracking-tight">
            {post.title}
          </h3>
          <p className="text-sm text-secondary leading-relaxed max-w-xl">{post.excerpt}</p>
        </div>
        <div className="shrink-0 text-right">
          <p className="text-xs text-muted">{post.date}</p>
          <div className="mt-4 w-8 h-8 rounded-full border border-border-default flex items-center justify-center group-hover:border-primary transition-colors">
            <svg className="w-3.5 h-3.5 text-secondary group-hover:text-primary transition-colors" viewBox="0 0 14 14" fill="none">
              <path d="M1 7H13M7 1L13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductThinkingPage() {
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = headerRef.current;
    if (!el) return;
    gsap.fromTo(el, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' });
  });

  return (
    <>
      <div>
      <main className="min-h-screen pt-28">
        <div className="max-w-5xl mx-auto px-6">
          <div ref={headerRef} className="mb-14">
            <p className="text-xs font-medium text-muted tracking-widest uppercase mb-3">Writing</p>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-4">
              Product Thinking
            </h1>
            <p className="text-secondary text-lg max-w-lg leading-relaxed">
              Essays on design strategy, product craft, and building things people actually want.
            </p>
          </div>

          <div className="pb-24">
            {POSTS.map((post, i) => (
              <PostCard key={post.id} post={post} index={i} />
            ))}
          </div>
        </div>
      </main>
      </div>
      <GetInTouch />
    </>
  );
}
