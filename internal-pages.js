const servicePages = {
  intermodal: {
    title: 'Intermodal Transportation',
    tagline: 'Smarter freight movement across road, rail, and ocean networks.',
    image: 'transport.jpg',
    desc: 'Skylink Corridors combines road, rail, and ocean transportation to move freight efficiently across regional and international supply chains. Coordinated planning reduces handling, controls cost, and maintains end-to-end shipment visibility.',
    benefits: [
      'Reliable execution designed around operational priorities',
      'Reduced delays and avoidable supply chain costs',
      'Clear visibility from planning through delivery',
      'Flexible capacity for changing business demand',
      'Dedicated support and proactive exception management'
    ],
    offerings: [
      {
        title: 'Port & Inland Container Transportation',
        desc: 'Reliable movement of containers between seaports, inland container depots (ICDs), warehouses, and customer facilities with efficient scheduling and secure handling.'
      },
      {
        title: 'Import & Export Container Logistics',
        desc: 'Comprehensive transportation solutions for import, export, and transit cargo, including container collection, delivery, repositioning, and operational coordination.'
      },
      {
        title: 'Container Freight Coordination',
        desc: 'End-to-end logistics management covering customs-cleared container movement, loading and unloading support, and transportation planning to ensure timely and hassle-free deliveries.'
      }
    ],
    tags: ['Automotive', 'Consumer Goods', 'E-Commerce', 'Retail', 'Chemical']
  },
  'asset-based': {
    title: 'Asset-Based Domestic Transportation',
    tagline: 'Dependable domestic freight movement supported by dedicated transportation resources.',
    image: 'transport.jpg',
    desc: 'Reliable domestic freight movement requires consistent transportation capacity and coordinated execution. Our road freight solutions support the movement of goods between suppliers, warehouses, distribution centers, and customers while maintaining efficient scheduling and delivery control.',
    benefits: [
      'Reliable domestic freight execution',
      'Coordinated pickup and delivery scheduling',
      'Efficient route and capacity planning',
      'Shipment visibility throughout transportation',
      'Flexible support for recurring and changing requirements'
    ],
    offerings: [
      {
        title: 'Domestic Freight Transportation',
        desc: 'Coordinated Road transportation for moving commercial cargo between origins, distribution facilities, and delivery locations.'
      },
      {
        title: 'Regional Distribution',
        desc: 'Planned transportation services supporting regular movement between warehouses, branches, distribution centers, and customer locations.'
      },
      {
        title: 'Dedicated Capacity Solutions',
        desc: 'Transportation resources arranged around recurring shipment volumes, delivery schedules, and specific operational requirements.'
      }
    ],
    tags: ['Retail', 'Automotive', 'Consumer Goods', 'Building Materials']
  },
  'marine-container': {
    title: 'Marine Container Solutions (MCS)',
    tagline: 'Efficient container movement from port to destination.',
    image: 'forwarding.jpg',
    desc: 'Efficient container movement connects seaports and terminals with inland facilities and final delivery points. Coordinated drayage, container scheduling, and transportation planning help maintain smooth cargo flow from port arrival through final delivery. Our approach focuses on timely container movement, documentation coordination, and efficient utilization of transportation capacity.',
    benefits: [
      'Coordinated port-to-destination movement',
      'Efficient container scheduling',
      'Reduced dwell and avoidable delays',
      'Secure handling and transportation',
      'End-to-end operational coordination'
    ],
    offerings: [
      {
        title: 'Port Drayage',
        desc: 'Transportation of loaded and empty containers between ports, terminals, ICDs, and designated facilities.'
      },
      {
        title: 'Container Pickup & Delivery',
        desc: 'Scheduled collection and delivery of import and export containers based on vessel, terminal, and customer requirements.'
      },
      {
        title: 'Empty Container Repositioning',
        desc: 'Coordinated movement and repositioning of empty containers between designated depots, terminals, and operational locations.'
      }
    ],
    tags: ['Importers', 'Exporters', 'Retail', 'Manufacturing']
  },
  'cross-border': {
    title: 'Cross-Border Logistics',
    tagline: 'Reliable road freight solutions connecting markets across borders.',
    image: 'cross-border.jpg',
    desc: 'Cross-border road transportation connects businesses with regional and international markets through coordinated freight movement. From transportation planning to border coordination and final delivery, we help streamline the movement of shipments across international road networks.',
    benefits: [
      'Coordinated cross-border transportation',
      'Improved border movement planning',
      'Documentation and operational coordination',
      'Route and transit-time management',
      'Shipment visibility and exception support'
    ],
    offerings: [
      {
        title: 'Cross-Border Freight Movement',
        desc: 'Planned road transportation for commercial shipments moving between international origin and destination points.'
      },
      {
        title: 'Border Coordination',
        desc: 'Operational coordination supporting documentation, border processes, vehicle scheduling, and shipment handover.'
      },
      {
        title: 'Transit Cargo Transportation',
        desc: 'Reliable movement of transit shipments through designated routes with coordinated scheduling and delivery planning.'
      }
    ],
    tags: ['Retail', 'Industrial', 'Humanitarian', 'Consumer Goods']
  },
  'temperature-controlled': {
    title: 'Temperature-Controlled Transportation',
    tagline: 'Protecting temperature-sensitive cargo throughout the journey.',
    image: 'transport.jpg',
    desc: 'Temperature-sensitive shipments require controlled transportation conditions and careful delivery planning. Our specialized freight solutions support the movement of sensitive cargo while aligning transportation operations with required temperature conditions, handling procedures, and delivery schedules.',
    benefits: [
      'Temperature-sensitive cargo handling',
      'Controlled transportation planning',
      'Reduced exposure to temperature-related risks',
      'Scheduled and monitored deliveries',
      'Proactive exception management'
    ],
    offerings: [
      {
        title: 'Temperature-Controlled Freight',
        desc: 'Transportation solutions for cargo requiring specified temperature conditions during road movement.'
      },
      {
        title: 'Cold Chain Distribution',
        desc: 'Coordinated transportation between suppliers, warehouses, distribution facilities, and delivery points.'
      },
      {
        title: 'Temperature-Sensitive Delivery',
        desc: 'Planned delivery operations designed around product requirements, handling procedures, and required delivery windows.'
      }
    ],
    tags: ['Healthcare', 'Food & Beverage', 'Chemical', 'Retail']
  },
  'truck-brokerage': {
    title: 'Truck Brokerage',
    tagline: 'Connecting freight requirements with dependable transportation capacity.',
    image: 'careers-hero.jpg',
    desc: 'Matching freight requirements with suitable transportation capacity enables businesses to respond efficiently to changing shipment volumes and routes. Carrier sourcing, load coordination, scheduling, and shipment monitoring are managed around specific operational requirements. Our brokerage approach focuses on efficient carrier coordination and reliable execution.',
    benefits: [
      'Access to flexible transportation capacity',
      'Efficient carrier coordination',
      'Competitive freight planning',
      'Route and schedule alignment',
      'Proactive shipment support'
    ],
    offerings: [
      {
        title: 'Carrier Sourcing',
        desc: 'Identification and coordination of suitable transportation capacity based on shipment requirements.'
      },
      {
        title: 'Load & Capacity Matching',
        desc: 'Matching freight requirements with available trucks, routes, equipment, and delivery schedules.'
      },
      {
        title: 'Carrier Coordination',
        desc: 'Ongoing coordination covering pickup, transit, delivery, documentation, and shipment status.'
      }
    ],
    tags: ['Retail', 'Manufacturing', 'Automotive', 'Consumer Goods']
  },
  'asset-trucking': {
    title: 'Asset Trucking',
    tagline: 'Reliable road freight supported by dedicated transportation capacity.',
    image: 'hero.jpg',
    desc: 'Skylink Corridors provides structured trucking solutions for businesses requiring dependable movement of freight across domestic routes. Transportation is organized around cargo type, shipment volume, route requirements, and delivery commitments.',
    benefits: [
      'Reliable trucking capacity',
      'Planned route execution',
      'Consistent delivery coordination',
      'Flexible transportation support',
      'Shipment status visibility'
    ],
    offerings: [
      {
        title: 'Domestic Trucking',
        desc: 'Road transportation for commercial freight across local, regional, and national routes.'
      },
      {
        title: 'Heavy & Commercial Freight Movement',
        desc: 'Transportation planning for larger and commercially significant shipments requiring suitable vehicle capacity.'
      },
      {
        title: 'Scheduled Freight Runs',
        desc: 'Recurring transportation arrangements designed around regular shipment volumes and delivery schedules.'
      }
    ],
    tags: ['Automotive', 'Industrial', 'Retail', 'Building Materials']
  },
  'dedicated-trucking': {
    title: 'Dedicated Trucking',
    tagline: 'Dedicated transportation capacity built around your business.',
    image: 'contact-hero.jpg',
    desc: 'Businesses with recurring transportation requirements can benefit from dedicated capacity arranged around their specific routes, schedules, and shipment volumes. This model supports greater consistency in transportation planning, scheduling, and day-to-day coordination.',
    benefits: [
      'Dedicated transportation capacity',
      'Consistent service planning',
      'Improved scheduling control',
      'Reliable recurring deliveries',
      'Responsive operational support'
    ],
    offerings: [
      {
        title: 'Dedicated Route Transportation',
        desc: 'Regular trucking services assigned to defined routes and delivery requirements.'
      },
      {
        title: 'Dedicated Fleet Coordination',
        desc: 'Transportation capacity organized around specific operational schedules and shipment volumes.'
      },
      {
        title: 'Recurring Delivery Programs',
        desc: 'Structured transportation plans supporting regular movement between suppliers, warehouses, branches, and customers.'
      }
    ],
    tags: ['Retail', 'Automotive', 'Consumer Goods', 'Manufacturing']
  },
  'logistics-management': {
    title: 'Logistics Management',
    tagline: 'Coordinated transportation management for smoother supply chains.',
    image: 'transport.jpg',
    desc: 'Effective logistics management brings transportation planning, scheduling, execution, monitoring, and exception handling together within one coordinated process. Our logistics management approach helps businesses improve operational control while maintaining visibility across their freight movements.',
    benefits: [
      'Centralized transportation coordination',
      'Improved operational visibility',
      'Better route and capacity planning',
      'Reduced avoidable delays',
      'Proactive exception management'
    ],
    offerings: [
      {
        title: 'Transportation Planning',
        desc: 'Planning routes, schedules, capacity, and delivery requirements according to shipment priorities.'
      },
      {
        title: 'Shipment Coordination',
        desc: 'Managing transportation activities from pickup through delivery while coordinating relevant stakeholders.'
      },
      {
        title: 'Freight Performance Monitoring',
        desc: 'Monitoring shipment progress, delivery status, exceptions, and operational performance.'
      }
    ],
    tags: ['Retail', 'Manufacturing', 'E-Commerce', 'Distribution']
  },
  ftl: {
    title: 'Full Truckload (FTL) Logistics & Shipping',
    tagline: 'Efficient full-load transportation from origin to destination',
    image: 'transport.jpg',
    desc: 'Skylink Corridors provides Full Truckload (FTL) transportation for shipments requiring dedicated vehicle capacity. Our solutions are designed for direct movement, efficient scheduling, and reliable delivery across domestic and regional routes.',
    benefits: [
      'Dedicated truck capacity',
      'Direct point-to-point transportation',
      'Reduced handling and transfers',
      'Flexible scheduling',
      'Reliable delivery coordination'
    ],
    offerings: [
      {
        title: 'Full Truckload Shipping',
        desc: 'Dedicated transportation for shipments requiring the capacity of an entire truck.'
      },
      {
        title: 'Point-to-Point Freight Movement',
        desc: 'Direct transportation between pickup and delivery locations with coordinated scheduling.'
      },
      {
        title: 'FTL Route Optimization',
        desc: 'Route and transportation planning designed to improve transit efficiency and delivery performance.'
      }
    ],
    tags: ['Retail', 'Industrial', 'Automotive', 'Consumer Goods']
  },
  ltl: {
    title: 'LTL Freight Optimization',
    tagline: 'Smarter transportation for smaller freight volumes.',
    image: 'warehouse.jpg',
    desc: 'Smaller freight volumes can be transported efficiently through optimized Less-than-Truckload solutions. Consolidation, route planning, and coordinated scheduling help improve vehicle utilization while providing flexible transportation options for shipments that do not require a full truck.',
    benefits: [
      'Efficient handling of smaller shipments',
      'Optimized transportation capacity',
      'Reduced unnecessary freight costs',
      'Flexible pickup and delivery options',
      'Improved shipment coordination'
    ],
    offerings: [
      {
        title: 'LTL Freight Transportation',
        desc: 'Transportation solutions for shipments that do not require a full truck.'
      },
      {
        title: 'Freight Consolidation',
        desc: 'Combining compatible shipments to improve vehicle utilization and transportation efficiency.'
      },
      {
        title: 'LTL Route Planning',
        desc: 'Coordinated routing and scheduling designed around shipment priorities and delivery requirements.'
      }
    ],
    tags: ['E-Commerce', 'Retail', 'Consumer Goods', 'Healthcare']
  },
  'cross-dock': {
    title: 'Cross Dock Operations',
    tagline: 'Faster freight movement with streamlined transfer operations.',
    image: 'warehouse.jpg',
    desc: 'Skylink Corridors supports cross-dock operations by coordinating the rapid transfer of freight between inbound and outbound transportation. This approach helps minimize storage requirements and keeps shipments moving through the supply chain.',
    benefits: [
      'Reduced storage requirements',
      'Faster freight transfer',
      'Improved transportation flow',
      'Better inventory movement',
      'Coordinated inbound and outbound scheduling'
    ],
    offerings: [
      {
        title: 'Inbound Freight Handling',
        desc: 'Coordination of incoming shipments for timely receiving, sorting, and transfer.'
      },
      {
        title: 'Freight Sorting & Transfer',
        desc: 'Organized movement of goods between inbound and outbound transportation without unnecessary storage.'
      },
      {
        title: 'Outbound Dispatch Coordination',
        desc: 'Scheduling and coordination of outbound vehicles for onward delivery.'
      }
    ],
    tags: ['Retail', 'E-Commerce', 'Food & Beverage', 'Consumer Goods']
  },
  'retail-consolidation': {
    title: 'Retail Consolidation',
    tagline: 'Consolidated freight solutions for efficient retail distribution.',
    image: 'warehouse.jpg',
    desc: 'Retail supply chains often involve shipments from multiple suppliers moving toward shared distribution points or stores. Consolidation combines compatible freight into coordinated transportation movements to improve capacity utilization and simplify retail distribution.',
    benefits: [
      'Improved shipment consolidation',
      'Efficient vehicle utilization',
      'Coordinated retail deliveries',
      'Reduced transportation complexity',
      'Better distribution planning'
    ],
    offerings: [
      {
        title: 'Supplier Freight Consolidation',
        desc: 'Combining compatible shipments from multiple suppliers for efficient transportation.'
      },
      {
        title: 'Retail Distribution',
        desc: 'Coordinated movement of consolidated freight to retail stores, warehouses, and distribution centers.'
      },
      {
        title: 'Multi-Location Delivery Planning',
        desc: 'Transportation scheduling for shipments serving multiple retail destinations.'
      }
    ],
    tags: ['Retail', 'Consumer Goods', 'Food & Beverage', 'E-Commerce']
  },
  ecommerce: {
    title: 'E-Commerce Fulfillment',
    tagline: 'Responsive logistics supporting fast-moving e-commerce operations.',
    image: 'ecommerce.jpg',
    desc: 'Fast-moving e-commerce operations depend on responsive fulfillment and transportation networks. Coordinated movement between suppliers, fulfillment centers, warehouses, distribution points, and customers helps support timely order processing and delivery.',
    benefits: [
      'Faster order movement',
      'Flexible fulfillment support',
      'Coordinated inventory transportation',
      'Scalable delivery capacity',
      'Improved shipment visibility'
    ],
    offerings: [
      {
        title: 'Order Fulfillment Transportation',
        desc: 'Transportation support connecting fulfillment facilities with delivery networks and customer destinations.'
      },
      {
        title: 'Distribution & Replenishment',
        desc: 'Planned movement of inventory between suppliers, fulfillment centers, warehouses, and distribution points.'
      },
      {
        title: 'E-Commerce Delivery Coordination',
        desc: 'Coordinated transportation for scheduled and time-sensitive customer deliveries.'
      }
    ],
    tags: ['E-Commerce', 'Retail', 'Consumer Goods', 'Healthcare']
  },
  'international-freight': {
    title: 'International Freight',
    tagline: 'Connecting global shipments with coordinated road freight solutions.',
    image: 'forwarding.jpg',
    desc: 'Global supply chains require seamless coordination between international gateways, inland facilities, and final destinations. Integrated freight planning supports the movement of commercial cargo across international networks while maintaining shipment visibility and operational coordination.',
    benefits: [
      'International freight coordination',
      'Integrated transportation planning',
      'Multi-modal shipment support',
      'Clear operational visibility',
      'Proactive exception management'
    ],
    offerings: [
      {
        title: 'International Freight Transportation',
        desc: 'Coordinated movement of commercial cargo across international supply chain routes.'
      },
      {
        title: 'Gateway & Inland Transportation',
        desc: 'Connecting ports, airports, terminals, warehouses, and inland destinations.'
      },
      {
        title: 'International Shipment Coordination',
        desc: 'Operational coordination covering transportation schedules, documentation, handovers, and delivery planning.'
      }
    ],
    tags: ['Importers', 'Exporters', 'Retail', 'Industrial']
  },
  drayage: {
    title: 'International Drayage',
    tagline: 'Efficient short-haul container movement across international gateways.',
    image: 'forwarding.jpg',
    desc: 'Short-haul container transportation plays a critical role in connecting ports, terminals, rail facilities, ICDs, warehouses, and customers. Efficient drayage coordination helps reduce container delays and maintain smooth movement between key points in the international supply chain.',
    benefits: [
      'Efficient short-haul container movement',
      'Port and terminal coordination',
      'Reduced container delays',
      'Flexible scheduling',
      'End-to-end operational visibility'
    ],
    offerings: [
      {
        title: 'Port-to-Terminal Drayage',
        desc: 'Movement of containers between ports and designated terminals or inland facilities.'
      },
      {
        title: 'Terminal-to-Warehouse Transportation',
        desc: 'Coordinated transportation of containers from terminals to warehouses and customer facilities.'
      },
      {
        title: 'Container Transfer & Repositioning',
        desc: 'Efficient movement and repositioning of loaded or empty containers according to operational requirements.'
      }
    ],
    tags: ['Importers', 'Exporters', 'Retail', 'Manufacturing']
  },
  'reverse-logistics': {
    title: 'Reverse Logistics',
    tagline: 'Efficient return movement for products, equipment, and shipments.',
    image: 'warehouse.jpg',
    desc: 'Skylink Corridors manages transportation requirements associated with returned products, reusable assets, and other reverse-flow cargo. Our solutions help businesses coordinate return transportation and reintegration into their supply chains.',
    benefits: [
      'Structured return transportation',
      'Improved recovery and collection processes',
      'Reduced reverse logistics complexity',
      'Coordinated return scheduling',
      'Better shipment visibility'
    ],
    offerings: [
      {
        title: 'Product Returns Transportation',
        desc: 'Collection and transportation of returned products from customers, stores, or distribution locations.'
      },
      {
        title: 'Asset & Equipment Returns',
        desc: 'Coordinated movement of reusable equipment, containers, and operational assets.'
      },
      {
        title: 'Return-to-Warehouse Logistics',
        desc: 'Transportation of returned cargo back to designated warehouses, facilities, or processing locations.'
      }
    ],
    tags: ['E-Commerce', 'Retail', 'Consumer Goods', 'Healthcare']
  },
  'middle-final-mile': {
    title: 'Middle Mile & Final Mile Delivery',
    tagline: 'Connecting distribution networks to the final destination.',
    image: 'transport.jpg',
    desc: 'The final stages of the supply chain require reliable connections between distribution hubs, warehouses, businesses, retail locations, and customers. Coordinated middle-mile and final-mile transportation helps maintain delivery continuity from distribution points to the final destination.',
    benefits: [
      'Coordinated middle-mile transportation',
      'Efficient final-mile delivery',
      'Flexible delivery scheduling',
      'Improved shipment visibility',
      'Responsive exception management'
    ],
    offerings: [
      {
        title: 'Middle Mile Transportation',
        desc: 'Movement of freight between fulfillment centers, warehouses, distribution hubs, and regional facilities.'
      },
      {
        title: 'Final Mile Delivery',
        desc: 'Transportation from the final distribution point to business or customer locations.'
      },
      {
        title: 'Multi-Stop Delivery',
        desc: 'Planned transportation serving multiple delivery locations within defined routes and schedules.'
      }
    ],
    tags: ['E-Commerce', 'Retail', 'Consumer Goods', 'Healthcare']
  },
  'home-business-delivery': {
    title: 'Home & Business Delivery',
    tagline: 'Professional delivery experiences for every recipient.',
    image: 'transport.jpg',
    desc: 'Home and business delivery services provide scheduled, trackable delivery to residential and commercial locations. Customer communication, proof of delivery, and trained teams support a dependable experience.',
    benefits: [
      'Scheduled and trackable deliveries',
      'Direct-to-recipient communication',
      'Safe and verified proof of delivery',
      'Flexible residential and commercial options',
      'Responsive customer support'
    ],
    offerings: [
      {
        title: 'Scheduled Delivery',
        desc: 'Convenient appointment windows arranged to meet residential and business operating hours.'
      },
      {
        title: 'Customer Notifications',
        desc: 'Proactive status alerts and live tracking for recipients throughout transit and delivery.'
      },
      {
        title: 'Proof of Delivery',
        desc: 'Digital signatures, photographic confirmation, and immediate milestone receipts.'
      }
    ],
    tags: ['E-Commerce', 'Retail', 'Consumer Goods', 'Healthcare']
  },
  'big-bulky': {
    title: 'Big & Bulky Last Mile Delivery',
    tagline: 'Specialized last-mile transportation for large and heavy shipments.',
    image: 'transport.jpg',
    desc: 'Large, heavy, and oversized shipments require additional planning beyond standard last-mile delivery. Specialized transportation coordination considers shipment dimensions, access conditions, handling requirements, site limitations, and customer delivery schedules.',
    benefits: [
      'Specialized bulky freight coordination',
      'Delivery planning around site requirements',
      'Flexible scheduling',
      'Coordinated handling support',
      'Proactive delivery management'
    ],
    offerings: [
      {
        title: 'Large & Bulky Item Delivery',
        desc: 'Transportation of oversized and heavy goods to residential, commercial, and designated delivery locations.'
      },
      {
        title: 'Site & Delivery Planning',
        desc: 'Assessment and coordination of delivery schedules, access requirements, and site-specific transportation needs.'
      },
      {
        title: 'Special Handling Delivery',
        desc: 'Coordinated transportation and delivery for shipments requiring additional handling, equipment, or operational planning.'
      }
    ],
    tags: ['Furniture', 'Appliances', 'Building Materials', 'Retail']
  }
};

