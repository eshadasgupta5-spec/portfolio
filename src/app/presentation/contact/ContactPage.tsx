import { useRef } from 'react';
import GetInTouch from '../../shared/components/GetInTouch';

export function ContactPage() {
  const dummyRef = useRef<HTMLDivElement>(null);

  return <GetInTouch contentRef={dummyRef} />
}
