import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

// Scattered fan — offsets + rotations only, all pivoting from center
const FAN_CARDS = [
  { rotation: -14, xOff: -28, yOff: 18 },
  { rotation: 11,  xOff: 32,  yOff: -22 },
  { rotation: -7,  xOff: -12, yOff: -6 },
  { rotation: 21,  xOff: 22,  yOff: 8 },
];

export function useHeroAnimation() {
  const wrapperRef   = useRef<HTMLDivElement>(null);
  const heroRef      = useRef<HTMLDivElement>(null);
  const fanAnchorRef = useRef<HTMLDivElement>(null);
  const gridSlotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs     = useRef<(HTMLDivElement | null)[]>([]);
  const seeAllRef    = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const wrapper   = wrapperRef.current;
    const hero      = heroRef.current;
    const fanAnchor = fanAnchorRef.current;
    const cards     = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    const slots     = gridSlotRefs.current.filter(Boolean) as HTMLDivElement[];

    if (!wrapper || !hero || !fanAnchor || cards.length < 4 || slots.length < 4) return;

    const firstSlot = slots[0].getBoundingClientRect();
    const CARD_W = firstSlot.width;
    const CARD_H = firstSlot.height;

    const wRect = wrapper.getBoundingClientRect();
    const fRect = fanAnchor.getBoundingClientRect();

    const fanCX = fRect.left - wRect.left + fRect.width / 2 - CARD_W / 2;
    const fanCY = fRect.top  - wRect.top  + fRect.height / 2 - CARD_H / 2;

    const slotPositions = slots.map((slot) => {
      const s = slot.getBoundingClientRect();
      return { x: s.left - wRect.left, y: s.top - wRect.top };
    });

    // Size cards and set a stable transform origin — never changes
    cards.forEach((card) => {
      gsap.set(card, {
        width: CARD_W,
        height: CARD_H,
        transformOrigin: 'center center',
      });
    });

    gsap.set(seeAllRef.current, { opacity: 0, y: 14 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    const infos = cards
      .map((card) => card.querySelector<HTMLElement>('[data-card-info]'))
      .filter(Boolean) as HTMLElement[];

    gsap.set(infos, { opacity: 0, y: 12 });

    // fromTo — GSAP owns both ends, no ambiguity on reverse
    cards.forEach((card, i) => {
      const fan = FAN_CARDS[i];

      tl.fromTo(card, {
        x: fanCX + fan.xOff,
        y: fanCY + fan.yOff,
        rotation: fan.rotation,
        scale: 0.62,
        opacity: 1,
        zIndex: cards.length - i,
      }, {
        x: slotPositions[i].x,
        y: slotPositions[i].y,
        rotation: 0,
        scale: 1,
        opacity: 1,
        zIndex: cards.length - i,
        ease: 'none',
        duration: 1,
      }, 0);
    });

    infos.forEach((info, i) => {
      tl.fromTo(info,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, ease: 'power2.out', duration: 0.25 },
        0.7 + i * 0.04
      );
    });

    tl.fromTo(seeAllRef.current,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.15, ease: 'none' },
      0.85
    );
  }, { scope: wrapperRef });

  return { wrapperRef, heroRef, fanAnchorRef, gridSlotRefs, cardRefs, seeAllRef };
}