const industryPages = {
  retail: {
    title: 'Retail Logistics',
    tagline: 'Responsive logistics for stores, suppliers, and customers.',
    image: 'warehouse.jpg',
    desc: 'Skylink Corridors helps retailers coordinate supplier inbound freight, inventory flow, store replenishment, and customer delivery. Our flexible transport and warehousing network responds quickly to promotions, seasonal peaks, and changing demand.',
    focus: ['Vendor Consolidation', 'Store Replenishment', 'Peak-Season Capacity', 'Delivery Visibility'],
    tags: ['Transportation', 'Warehousing', 'Cross Dock', 'Final Mile']
  },
  'private-equity': {
    title: 'Private Equity Logistics',
    tagline: 'Scalable supply chain support across portfolio companies.',
    image: 'about.jpg',
    desc: 'We help private equity teams stabilize, integrate, and improve logistics operations across portfolio businesses. Standardized reporting and flexible capacity create visibility while supporting growth, acquisitions, and operational transformation.',
    focus: ['Network Assessment', 'Portfolio Standardization', 'Cost Optimization', 'Scalable Capacity'],
    tags: ['Transportation', 'Warehousing', 'Technology', 'Reporting']
  },
  ecommerce: {
    title: 'E-Commerce Logistics',
    tagline: 'Fulfillment and delivery designed for online growth.',
    image: 'ecommerce.jpg',
    desc: 'Our e-commerce logistics platform connects inventory, order fulfillment, transportation, final-mile delivery, and returns. Scalable processes help brands deliver accurately and quickly while protecting the customer experience.',
    focus: ['Order Fulfillment', 'Inventory Accuracy', 'Final-Mile Delivery', 'Returns Management'],
    tags: ['Warehousing', 'Fulfillment', 'Transportation', 'Reverse Logistics']
  },
  healthcare: {
    title: 'Healthcare Logistics',
    tagline: 'Controlled, visible handling for critical healthcare products.',
    image: 'transport.jpg',
    desc: 'Healthcare logistics requires disciplined handling, reliable timing, and clear chain-of-custody visibility. We coordinate suitable transport and storage processes for medical products, equipment, and healthcare supplies.',
    focus: ['Chain of Custody', 'Temperature Control', 'Priority Handling', 'Delivery Visibility'],
    tags: ['Cold Chain', 'Dedicated Transport', 'Warehousing', 'Final Mile']
  },
  cpg: {
    title: 'CPG Logistics',
    tagline: 'High-velocity logistics for consumer packaged goods.',
    image: 'warehouse.jpg',
    desc: 'We support consumer packaged goods manufacturers with inbound materials, warehousing, retail consolidation, and responsive distribution. Structured planning keeps fast-moving inventory available across changing demand cycles.',
    focus: ['Retail Compliance', 'Inventory Flow', 'Promotional Capacity', 'Multi-Channel Distribution'],
    tags: ['Warehousing', 'Retail Consolidation', 'FTL & LTL', 'Cross Dock']
  },
  'food-beverage': {
    title: 'Food & Beverage Logistics',
    tagline: 'Fresh, compliant movement across the food supply chain.',
    image: 'transport.jpg',
    desc: 'Our food and beverage logistics services coordinate time-sensitive transport, suitable storage, route planning, and delivery scheduling. Operational controls help protect product condition, freshness, and service reliability.',
    focus: ['Cold-Chain Support', 'Time-Critical Delivery', 'Lot Visibility', 'Seasonal Capacity'],
    tags: ['Temperature Controlled', 'Warehousing', 'FTL', 'Retail Delivery']
  },
  'durable-goods': {
    title: 'Durable Goods Logistics',
    tagline: 'Reliable handling for high-value, long-life products.',
    image: 'warehouse.jpg',
    desc: 'Durable goods require careful handling, inventory control, and dependable transportation. We coordinate inbound materials, storage, distribution, and specialized final-mile delivery for products of varied size and value.',
    focus: ['Damage Prevention', 'Inventory Control', 'Special Handling', 'Scheduled Delivery'],
    tags: ['Warehousing', 'FTL', 'Big & Bulky', 'Final Mile']
  },
  building: {
    title: 'Building Products & Materials Logistics',
    tagline: 'Job-site ready transportation for construction supply chains.',
    image: 'transport.jpg',
    desc: 'We move building products and materials with equipment selection, load planning, delivery scheduling, and site coordination. Reliable capacity and proactive communication help contractors and suppliers maintain project timelines.',
    focus: ['Equipment Selection', 'Job-Site Scheduling', 'Heavy-Load Planning', 'Proof of Delivery'],
    tags: ['Flatbed Transport', 'Dedicated Trucking', 'Warehousing', 'Final Mile']
  },
  automotive: {
    title: 'Automotive Logistics',
    tagline: 'Synchronized transportation for automotive supply chains.',
    image: 'transport.jpg',
    desc: 'Automotive logistics demands precise scheduling and continuous visibility. We coordinate inbound components, production-support freight, aftermarket distribution, and expedited recovery to keep operations moving.',
    focus: ['Production Scheduling', 'Parts Consolidation', 'Expedited Recovery', 'Shipment Visibility'],
    tags: ['Dedicated Trucking', 'Cross Dock', 'FTL & LTL', 'Cross-Border']
  },
  glass: {
    title: 'Glass Logistics',
    tagline: 'Specialized care for fragile and high-risk freight.',
    image: 'transport.jpg',
    desc: 'Our glass logistics solutions emphasize equipment suitability, secure loading, careful handling, and controlled delivery. Experienced coordination reduces damage risk from origin through job site or customer destination.',
    focus: ['Secure Load Planning', 'Specialized Handling', 'Damage Prevention', 'Site Coordination'],
    tags: ['Dedicated Transport', 'Special Equipment', 'Warehousing', 'Final Mile']
  },
  paper: {
    title: 'Paper Logistics',
    tagline: 'Protected, efficient movement for paper and packaging products.',
    image: 'warehouse.jpg',
    desc: 'Paper products need protection from moisture, contamination, and handling damage. We coordinate clean equipment, suitable storage, load planning, and reliable distribution for mills, converters, and customers.',
    focus: ['Moisture Protection', 'Clean Equipment', 'Inventory Rotation', 'Reliable Distribution'],
    tags: ['Warehousing', 'FTL', 'Dedicated Trucking', 'Cross Dock']
  },
  'wine-spirits': {
    title: 'Wine, Spirits and Breweries Logistics',
    tagline: 'Controlled logistics for beverage production and distribution.',
    image: 'transport.jpg',
    desc: 'We coordinate transport and storage for beverage ingredients, packaging, finished products, and retail orders. Careful handling, temperature awareness, and shipment visibility support product quality and dependable distribution.',
    focus: ['Product Protection', 'Temperature Awareness', 'Retail Distribution', 'Inventory Visibility'],
    tags: ['Temperature Controlled', 'Warehousing', 'Retail Delivery', 'FTL']
  },
  '3pl': {
    title: 'Asset Solutions for 3PLs',
    tagline: 'Dependable fleet capacity that strengthens your customer promise.',
    image: 'transport.jpg',
    desc: 'Skylink provides 3PL partners with asset-backed capacity, regional execution, and responsive operational support. Our services extend your network while maintaining shipment visibility and consistent service standards.',
    focus: ['Asset-Backed Capacity', 'White-Label Execution', 'Regional Coverage', 'Performance Reporting'],
    tags: ['Dedicated Trucking', 'FTL & LTL', 'Cross-Border', 'Final Mile']
  },
  chemical: {
    title: 'Chemical Logistics',
    tagline: 'Safety-led transportation for sensitive chemical supply chains.',
    image: 'transport.jpg',
    desc: 'Chemical logistics requires disciplined planning, suitable equipment, documentation, and trained execution. We coordinate each movement with safety, compliance, and product integrity at the center of the operation.',
    focus: ['Safety Procedures', 'Suitable Equipment', 'Documentation Control', 'Shipment Visibility'],
    tags: ['Dedicated Transport', 'Temperature Control', 'Warehousing', 'Cross-Border']
  }
};

