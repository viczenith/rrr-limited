import { db } from '@/lib/db'

async function main() {
  console.log('Start seeding...')

  // Create company info
  const companyInfo = await db.companyInfo.upsert({
    where: { rcNumber: 'RC1234567' },
    update: {},
    create: {
      rcNumber: 'RC1234567',
      fctaApproval: 'FCT/REA/2023/1234',
      address: 'Plot 123, Gwarinpa, Abuja, Nigeria',
      phone: '+2348000000000',
      email: 'info@righteousrichrealty.com',
      whatsapp: '+2348000000000'
    }
  })

  console.log('Created company info:', companyInfo)

  // Create estates
  const estates = [
    {
      name: 'Garden City Estate',
      description: 'Premium residential estate with modern infrastructure and strategic location near the airport. Perfect for families and investors looking for high appreciation potential.',
      location: 'Abuja Airport Road',
      state: 'FCT',
      pricePerPlot: 2500000,
      landSize: '500sqm',
      titleType: 'C_OF_O',
      isVerified: true,
      isFeatured: true,
      status: 'AVAILABLE',
      features: [
        'Perimeter Fencing',
        'Gate House',
        'Paved Roads',
        'Drainage System',
        'Electricity Connection',
        'Water Supply',
        'Street Lighting',
        'Recreation Center'
      ],
      paymentPlans: [
        {
          name: 'Outright Payment',
          description: 'Pay once and own your plot immediately',
          duration: 0,
          percentage: 100,
          isDefault: true
        },
        {
          name: '3 Months Installment',
          description: 'Spread payment over 3 months with minimal interest',
          duration: 3,
          percentage: 105,
          isDefault: false
        },
        {
          name: '6 Months Installment',
          description: 'Flexible payment plan over 6 months',
          duration: 6,
          percentage: 110,
          isDefault: false
        }
      ]
    },
    {
      name: 'Royal Gardens',
      description: 'Affordable luxury living with complete infrastructure and serene environment. Ideal for first-time home buyers and young families.',
      location: 'Lugbe District',
      state: 'FCT',
      pricePerPlot: 1800000,
      landSize: '400sqm',
      titleType: 'R_OF_O',
      isVerified: true,
      isFeatured: true,
      status: 'AVAILABLE',
      features: [
        'Electricity',
        'Water Supply',
        'Security',
        'Recreation Center',
        'Children Playground',
        'Shopping Complex',
        'Good Road Network',
        'Green Areas'
      ],
      paymentPlans: [
        {
          name: 'Outright Payment',
          description: 'Pay once and own your plot immediately',
          duration: 0,
          percentage: 100,
          isDefault: true
        },
        {
          name: '12 Months Installment',
          description: 'Extended payment plan for convenience',
          duration: 12,
          percentage: 120,
          isDefault: false
        }
      ]
    },
    {
      name: 'Sunshine City',
      description: 'Eco-friendly estate with sustainable living features and modern amenities. Perfect for environmentally conscious investors.',
      location: 'Kubwa Express',
      state: 'FCT',
      pricePerPlot: 3200000,
      landSize: '600sqm',
      titleType: 'C_OF_O',
      isVerified: true,
      isFeatured: true,
      status: 'AVAILABLE',
      features: [
        'Solar Street Lights',
        'Green Areas',
        'Shopping Complex',
        'School',
        'Hospital',
        'Sports Facilities',
        'Smart Home Features',
        'Waste Management System'
      ],
      paymentPlans: [
        {
          name: 'Outright Payment',
          description: 'Pay once and own your plot immediately',
          duration: 0,
          percentage: 100,
          isDefault: true
        },
        {
          name: '6 Months Installment',
          description: 'Balanced payment plan',
          duration: 6,
          percentage: 110,
          isDefault: false
        },
        {
          name: '18 Months Installment',
          description: 'Long-term flexible payment',
          duration: 18,
          percentage: 130,
          isDefault: false
        }
      ]
    }
  ]

  for (const estateData of estates) {
    const { features, paymentPlans, ...estateInfo } = estateData
    
    const estate = await db.estate.create({
      data: {
        ...estateInfo,
        features: {
          create: features.map(feature => ({ feature }))
        },
        paymentPlans: {
          create: paymentPlans
        }
      }
    })

    console.log('Created estate:', estate.name)

    // Add sample images
    await db.estateImage.createMany({
      data: [
        {
          estateId: estate.id,
          url: `/api/placeholder/400/300`,
          alt: `${estate.name} - View 1`,
          order: 0
        },
        {
          estateId: estate.id,
          url: `/api/placeholder/400/300`,
          alt: `${estate.name} - View 2`,
          order: 1
        },
        {
          estateId: estate.id,
          url: `/api/placeholder/400/300`,
          alt: `${estate.name} - View 3`,
          order: 2
        }
      ]
    })

    // Create testimonials for each estate
    const testimonials = [
      {
        name: 'Mrs. Sarah Johnson',
        content: `I purchased a plot in ${estate.name} and the experience was seamless. The documentation was perfect, and the property has already appreciated significantly. Highly recommended!`,
        rating: 5,
        estateId: estate.id
      },
      {
        name: 'Engr. Michael Bello',
        content: `${estate.name} delivered exactly what was promised. The installment payment plan made it easy for me to own property in Abuja. Their customer service is exceptional.`,
        rating: 5,
        estateId: estate.id
      },
      {
        name: 'Dr. Amina Yusuf',
        content: `As a first-time land buyer, I was cautious, but the team guided me through every step. The location is perfect for my future home. Thank you!`,
        rating: 5,
        estateId: estate.id
      }
    ]

    await db.testimonial.createMany({
      data: testimonials
    })

    console.log(`Created ${testimonials.length} testimonials for ${estate.name}`)
  }

  // Create FAQs
  const faqs = [
    {
      question: 'What documents do I need to buy land?',
      answer: 'You typically need a valid ID card, passport photograph, proof of address, and utility bills. Our team will guide you through the complete documentation process.',
      category: 'Documentation',
      order: 1
    },
    {
      question: 'What is the difference between C of O and R of O?',
      answer: 'Certificate of Occupancy (C of O) is the highest land title in Nigeria, giving you full ownership rights. Right of Occupancy (R of O) is also a valid title but may have some restrictions.',
      category: 'Documentation',
      order: 2
    },
    {
      question: 'Do you offer installment payment plans?',
      answer: 'Yes, we offer flexible payment plans ranging from 3 to 18 months depending on the property. The longer the payment period, the slightly higher the total cost.',
      category: 'Payment',
      order: 1
    },
    {
      question: 'Can I pay from outside Nigeria?',
      answer: 'Yes, we accept payments from diaspora clients through bank transfers and other secure payment methods. Our team will assist you with the process.',
      category: 'Payment',
      order: 2
    },
    {
      question: 'How do I verify the authenticity of your properties?',
      answer: 'All our properties are verified with relevant government agencies. We provide you with all necessary documentation for independent verification.',
      category: 'Verification',
      order: 1
    },
    {
      question: 'What happens after I make payment?',
      answer: 'After payment, we process your documentation immediately, provide you with all legal papers, and arrange for site inspection and allocation.',
      category: 'Process',
      order: 1
    }
  ]

  await db.fAQ.createMany({
    data: faqs
  })

  console.log('Created FAQs')

  console.log('Seeding finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
  })