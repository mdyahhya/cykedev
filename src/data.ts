// ============================================
// CYKED - Product Data & Content
// Real Specifications - Professional Data Structure
// ============================================

export type ProductType = 'ebike' | 'kit';

export interface Specification {
  label: string;
  value: string;
  icon: string; // SVG icon name
  category: 'battery' | 'performance' | 'build' | 'dimensions' | 'warranty' | 'motor' | 'components';
}

export interface Product {
  id: ProductType;
  name: string;
  tagline: string;
  description: string;
  price: string;
  priceUSD?: string;
  moq?: number;
  modelPath: string;
  specifications: Specification[];
  features: string[];
  components?: string[]; // For conversion kit
}

// ============================================
// COMPANY INFO
// ============================================

export const COMPANY_INFO = {
  name: 'CYKEDEV',
  fullName: 'CYKEDEV Bike',
  tagline: 'Electric Mobility. Redefined.',
  description: 'Leading provider of electric bicycles and conversion kits in India',
  
  // Contact Details
  email: {
    info: 'info@cyked.in',
    support: 'support@cyked.in'
  },
  
  phone: {
    primary: '+91 82108 10388',
    whatsapp: '918210810388' // No spaces, with country code
  },
  
  address: {
    street: 'Cykedev Office',
    city: 'Varanasi',
    state: 'UP',
    pincode: '221010',
    country: 'India'
  },
  
  social: {
    website: 'www.cykedevbike.com',
    instagram: '@cyked'
  },
  
  // Business Hours
  hours: 'Mon-Sat, 10:00 AM - 7:00 PM IST',
  
  // Warranty
  warranty: 'Lifetime Defective Manufacturing Warranty'
};

// ============================================
// DASHBOARD STATS
// ============================================

export const DASHBOARD_STATS = [
  {
    id: 1,
    label: 'Products Sold',
    value: 500,
    suffix: '+',
    icon: 'package'
  },
  {
    id: 2,
    label: 'Happy Customers',
    value: 1000,
    suffix: '+',
    icon: 'users'
  },
  {
    id: 3,
    label: 'Cities Covered',
    value: 25,
    suffix: '',
    icon: 'location'
  },
  {
    id: 4,
    label: 'Average Rating',
    value: 4.8,
    suffix: '★',
    icon: 'star',
    decimals: 1
  }
];

// ============================================
// E-BIKE SPECIFICATIONS (Real Data)
// ============================================

const EBIKE_SPECS: Specification[] = [
  // Battery & Charging
  { 
    label: 'Battery Voltage', 
    value: '36V', 
    icon: 'battery',
    category: 'battery'
  },
  { 
    label: 'Battery Capacity', 
    value: '5-6 Ah', 
    icon: 'battery',
    category: 'battery'
  },
  { 
    label: 'Battery Type', 
    value: 'Built-in Rainproof', 
    icon: 'shield',
    category: 'battery'
  },
  { 
    label: 'Charging Time', 
    value: '2-3 hours', 
    icon: 'charging',
    category: 'battery'
  },
  { 
    label: 'Fast Charging', 
    value: 'Yes (Single Mode)', 
    icon: 'lightning',
    category: 'battery'
  },
  
  // Performance
  { 
    label: 'Range (Full Throttle)', 
    value: '25 km', 
    icon: 'speed',
    category: 'performance'
  },
  { 
    label: 'Range (PAS Mode)', 
    value: '35 km', 
    icon: 'speed',
    category: 'performance'
  },
  { 
    label: 'Pedal Assist (PAS)', 
    value: 'Supported', 
    icon: 'pedal',
    category: 'performance'
  },
  
  // Frame & Build
  { 
    label: 'Frame Material', 
    value: 'Hi-Tensile Steel', 
    icon: 'frame',
    category: 'build'
  },
  { 
    label: 'Frame Size', 
    value: '18 inch', 
    icon: 'ruler',
    category: 'build'
  },
  { 
    label: 'Max Weight Capacity', 
    value: '200 kg', 
    icon: 'weight',
    category: 'build'
  },
  { 
    label: 'Cycle Weight', 
    value: '25 kg', 
    icon: 'weight',
    category: 'build'
  },
  
  // Seat & Ergonomics
  { 
    label: 'Seat Type', 
    value: 'Long Adjustable PU Saddle', 
    icon: 'seat',
    category: 'build'
  },
  { 
    label: 'Seat Adjustment', 
    value: 'Alloy Quick Release', 
    icon: 'adjust',
    category: 'build'
  },
  { 
    label: 'Rider Height Range', 
    value: '5.2 ft - 6.2 ft', 
    icon: 'height',
    category: 'dimensions'
  },
  
  // Wheels & Dimensions
  { 
    label: 'Tire Size', 
    value: '27.5 inch', 
    icon: 'wheel',
    category: 'dimensions'
  },
  
  // Warranty
  { 
    label: 'Warranty', 
    value: 'Lifetime Manufacturing Defect', 
    icon: 'warranty',
    category: 'warranty'
  }
];

