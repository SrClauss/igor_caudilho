import { Font } from "@react-pdf/renderer";
Font.register({
    family: 'Roboto',
    fonts: [
      { src: '/fonts/Roboto-Black.ttf', fontWeight: 900 }, // Black
      { src: '/fonts/Roboto-BlackItalic.ttf', fontWeight: 900, fontStyle: 'italic' }, // Black Italic
      { src: '/fonts/Roboto-Bold.ttf', fontWeight: 'bold' }, // Bold
      { src: '/fonts/Roboto-BoldItalic.ttf', fontWeight: 'bold', fontStyle: 'italic' }, // Bold Italic
      { src: '/fonts/Roboto-Italic.ttf', fontStyle: 'italic' }, // Italic
      { src: '/fonts/Roboto-Light.ttf', fontWeight: 300 }, // Light
      { src: '/fonts/Roboto-LightItalic.ttf', fontWeight: 300, fontStyle: 'italic' }, // Light Italic
      { src: '/fonts/Roboto-Medium.ttf', fontWeight: 500 }, // Medium
      { src: '/fonts/Roboto-MediumItalic.ttf', fontWeight: 500, fontStyle: 'italic' }, // Medium Italic
      { src: '/fonts/Roboto-Regular.ttf' }, // Regular
      { src: '/fonts/Roboto-Thin.ttf', fontWeight: 100 }, // Thin
      { src: '/fonts/Roboto-ThinItalic.ttf', fontWeight: 100, fontStyle: 'italic' }, // Thin Italic
    ],
  });