const nav = `<header class="site-header detail-header"><nav class="navbar container" aria-label="Main navigation"><a class="brand" href="/"><img src="/assets/Skylink%20Corridor%20logo%20New.png" alt="Skylink Corridors"></a><button class="menu-toggle" aria-label="Open navigation" aria-expanded="false"><span></span><span></span><span></span></button><div class="nav-wrap"><div class="nav-item has-menu"><button class="nav-trigger" aria-expanded="false">About Us <span>⌄</span></button><div class="dropdown about-menu"><a href="/about/story/">Our Story</a><a href="/about/leadership/">Leadership</a><a href="/about/values/">Our Values</a><a href="/about/technology/">Technology &amp; Innovation</a><a href="/about/sustainability/">Sustainability</a><a href="/about/news/">News</a><a href="/about/portfolio/">Portfolio</a></div></div><div class="nav-item has-menu"><button class="nav-trigger" aria-expanded="false">Services <span>⌄</span></button><div class="dropdown services-menu">${Object.entries(servicePages).map(([slug, p]) => `<a href="/services/${slug}/">${p.title}</a>`).join('')}</div></div><div class="nav-item has-menu"><button class="nav-trigger" aria-expanded="false">Industries <span>⌄</span></button><div class="dropdown industries-menu">${Object.entries(industryPages).map(([slug, p]) => `<a href="/industries/${slug}/">${p.title}</a>`).join('')}</div></div><a class="nav-link" href="/careers/">Careers</a><a class="nav-link" href="/contact/">Contact</a></div><a class="btn quote-btn" href="/contact/">Request a Quote</a></nav></header>`;

