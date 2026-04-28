export const COLORS = [
  { name: 'Red', value: '#FF4136' },
  { name: 'Orange', value: '#FF851B' },
  { name: 'Yellow', value: '#FFDC00' },
  { name: 'Green', value: '#2ECC40' },
  { name: 'Blue', value: '#0074D9' },
  { name: 'Pink', value: '#F012BE' },
  { name: 'Purple', value: '#B10DC9' },
  { name: 'Cyan', value: '#7FDBFF' },
  { name: 'Lime', value: '#01FF70' },
  { name: 'Brown', value: '#85144b' },
  { name: 'Black', value: '#111111' },
  { name: 'White', value: '#FFFFFF' },
];

export interface ColoringPageData {
  id: string;
  name: string;
  areas: { id: string; d: string; label: string }[];
}

export const COLORING_PAGES: ColoringPageData[] = [
  {
    id: 'butterfly',
    name: 'Butterfly',
    areas: [
      { id: 'wing-left-top', d: 'M150 200 C 50 150, 20 250, 150 350 Z', label: 'Left Upper Wing' },
      { id: 'wing-left-bottom', d: 'M150 350 C 50 450, 80 500, 150 450 Z', label: 'Left Lower Wing' },
      { id: 'wing-right-top', d: 'M150 200 C 250 150, 280 250, 150 350 Z', label: 'Right Upper Wing' },
      { id: 'wing-right-bottom', d: 'M150 350 C 250 450, 220 500, 150 450 Z', label: 'Right Lower Wing' },
      { id: 'body', d: 'M140 180 Q 150 150 160 180 L 160 480 Q 150 510 140 480 Z', label: 'Body' },
      { id: 'antenna-left', d: 'M145 180 Q 130 140 110 150', label: 'Left Antenna' },
      { id: 'antenna-right', d: 'M155 180 Q 170 140 190 150', label: 'Right Antenna' },
    ],
  },
  {
    id: 'flower',
    name: 'Flower',
    areas: [
      { id: 'petal-1', d: 'M250 250 Q 250 150 300 200 Q 350 250 250 250', label: 'Petal' },
      { id: 'petal-2', d: 'M250 250 Q 350 250 300 300 Q 250 350 250 250', label: 'Petal' },
      { id: 'petal-3', d: 'M250 250 Q 250 350 200 300 Q 150 250 250 250', label: 'Petal' },
      { id: 'petal-4', d: 'M250 250 Q 150 250 200 200 Q 250 150 250 250', label: 'Petal' },
      { id: 'center', d: 'M250 250 m -30, 0 a 30,30 0 1,0 60,0 a 30,30 0 1,0 -60,0', label: 'Center' },
      { id: 'stem', d: 'M250 280 L 250 450 T 250 480', label: 'Stem' },
      { id: 'leaf', d: 'M250 380 Q 300 350 320 400 Q 280 420 250 380', label: 'Leaf' },
    ],
  },
  {
    id: 'house',
    name: 'Sweet Home',
    areas: [
      { id: 'roof', d: 'M100 250 L 250 100 L 400 250 Z', label: 'Roof' },
      { id: 'walls', d: 'M120 250 L 380 250 L 380 450 L 120 450 Z', label: 'Walls' },
      { id: 'door', d: 'M220 450 L 220 350 L 280 350 L 280 450 Z', label: 'Door' },
      { id: 'window', d: 'M150 280 L 200 280 L 200 330 L 150 330 Z', label: 'Window' },
      { id: 'sun', d: 'M400 80 m -40, 0 a 40,40 0 1,0 80,0 a 40,40 0 1,0 -80,0', label: 'Sun' },
    ],
  },
  {
    id: 'bear',
    name: 'Teddy Bear',
    areas: [
      { id: 'head', d: 'M250 250 m -80, 0 a 80,80 0 1,0 160,0 a 80,80 0 1,0 -160,0', label: 'Head' },
      { id: 'ear-l', d: 'M180 180 m -30, 0 a 30,30 0 1,0 60,0 a 30,30 0 1,0 -60,0', label: 'Left Ear' },
      { id: 'ear-r', d: 'M320 180 m -30, 0 a 30,30 0 1,0 60,0 a 30,30 0 1,0 -60,0', label: 'Right Ear' },
      { id: 'body', d: 'M250 400 m -100, 0 a 100,100 0 1,0 200,0 a 100,100 0 1,0 -200,0', label: 'Body' },
      { id: 'muzzle', d: 'M250 280 m -30, 0 a 30,20 0 1,0 60,0 a 30,20 0 1,0 -60,0', label: 'Muzzle' },
      { id: 'nose', d: 'M250 270 m -10, 0 a 10,8 0 1,0 20,0 a 10,8 0 1,0 -20,0', label: 'Nose' },
    ],
  },
];

