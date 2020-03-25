import { css, ThemedCssFunction } from 'styled-components';

const sizes = {
  desktop: 1025,
  tablet: 1024,
  mobile: 768,
};

const sizeCheck = (label: string): string | undefined => {
  if (label === 'desktop') return `all and (min-width: ${sizes[label]}px)`;
  if (label === 'tablet')
    return `all and (min-width: ${sizes['mobile']}px) and (max-width: ${sizes[label]}px)`;
  if (label === 'mobile') return `all and (max-width: ${sizes[label]}px)`;
};

const media = (Object.keys(sizes) as (keyof typeof sizes)[]).reduce(
  (points, label) => {
    points[label] = (first: any, ...interpolations: any[]) => css`
      @media ${sizeCheck(label)} {
        ${css(first, ...interpolations)}
      }
    `;

    return points;
  },
  {} as { [key in keyof typeof sizes]: ThemedCssFunction<any> },
);

export default media;
