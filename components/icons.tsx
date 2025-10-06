import React from 'react';

// Props for all icons
interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Bars3Icon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

export const XMarkIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const SunIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.106a.75.75 0 010 1.06l-1.591 1.591a.75.75 0 11-1.06-1.06l1.591-1.591a.75.75 0 011.06 0zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5h2.25a.75.75 0 01.75.75zM17.803 17.803a.75.75 0 01-1.06 0l-1.591-1.591a.75.75 0 111.06-1.06l1.591 1.591a.75.75 0 010 1.06zM12 21.75a.75.75 0 01-.75-.75v-2.25a.75.75 0 011.5 0V21a.75.75 0 01-.75-.75zM5.106 18.894a.75.75 0 010-1.06l1.591-1.591a.75.75 0 111.06 1.06l-1.591 1.591a.75.75 0 01-1.06 0zM3 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H3.75A.75.75 0 013 12zM6.106 5.106a.75.75 0 011.06 0l1.591 1.591a.75.75 0 11-1.06 1.06L5.106 6.167a.75.75 0 010-1.06z" />
    </svg>
);

export const MoonIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 004.463-.949a.75.75 0 01.819.162l.805.805a.75.75 0 01-.287 1.28A11.25 11.25 0 119.528 1.718z" clipRule="evenodd" />
    </svg>
);

export const ArrowUpIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
  </svg>
);

export const WrenchScrewdriverIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.52.935 1.421 1.633 2.496 1.954M11.42 15.17L5.877 21m5.543-5.877L5.877 21M15.75 3a2.652 2.652 0 00-4.386 2.062L3.75 12.25A2.25 2.25 0 003 14.25v1.5a2.25 2.25 0 002.25 2.25h1.5a2.25 2.25 0 002.062-1.114l8.88-8.88A2.652 2.652 0 0015.75 3z" />
  </svg>
);

export const PaintBrushIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.998 15.998 0 011.622-3.385m5.043.025a15.998 15.998 0 001.622-3.385m3.388 1.62a15.998 15.998 0 00-1.622-3.385m-5.043 5.043a15.998 15.998 0 01-3.388-1.62m7.5 0a48.01 48.01 0 00-7.5 0" />
  </svg>
);

export const SparklesIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 21.75l-.648-1.188a2.25 2.25 0 01-1.423-1.423L13.25 18l1.188-.648a2.25 2.25 0 011.423-1.423L16.25 15l.648 1.188a2.25 2.25 0 011.423 1.423L19.75 18l-1.188.648a2.25 2.25 0 01-1.423 1.423z" />
  </svg>
);

export const TruckIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 013.375-3.375h9.75a3.375 3.375 0 013.375 3.375v1.875m-17.25 4.5h14.25M6 13.5h12M6 10.5h4.5" />
  </svg>
);

export const CarIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375c-.621 0-1.125-.504-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 013.375-3.375h9.75a3.375 3.375 0 013.375 3.375v1.875m-17.25 4.5h14.25M6 13.5h12m.75-3l-3-3H9.75l-3 3" />
  </svg>
);

export const DocumentCheckIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const WrenchIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 4.5h12.75a.75.75 0 01.75.75v12.75a.75.75 0 01-.75-.75H2.25a.75.75 0 01-.75-.75V5.25a.75.75 0 01.75-.75z" />
  </svg>
);

export const ShieldCheckIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
    </svg>
);

export const BuildingStorefrontIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V3m0 0l-3.75 3.75M12 3l3.75 3.75M3 9h18M4.5 9v12m15-12v12m-6-12v12m-3-12v12m-3-12v12" />
    </svg>
);

export const UserGroupIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962c.56-.183 1.148-.344 1.767-.486m-1.767.486A3.75 3.75 0 0112 15.75c-2.071 0-3.75-1.679-3.75-3.75S9.929 8.25 12 8.25s3.75 1.679 3.75 3.75c0 .32-.043.633-.124.925m-3.124-.925A3.75 3.75 0 0012 15.75c.597 0 1.168-.138 1.693-.382m-1.693.382a3.75 3.75 0 01-3.386 0" />
    </svg>
);