const footer = `<footer><div class="container footer-grid"><div class="footer-brand"><a href="/" class="footer-logo"><img src="/assets/Skylink%20Corridor%20logo%20New.png" alt="Skylink Corridor"></a><p class="footer-desc"><strong>Skylink Corridor</strong><br>Integrated Logistics • Transportation • Warehousing • Freight Forwarding • Cross-Border Logistics • Supply Chain Solutions</p><div class="footer-social-section"><div class="footer-subhead">Follow Us</div><div class="social-links" aria-label="Social media"><a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a><a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.5l.5-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a><a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a></div></div></div><div><h3>Quick Links</h3><a href="/about/">About Us</a><a href="/services/">Services</a><a href="/industries/">Industries</a><a href="/about/technology/">Technology</a><a href="/careers/">Careers</a><a href="/contact/">Contact</a></div><div><h3>Services</h3><a href="/services/intermodal/">Intermodal Transportation</a><a href="/services/truck-brokerage/">Truck Brokerage</a><a href="/services/asset-trucking/">Asset Trucking</a><a href="/services/dedicated-trucking/">Dedicated Trucking</a><a href="/services/international-freight/">International Freight</a><a href="/services/cross-border/">Cross-Border Logistics</a></div><div class="footer-contact"><h3>Contact</h3><p class="contact-title"><strong>Head Office</strong><br>Karachi, Pakistan</p><p><a href="mailto:info@skylinkcorridor.com">✉ info@skylinkcorridor.com</a></p><p><a href="tel:+92XXXXXXXXXX">☎ +92 XXX XXXXXXX</a></p></div></div><div class="footer-bottom container"><span>© 2026 Skylink Corridor. All Rights Reserved.</span><span><a href="/privacy/">Privacy Policy</a><a href="/terms/">Terms of Service</a></span></div></footer>`;