// ============================================
// CONVERSION KIT SPECIFICATIONS
// ============================================

const KIT_SPECS: Specification[] = [
  // Motor
  { 
    label: 'Motor Power', 
    value: '36V 250W', 
    icon: 'motor',
    category: 'motor'
  },
  
  // Price & MOQ
  { 
    label: 'Single Piece Price', 
    value: '₹11,900', 
    icon: 'price',
    category: 'warranty'
  },
  { 
    label: 'MOQ (7 pieces)', 
    value: 'US$ 9,900', 
    icon: 'bulk',
    category: 'warranty'
  },
  
  // Components
  { 
    label: 'LCD Throttle', 
    value: 'Included', 
    icon: 'display',
    category: 'components'
  },
  { 
    label: 'Controller', 
    value: 'Included', 
    icon: 'controller',
    category: 'components'
  },
  { 
    label: 'Paddle Assist Sensor', 
    value: 'Included', 
    icon: 'sensor',
    category: 'components'
  },
  { 
    label: 'Brake Lever', 
    value: 'Included', 
    icon: 'brake',
    category: 'components'
  },
  { 
    label: 'Light with Horn', 
    value: 'Included', 
    icon: 'light',
    category: 'components'
  },
  { 
    label: 'Switch & Spokes', 
    value: 'Included', 
    icon: 'parts',
    category: 'components'
  },
  
  // Quality
  { 
    label: 'Quality', 
    value: 'Best Quality Tested', 
    icon: 'quality',
    category: 'warranty'
  }
];

// ============================================
// PRODUCTS
// ============================================

export const PRODUCTS: Record<ProductType, Product> = {
  ebike: {
    id: 'ebike',
    name: 'CYKED Electric Bicycle',
    tagline: 'Premium E-Bike for Urban India',
    description: 'Experience the future of commuting with our flagship electric bicycle. Engineered for Indian roads, designed for comfort and performance.',
    price: '₹45,999',
    modelPath: '/models/redbike.glb',
    specifications: EBIKE_SPECS,
    features: [
      'Rainproof built-in 36V battery',
      'Fast charging in 2-3 hours',
      'Up to 35 km range with pedal assist',
      'Hi-tensile steel frame (18 inch)',
      'Supports riders from 5.2 ft to 6.2 ft',
      '27.5 inch tires for smooth rides',
      'Maximum load capacity: 200 kg',
      'Adjustable PU saddle with quick release',
      'Lightweight at just 25 kg',
      'Lifetime manufacturing defect warranty'
    ]
  },
  
  kit: {
    id: 'kit',
    name: 'CYKED Conversion Kit',
    tagline: 'Convert Your Bike to Electric',
    description: 'Transform any regular bicycle into an electric bike with our premium conversion kit. Best quality tested components.',
    price: '₹11,900',
    priceUSD: 'US$ 9,900 (MOQ: 7 pieces)',
    moq: 7,
    modelPath: '/models/redbike.glb',
    specifications: KIT_SPECS,
    features: [
      'Easy DIY installation',
      'Complete conversion solution',
      'Best quality tested components',
      'Suitable for most bicycles'
    ],
    components: [
      'LCD Throttle',
      '36V 250W Motor',
      'Controller',
      'Switch',
      'Paddle Assist Sensor',
      'Brake Lever',
      'Light with Horn',
      'Spokes & Hardware'
    ]
  }
};

// ============================================
// CUSTOMER IMAGES (Placeholder - Add your images)
// ============================================

export const CUSTOMER_IMAGES = [
  {
    id: 1,
    src: '/images/customer1.jpg', // Add your images to public/images/
    alt: 'Happy customer riding CYKED e-bike',
    caption: 'Happy customer riding CYKED e-bike',
    // testimonial: 'Best decision for daily commute!'
  },
  {
    id: 2,
    src: '/images/customer2.jpg',
    alt: 'Customer using CYKED for grocery shopping',
    caption: 'Perfect for the whole family',
    // testimonial: 'Eco-friendly and economical!'
  },
  {
    id: 3,
    src: '/images/customer3.jpg',
    alt: 'Customer on morning ride',
    caption: 'Customer on morning ride',
    // testimonial: 'Smooth and powerful performance!'
  },
  {
    id: 4,
    src: '/images/customer4.jpg',
    alt: 'Family using CYKED bikes',
    caption: 'Best decision for daily commute!',
    testimonial: 'Perfect for the whole family!'
  }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

export const getWhatsAppLink = (message?: string) => {
  const defaultMessage = `Hi! I'm interested in CYKED products. Can you help me?`;
  const finalMessage = message || defaultMessage;
  return `https://wa.me/${COMPANY_INFO.phone.whatsapp}?text=${encodeURIComponent(finalMessage)}`;
};

export const getProductById = (id: ProductType): Product => {
  return PRODUCTS[id];
};

export const getSpecsByCategory = (product: Product, category: Specification['category']) => {
  return product.specifications.filter(spec => spec.category === category);
};
