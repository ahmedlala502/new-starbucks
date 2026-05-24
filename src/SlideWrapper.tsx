import type { SlideCustomization } from './CustomizePanel';

interface SlideWrapperProps {
  children: React.ReactNode;
  customization?: SlideCustomization;
}

export default function SlideWrapper({ children, customization }: SlideWrapperProps) {
  if (!customization) {
    return <>{children}</>;
  }

  const {
    bgColor,
    bgGradientEnd,
    layout,
  } = customization;

  let backgroundStyle = '';
  if (layout === 'gradient' && bgGradientEnd) {
    backgroundStyle = `linear-gradient(135deg, ${bgColor} 0%, ${bgGradientEnd} 100%)`;
  } else {
    backgroundStyle = bgColor;
  }

  // Inject global CSS to override slide styles with high specificity
  const cssId = `slide-custom-${Math.random().toString(36).substr(2, 9)}`;
  const cssOverride = `
    .${cssId} {
      background: ${backgroundStyle} !important;
    }
    .${cssId} > div {
      background: ${backgroundStyle} !important;
    }
  `;

  return (
    <>
      <style>{cssOverride}</style>
      <div className={cssId} style={{ width: '100%', height: '100%', overflow: 'hidden', background: backgroundStyle }}>
        {children}
      </div>
    </>
  );
}