const type = document.body.dataset.type;
const slug = document.body.dataset.slug;
const page = (type === 'service' ? servicePages : industryPages)[slug];
if (!page) {
  document.body.innerHTML = '<main class="missing-page"><h1>Page not found</h1><a href="/">Return home</a></main>';
} else {
  const label = type === 'service' ? 'Our Services' : 'Industries We Serve';
  const overviewTitle = type === 'service' ? 'Service Overview' : 'Industry Overview';
  const sectionTitle = type === 'service' ? 'Industries We Serve with This Solution' : 'Solutions for This Industry';
  const descriptions = [
    'Coordinated planning and execution built around your requirements.',
    'Clear milestones and proactive communication throughout every movement.',
    'Experienced logistics professionals managing day-to-day operations.',
    'Flexible capacity that scales with changing business demand.'
  ];

  const benefitsList = (page.benefits && page.benefits.length ? page.benefits : [
    'Reliable execution designed around operational priorities',
    'Reduced delays and avoidable supply chain cost',
    'Clear visibility from planning through delivery',
    'Flexible capacity for changing business demand',
    'Dedicated support and proactive exception management'
  ]).map(b => `<li>${b}</li>`).join('');

  const offeringsTitle = type === 'service' ? 'Service Offerings' : 'What We Offer';
  const offeringsList = page.offerings && page.offerings.length
    ? page.offerings.map(o => `<article><b>•</b><div><h4>${o.title}</h4><p>${o.desc}</p></div></article>`).join('')
    : (page.focus || []).map((item, i) => `<article><b>•</b><div><h4>${item}</h4><p>${descriptions[i] || ''}</p></div></article>`).join('');

  document.title = `${page.title} | Skylink Corridors`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = page.desc;

  document.body.innerHTML = `${nav}<main><section class="detail-hero"><img src="/assets/${page.image}" alt="${page.title}"><div class="detail-hero-overlay"></div><div class="container detail-hero-content"><div class="eyebrow">${label}</div><h1>${page.title}</h1><p>${page.tagline}</p><a class="btn btn-primary" href="/contact/">Request a Quote <span>→</span></a></div></section><section class="detail-overview"><div class="container detail-grid"><div><h2>${overviewTitle}</h2><p class="detail-intro">${page.desc}</p><h3>Key Benefits</h3><ul class="benefit-list">${benefitsList}</ul></div><div><h3>${offeringsTitle}</h3><div class="offer-list">${offeringsList}</div></div></div></section><section class="detail-related"><div class="container"><h2>${sectionTitle}</h2><div class="detail-tags">${page.tags.map(tag => `<span>${tag}</span>`).join('')}</div></div></section><section class="cta detail-cta"><div class="container"><h2>Ready to Strengthen Your Supply Chain?</h2><p>Talk to our logistics team about a solution designed for your operation.</p><a class="btn btn-white" href="/contact/">Contact Our Logistics Experts</a></div></section></main>${footer}`;
}