export const MapPinIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

export const PhoneIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.211-.992-.55-1.33l-2.91-2.91a2.25 2.25 0 00-3.182 0l-1.17.585a1.125 1.125 0 01-1.341-.448 13.982 13.982 0 01-4.448-4.448 1.125 1.125 0 01.448-1.341l.585-1.17a2.25 2.25 0 000-3.182l-2.91-2.91A2.25 2.25 0 005.625 3.375H3.375A2.25 2.25 0 001.125 5.625v1.125z" />
  </svg>
);

export const ClockIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const ChatBubbleLeftRightIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.722.372c-1.07.107-2.13-.39-2.652-1.321V13.5c0-.97.616-1.812 1.5-2.097m6.49-3.682l-3.722.372c-1.07.107-2.13-.39-2.652-1.321V6.75c0-.97.616-1.812 1.5-2.097m6.49 3.682a2.25 2.25 0 01-2.25 2.25h-3.722c-1.07.107-2.13-.39-2.652-1.321V6.75c0-.97.616-1.812 1.5-2.097" />
    </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
);

const generateSpurGearPath = (
  cx: number,
  cy: number,
  teeth: number,
  outerRadius: number,
  rootRadius: number,
  holeRadius: number,
  twist: number = 0
): string => {
  const path: string[] = [];
  const sectionAngle = (2 * Math.PI) / teeth;
  const toothToSectionRatio = 0.6;
  const toothAngle = sectionAngle * toothToSectionRatio;
  const gapAngle = sectionAngle * (1 - toothToSectionRatio);
  const taperAngle = toothAngle * 0.15;

  for (let i = 0; i < teeth; i++) {
    const startAngle = i * sectionAngle + twist;
    const p1Angle = startAngle + gapAngle / 2;
    const p1x = cx + rootRadius * Math.cos(p1Angle);
    const p1y = cy + rootRadius * Math.sin(p1Angle);
    const p2Angle = p1Angle + taperAngle;
    const p2x = cx + outerRadius * Math.cos(p2Angle);
    const p2y = cy + outerRadius * Math.sin(p2Angle);
    const p3Angle = p2Angle + (toothAngle - 2 * taperAngle);
    const p3x = cx + outerRadius * Math.cos(p3Angle);
    const p3y = cy + outerRadius * Math.sin(p3Angle);
    const p4Angle = p1Angle + toothAngle;
    const p4x = cx + rootRadius * Math.cos(p4Angle);
    const p4y = cy + rootRadius * Math.sin(p4Angle);
    if (i === 0) {
      path.push(`M ${p1x.toFixed(3)} ${p1y.toFixed(3)}`);
    } else {
      path.push(`A ${rootRadius} ${rootRadius} 0 0 1 ${p1x.toFixed(3)} ${p1y.toFixed(3)}`);
    }
    path.push(`L ${p2x.toFixed(3)} ${p2y.toFixed(3)}`);
    path.push(`A ${outerRadius} ${outerRadius} 0 0 1 ${p3x.toFixed(3)} ${p3y.toFixed(3)}`);
    path.push(`L ${p4x.toFixed(3)} ${p4y.toFixed(3)}`);
  }
  
  const firstPointAngle = twist + gapAngle / 2;
  path.push(`A ${rootRadius} ${rootRadius} 0 0 1 ${cx + rootRadius * Math.cos(firstPointAngle)} ${cy + rootRadius * Math.sin(firstPointAngle)} Z`);
  const holePath = `M ${cx + holeRadius} ${cy} A ${holeRadius} ${holeRadius} 0 1 0 ${cx - holeRadius} ${cy} A ${holeRadius} ${holeRadius} 0 1 0 ${cx + holeRadius} ${cy} Z`;
  return `${path.join(' ')} ${holePath}`;
};

export const GearIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="currentColor" {...props}>
    <path
      d={generateSpurGearPath(18, 18, 10, 17.4, 12, 6)}
      fillRule="evenodd"
    />
  </svg>
);