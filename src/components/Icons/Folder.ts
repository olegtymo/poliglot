import { IconProps } from './types';

export default function Folder({ width = '100%', height, className, fill }: IconProps) {
  return `
  <svg 
    version="1.1"  
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" 
    x="0px"
    y="0px"
    
    viewBox="0 0 48 48" 
    width="${width}" 
    // height="${height || width}" 
    ${fill ? `fill=${fill}` : ''}
    ${className ? `class=${className}` : ''}
  >
    <g>
      <path fill="#FFA000" d="M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z"/>
    </g>
    <g>
      <path fill="#FFCA28" d="M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z"/>
    </g>
    <circle fill="#43A047" cx="38" cy="38" r="10"/>
    <g>
      <rect x="36" y="32" fill="#FFFFFF" width="4" height="12"/>
      <rect x="32" y="36" fill="#FFFFFF" width="12" height="4"/>
    </g>
  </svg>
  `;
}
