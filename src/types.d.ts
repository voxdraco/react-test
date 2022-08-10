declare interface AccordionIcon {
  isOpen: boolean;
}

declare module '*.svg' {
  const content: string;
  export default content;
}
