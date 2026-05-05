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
  {
    id: 'rocket',
    name: 'Rocket Ship',
    areas: [
      { id: 'body', d: 'M250 100 Q 350 250 300 450 L 200 450 Q 150 250 250 100 Z', label: 'Rocket Body' },
      { id: 'nose', d: 'M250 100 L 280 150 L 220 150 Z', label: 'Nose Cone' },
      { id: 'window', d: 'M250 220 m -30, 0 a 30,30 0 1,0 60,0 a 30,30 0 1,0 -60,0', label: 'Window' },
      { id: 'fin-l', d: 'M210 350 L 150 450 L 210 450 Z', label: 'Left Fin' },
      { id: 'fin-r', d: 'M290 350 L 350 450 L 290 450 Z', label: 'Right Fin' },
      { id: 'fire-1', d: 'M220 450 L 250 500 L 280 450 Z', label: 'Booster' },
    ],
  },
  {
    id: 'boat',
    name: 'Sailing Boat',
    areas: [
      { id: 'hull', d: 'M100 350 L 400 350 L 350 420 L 150 420 Z', label: 'Boat Hull' },
      { id: 'mast', d: 'M240 350 L 240 100 L 260 100 L 260 350 Z', label: 'Mast' },
      { id: 'sail', d: 'M260 120 L 400 320 L 260 320 Z', label: 'Sail' },
      { id: 'flag', d: 'M260 100 L 300 115 L 260 130 Z', label: 'Flag' },
      { id: 'water-1', d: 'M50 420 Q 100 450 150 420 Q 200 390 250 420 Q 300 450 350 420 Q 400 390 450 420', label: 'Water' },
    ],
  },
  {
    id: 'car',
    name: 'Racing Car',
    areas: [
      { id: 'body', d: 'M100 350 L 100 300 Q 150 250 250 250 L 350 250 Q 400 250 400 300 L 400 350 Z', label: 'Car Body' },
      { id: 'window', d: 'M180 280 L 250 280 L 250 320 L 180 320 Z', label: 'Window' },
      { id: 'wheel-l', d: 'M150 350 m -40, 0 a 40,40 0 1,0 80,0 a 40,40 0 1,0 -80,0', label: 'Front Wheel' },
      { id: 'wheel-r', d: 'M350 350 m -40, 0 a 40,40 0 1,0 80,0 a 40,40 0 1,0 -80,0', label: 'Back Wheel' },
      { id: 'stripe', d: 'M100 320 L 400 320 L 400 330 L 100 330 Z', label: 'Racing Stripe' },
    ],
  },
  {
    id: 'tree',
    name: 'Happy Tree',
    areas: [
      { id: 'trunk', d: 'M230 450 L 270 450 L 260 300 L 240 300 Z', label: 'Trunk' },
      { id: 'leaves-bot', d: 'M150 350 Q 250 280 350 350 Q 380 380 350 410 Q 250 440 150 410 Q 120 380 150 350 Z', label: 'Bottom Leaves' },
      { id: 'leaves-mid', d: 'M180 250 Q 250 180 320 250 Q 350 280 320 310 Q 250 340 180 310 Q 150 280 180 250 Z', label: 'Middle Leaves' },
      { id: 'leaves-top', d: 'M200 150 Q 250 80 300 150 Q 330 180 300 210 Q 250 240 200 210 Q 170 180 200 150 Z', label: 'Top Leaves' },
      { id: 'apple-1', d: 'M220 220 m -10, 0 a 10,10 0 1,0 20,0 a 10,10 0 1,0 -20,0', label: 'Apple' },
      { id: 'apple-2', d: 'M280 320 m -10, 0 a 10,10 0 1,0 20,0 a 10,10 0 1,0 -20,0', label: 'Apple' },
    ],
  },
  {
    id: 'balloon',
    name: 'Hot Air Balloon',
    areas: [
      { id: 'envelope', d: 'M250 80 C 350 80, 400 200, 250 350 C 100 200, 150 80, 250 80 Z', label: 'Balloon' },
      { id: 'stripe-1', d: 'M180 150 Q 250 120 320 150 L 310 200 Q 250 170 190 200 Z', label: 'Stripe 1' },
      { id: 'stripe-2', d: 'M195 240 Q 250 210 305 240 L 290 280 Q 250 250 210 280 Z', label: 'Stripe 2' },
      { id: 'basket', d: 'M220 380 L 280 380 L 270 430 L 230 430 Z', label: 'Basket' },
      { id: 'rope-l', d: 'M225 355 L 225 380', label: 'Rope' },
      { id: 'rope-r', d: 'M275 355 L 275 380', label: 'Rope' },
    ],
  },
];

