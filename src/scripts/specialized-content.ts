export interface FaqItem {
  question: string;
  answer: string;
}

export const POOL_FAQS: readonly FaqItem[] = [
  {
    question: 'How do I calculate pool volume with a shallow end and deep end?',
    answer: 'Add the shallow depth to the deep-end depth and divide by 2 to get average depth. For example, depths of 3 ft and 8 ft produce an average depth of 5.5 ft.',
  },
  {
    question: 'Why is knowing exact pool volume important for chemicals?',
    answer: 'Pool chemicals are dosed by water volume. An inaccurate estimate can lead to under-treatment, poor water quality, over-treatment, swimmer discomfort, or equipment and liner damage.',
  },
  {
    question: 'How many gallons is a 12 × 24 ft pool?',
    answer: 'A 12 × 24 ft rectangular pool with an average depth of 4.5 ft holds approximately 9,696 US gallons. At a constant depth of 4 ft, it holds approximately 8,617 gallons.',
  },
  {
    question: 'How do I size a pool pump based on gallon capacity?',
    answer: 'For an eight-hour turnover, divide total pool gallons by 480 minutes to estimate the minimum gallons-per-minute flow rate. Account for plumbing resistance and manufacturer guidance when selecting equipment.',
  },
];

export const CUBIC_FEET_FAQS: readonly FaqItem[] = [
  {
    question: 'How do I convert inches to cubic feet?',
    answer: 'Multiply length, width, and height in inches, then divide the cubic-inch result by 1,728. For example, 24 × 18 × 12 inches equals 5,184 cubic inches, or 3 cubic feet.',
  },
  {
    question: 'How do I calculate concrete volume for a slab?',
    answer: 'Convert slab thickness to feet, multiply length by width by thickness to obtain cubic feet, then divide by 27 for cubic yards. Add an appropriate waste allowance before ordering.',
  },
  {
    question: 'How many cubic feet are in a cubic yard?',
    answer: 'There are exactly 27 cubic feet in one cubic yard because 3 ft × 3 ft × 3 ft equals 27 ft³.',
  },
  {
    question: 'How many cubic feet of mulch or soil do I need?',
    answer: 'Multiply bed length in feet by width in feet and depth in feet. For depth measured in inches, divide the inches by 12 first. A 10 × 12 ft bed at 3 inches deep requires 30 cubic feet, or about 1.11 cubic yards.',
  },
];
