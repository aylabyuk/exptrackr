import '../styles/globals.css';
import * as NextImage from 'next/image';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  previewTabs: {
    'storybook/docs/panel': { index: -1 },
  },
  viewport: {
    defaultViewport: 'iphoneSE',
    viewports: {
      iphone12: {
        name: 'iphone12 viewport',
        styles: {
          width: '390px',
          height: '844px'
        },
      },
      iphoneSE: {
        name: 'iphoneSE viewport',
        styles: {
          width: '375px',
          height: '667px'
        },
      }
    }
  }
};