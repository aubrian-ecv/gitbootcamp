import React from 'react';
import { createRoot } from 'react-dom/client';
import { Deck, DefaultTemplate, MarkdownSlideSet } from 'spectacle';
import mdContent from './slides.md';

const theme = {
  colors: {
    primary: "#000",
    secondary: "#638889",
    tertiary: "#F9EFDB"
  }
}

const Presentation = () => (
  <Deck theme={theme} template={() => <DefaultTemplate color='#638889' />}>
    <MarkdownSlideSet>{mdContent}</MarkdownSlideSet>
  </Deck>
);

createRoot(document.getElementById('app')!).render(<Presentation />);