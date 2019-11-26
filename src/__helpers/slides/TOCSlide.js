import React, { useEffect, useState } from 'react';
import { Slide } from 'spectacle';
import { Footer } from './Footer';
import { Header } from './Header';

export const getTOCSlide = ({ noLinks } = {}) => {
  const slide = (
    <Slide>
      <Header text="Agenda" />
      <TOCContentLoader slide={() => slide} noLinks={noLinks} />
      <Footer />
    </Slide>
  );
  return slide;
};

function TOCContentLoader({ slide, noLinks }) {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    import('./TOCSlideContent').then(module => {
      setComponent(() => module.TOCSlideContent);
    });
  }, []);

  if (!Component) return null;
  return <Component slide={slide} noLinks={noLinks} />;
}
