// Vector SVGs for clean, professional, Notion-style UI
export const ICONS: Record<string, string> = {
  // Primary Shapes
  box: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
  
  cylinder: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><ellipse cx="12" cy="5" rx="8" ry="3"></ellipse><path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5"></path></svg>`,
  
  sphere: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><circle cx="12" cy="12" r="9"></circle><path d="M12 3a14 14 0 0 0 0 18"></path><path d="M12 3a14 14 0 0 1 0 18"></path><line x1="3" y1="12" x2="21" y2="12"></line></svg>`,
  
  cube: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M21 16.5V7.5L12 2L3 7.5V16.5L12 22L21 16.5Z"></path><path d="M3 7.5L12 13L21 7.5"></path><path d="M12 13V22"></path></svg>`,
  
  cone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="m12 2-8 17c0 1.66 3.58 3 8 3s8-1.34 8-3L12 2z"></path><ellipse cx="12" cy="19" rx="8" ry="3"></ellipse></svg>`,
  
  // Everyday real-world items
  can: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><rect x="6" y="3" width="12" height="18" rx="3"></rect><line x1="6" y1="7" x2="18" y2="7"></line><line x1="6" y1="17" x2="18" y2="17"></line></svg>`,
  
  drum: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><ellipse cx="12" cy="4" rx="7" ry="2.5"></ellipse><path d="M5 4v16c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5V4"></path><path d="M5 10c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5"></path><path d="M5 15c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5"></path></svg>`,
  
  container: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="6" y1="5" x2="6" y2="19"></line><line x1="10" y1="5" x2="10" y2="19"></line><line x1="14" y1="5" x2="14" y2="19"></line><line x1="18" y1="5" x2="18" y2="19"></line></svg>`,
  
  pool: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M2 12c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0 3-1 4.5 0 3 1 4 0"></path><path d="M2 17c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0 3-1 4.5 0 3 1 4 0"></path><path d="M2 7c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0 3-1 4.5 0 3 1 4 0"></path></svg>`,
  
  bucket: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="m5 7 2 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l2-13"></path><ellipse cx="12" cy="7" rx="7" ry="3"></ellipse><path d="M5 7a7 7 0 0 1 14 0"></path></svg>`,
  
  fuel: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><ellipse cx="7" cy="12" rx="4" ry="7"></ellipse><path d="M7 5h10c2.2 0 4 3.13 4 7s-1.8 7-4 7H7"></path><line x1="3" y1="12" x2="21" y2="12" stroke-dasharray="2 2"></line></svg>`,
  
  ball: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><circle cx="12" cy="12" r="9"></circle><path d="M12 3a9 9 0 0 0 0 18"></path><path d="M3 12a9 9 0 0 0 18 0"></path></svg>`,
  
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><circle cx="12" cy="12" r="9"></circle><path d="M12 3c-3 4-4.5 7-4.5 9s1.5 5 4.5 9"></path><path d="M12 3c3 4 4.5 7 4.5 9s-1.5 5-4.5 9"></path><line x1="3" y1="12" x2="21" y2="12"></line></svg>`,
  
  mug: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="2" x2="6" y2="4"></line><line x1="10" y1="2" x2="10" y2="4"></line><line x1="14" y1="2" x2="14" y2="4"></line></svg>`,
  
  bathtub: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M2 12h20"></path><path d="M4 12v5a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-5"></path><path d="M6 12V7a2 2 0 0 1 2-2h2"></path><circle cx="10" cy="5" r="1"></circle><line x1="6" y1="20" x2="6" y2="22"></line><line x1="18" y1="20" x2="18" y2="22"></line></svg>`,
  
  hottub: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><circle cx="12" cy="12" r="9"></circle><path d="M8 9c0-1 1-2 1-2"></path><path d="M12 8c0-1 1-2 1-2"></path><path d="M16 9c0-1 1-2 1-2"></path><path d="M7 15c2.5 1 7.5 1 10 0"></path></svg>`,

  milk: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M8 2h8v3H8z"></path><path d="M6 7h12l1 14H5L6 7z"></path><line x1="9" y1="11" x2="15" y2="11"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>`,

  // UI Icons
  lightning: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
  
  ruler: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M21.3 8.7 8.7 21.3a2 2 0 0 1-2.8 0L2.7 18.1a2 2 0 0 1 0-2.8L15.3 2.7a2 2 0 0 1 2.8 0l3.2 3.2a2 2 0 0 1 0 2.8z"></path><line x1="7.5" y1="10.5" x2="9" y2="12"></line><line x1="10.5" y1="7.5" x2="12" y2="9"></line><line x1="13.5" y1="4.5" x2="15" y2="6"></line></svg>`,

  book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,

  help: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,

  layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,

  refresh: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M21.5 2v6h-6"></path><path d="M2.5 22v-6h6"></path><path d="M2 11.5a10 10 0 0 1 18.8-4.3L21.5 8"></path><path d="M22 12.5a10 10 0 0 1-18.8 4.2L2.5 16"></path></svg>`,

  mobile: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`,

  kitchen: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M18 2v20"></path><path d="M6 2v20"></path><path d="M6 8h12"></path><path d="M6 14h12"></path></svg>`,

  truck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>`,

  scale: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`,
};
