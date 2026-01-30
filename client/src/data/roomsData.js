import driveImages from './imageLinks';

const roomsData = [
    {
        id: 1,
        slug: 'deluxe-cottage',
        name: 'Deluxe Cottage',
        location: 'Pangoot',
        image: driveImages[0],
        desc: 'Experience the ultimate comfort and luxury in our exclusive Deluxe Cottages.',
        features: [
            'Double Bed', 'Daily Housekeeping', 'Wi-Fi', 'Bathroom',
            'Jungle/Forest View', 'Room Service', 'Balcony', 'Charging Points',
            'Blanket', 'TV', 'Toiletries', 'Hot & Cold Water',
            'Caretaker', 'Wake-up Service', 'Blackout Curtains', 'Work Desk'
        ],
        rates: [
            { plan: 'Room Only', price: '₹ 2,800' },
            { plan: 'Breakfast', price: '₹ 3,000' },
            { plan: 'Breakfast, Lunch/Dinner', price: '₹ 4,500' },
            { plan: 'Breakfast, Lunch, Dinner', price: '₹ 6,000' }
        ],
        gallery: [
            '/images/deluxe cottage/WhatsApp Image 2026-01-15 at 6.21.25 PM (1).jpeg',
            '/images/deluxe cottage/WhatsApp Image 2026-01-15 at 6.21.27 PM.jpeg',
            '/images/deluxe cottage/WhatsApp Image 2026-01-15 at 6.21.28 PM.jpeg',
            '/images/deluxe cottage/WhatsApp Image 2026-01-15 at 6.21.31 PM (1).jpeg',
            '/images/deluxe cottage/WhatsApp Image 2026-01-15 at 6.21.32 PM.jpeg',
            '/images/deluxe cottage/WhatsApp Image 2026-01-15 at 6.21.42 PM (1).jpeg'
        ]
    },
    {
        id: 2,
        slug: 'family-cottage',
        name: 'Family Cottage',
        location: 'Pangoot',
        image: driveImages[1],
        desc: 'Spacious and cozy cottages designed perfectly for family stays.',
        features: [
            'Daily Housekeeping', '2 Double beds', 'Jungle/Forest View', 'Interconnected rooms',
            'Seating Area', 'Wi-Fi', 'Bathroom', 'Room Service',
            'Balcony', 'Charging Points', 'Blanket', 'TV',
            'Toiletries', 'Hot & Cold Water', 'Caretaker', 'Wake up Service',
            'Blackout Curtains', 'Work Desk'
        ],
        rates: [
            { plan: 'Room Only', price: '₹ 4,000' },
            { plan: 'Breakfast', price: '₹ 4,400' },
            { plan: 'Breakfast, Lunch/Dinner', price: '₹ 5,000' },
            { plan: 'Breakfast, Lunch, Dinner', price: '₹ 6,000' }
        ],
        gallery: [
            '/images/family cottage/WhatsApp Image 2026-01-15 at 6.21.40 PM (2).jpeg',
            '/images/family cottage/WhatsApp Image 2026-01-15 at 6.21.22 PM (2).jpeg',
            '/images/family cottage/WhatsApp Image 2026-01-15 at 6.21.22 PM (3).jpeg',
            '/images/family cottage/WhatsApp Image 2026-01-15 at 6.21.24 PM.jpeg',
            '/images/family cottage/WhatsApp Image 2026-01-15 at 6.21.31 PM.jpeg',
            '/images/family cottage/WhatsApp Image 2026-01-15 at 6.21.34 PM.jpeg'
        ]
    },
    {
        id: 3,
        slug: 'restaurant',
        name: 'Restaurant',
        location: 'Pangoot',
        image: '/images/Resturant/WhatsApp Image 2026-01-15 at 6.21.42 PM.jpeg',
        desc: 'Delicious local and multi-cuisine dishes served with a view.',
        link: '/restaurant' // Direct link for simpler items
    }
];

export default roomsData;
