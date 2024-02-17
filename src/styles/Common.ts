import { theme } from "./Theme";

type FontPropsType = {
  family?: string;
  weight?: number;
  color?: string;
  Fmin?: number;
  Fmax?: number;
};

export const font = ({ family, weight, color, Fmin, Fmax }: FontPropsType) => `
    
    font-family: ${family || "'Nunito', 'sans-serif'"};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.fontColor};
    font-size: clamp(${Fmin}px, calc((100vw - 360px) / (1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px), ${Fmax}px);
    `;
