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
    tagline: 'Moving Products. Supporting Every Store.',
    image: 'warehouse.jpg',
    desc: 'Skylink Corridors provides road freight solutions for retailers, distributors, wholesalers, and consumer goods businesses. We coordinate the transportation of retail products from suppliers and distribution centers to stores, warehouses, and customer locations, with a focus on secure handling, efficient routing, timely deliveries, and consistent distribution support.',
    benefits: [
      'Secure product handling',
      'Reliable scheduled deliveries',
      'Efficient route planning',
      'Distribution flexibility',
      'Reduced delivery delays'
    ],
    offerings: [
      {
        title: 'Retail Store Distribution',
        desc: 'Road transportation of products from warehouses and distribution centers to retail outlets.'
      },
      {
        title: 'Wholesale & Distributor Freight',
        desc: 'Scheduled movement of consumer goods between suppliers, wholesalers, distributors, and retail networks.'
      },
      {
        title: 'Multi-Location Deliveries',
        desc: 'Coordinated deliveries to multiple stores or customer locations through optimized routes and delivery planning.'
      }
    ],
    tags: ['Transportation', 'Warehousing', 'Cross Dock', 'Final Mile']
  },
  ecommerce: {
    title: 'E-Commerce Logistics',
    tagline: 'Connecting Every Order to Its Destination.',
    image: 'ecommerce.jpg',
    desc: 'Skylink Corridors provides flexible road freight solutions for e-commerce businesses, supporting the movement of inventory, parcels, and commercial shipments between suppliers, fulfillment centers, warehouses, distribution hubs, and delivery locations. Our coordinated road transportation services help businesses maintain reliable delivery schedules, improve shipment visibility, and efficiently manage growing distribution requirements.',
    benefits: [
      'Flexible transportation capacity',
      'Reliable scheduled deliveries',
      'End-to-end shipment visibility',
      'Efficient route planning',
      'Scalable distribution support'
    ],
    offerings: [
      {
        title: 'Fulfillment Center Transportation',
        desc: 'Movement of inventory between suppliers, warehouses, and fulfillment facilities.'
      },
      {
        title: 'Last-Mile & Distribution Support',
        desc: 'Coordinated road transportation for retail and customer delivery networks.'
      },
      {
        title: 'Reverse Logistics',
        desc: 'Efficient movement of returns, replacements, and recovered products.'
      }
    ],
    tags: ['Warehousing', 'Fulfillment', 'Transportation', 'Reverse Logistics']
  },
  cpg: {
    title: 'Consumer Packaged Goods (CPG) Logistics',
    tagline: 'Reliable Road Freight for Fast-Moving Markets.',
    image: 'warehouse.jpg',
    desc: 'Our CPG road freight solutions support manufacturers, distributors, wholesalers, and retailers with dependable transportation for high-volume consumer products. Skylink Corridors coordinates regular replenishment, regional distribution, and intercity transportation to help businesses maintain product availability and consistent supply across their distribution networks.',
    benefits: [
      'High-volume freight capacity',
      'Scheduled replenishment',
      'Optimized delivery routes',
      'Multi-location distribution',
      'Improved shipment coordination'
    ],
    offerings: [
      {
        title: 'FMCG Road Distribution',
        desc: 'Transportation of consumer products across wholesale, retail, and commercial channels.'
      },
      {
        title: 'Retail Replenishment',
        desc: 'Scheduled movement of inventory to distribution centers and retail locations.'
      },
      {
        title: 'Cross-Docking Transportation',
        desc: 'Fast transfer of goods between inbound and outbound road movements.'
      }
    ],
    tags: ['Warehousing', 'Retail Consolidation', 'FTL & LTL', 'Cross Dock']
  },
  'durable-goods': {
    title: 'Durable Goods Logistics',
    tagline: 'Moving Valuable Goods with Extra Care.',
    image: 'warehouse.jpg',
    desc: 'Skylink Corridors provides specialized road freight solutions for appliances, electronics, furniture, machinery, and other durable goods. Our transportation planning and careful handling procedures support safe movement between manufacturers, warehouses, distributors, dealers, and end destinations.',
    benefits: [
      'Secure cargo handling',
      'Suitable vehicle planning',
      'Reduced handling risks',
      'Scheduled delivery coordination',
      'Shipment tracking and visibility'
    ],
    offerings: [
      {
        title: 'Heavy & Bulky Goods Transportation',
        desc: 'Road transportation for oversized and high-value products.'
      },
      {
        title: 'Dealer & Retail Distribution',
        desc: 'Coordinated deliveries to dealer and retail networks.'
      },
      {
        title: 'White-Glove Road Delivery',
        desc: 'Appointment-based transportation with enhanced handling and delivery coordination.'
      }
    ],
    tags: ['Warehousing', 'FTL', 'Big & Bulky', 'Final Mile']
  },
  automotive: {
    title: 'Automotive Logistics',
    tagline: 'Driving Automotive Supply Chains Forward.',
    image: 'transport.jpg',
    desc: 'Our automotive road freight solutions support OEMs, component manufacturers, dealerships, distributors, and aftermarket businesses with reliable transportation for vehicles, spare parts, components, and production materials. Skylink Corridors coordinates scheduled movements and optimized routes to support production continuity and timely distribution.',
    benefits: [
      'Time-critical transportation',
      'Reliable scheduled movements',
      'Parts and component coordination',
      'Route optimization',
      'Real-time shipment monitoring'
    ],
    offerings: [
      {
        title: 'Automotive Parts Transportation',
        desc: 'Movement of components and spare parts between suppliers, plants, warehouses, and dealers.'
      },
      {
        title: 'JIT Road Freight',
        desc: 'Scheduled transportation supporting just-in-time manufacturing requirements.'
      },
      {
        title: 'Aftermarket Distribution',
        desc: 'Road distribution of replacement parts and automotive products.'
      }
    ],
    tags: ['Dedicated Trucking', 'Cross Dock', 'FTL & LTL', 'Cross-Border']
  },
  paper: {
    title: 'Paper & Packaging Logistics',
    tagline: 'Protecting Every Roll. Delivering Every Sheet.',
    image: 'warehouse.jpg',
    desc: 'Skylink Corridors provides road freight solutions for paper manufacturers, printers, packaging companies, converters, and industrial distributors. We coordinate the transportation of rolls, sheets, pulp, and packaging materials with appropriate loading, securing, route planning, and delivery procedures to help protect cargo throughout transit.',
    benefits: [
      'Careful cargo handling',
      'Secure loading procedures',
      'Moisture-risk awareness',
      'Efficient route planning',
      'Reliable scheduled deliveries'
    ],
    offerings: [
      {
        title: 'Roll & Sheet Transportation',
        desc: 'Road movement of paper rolls, sheets, and related products.'
      },
      {
        title: 'Industrial Paper Distribution',
        desc: 'Scheduled distribution to manufacturers, converters, wholesalers, and customers.'
      },
      {
        title: 'Packaging Material Freight',
        desc: 'Transportation of packaging materials and production inputs.'
      }
    ],
    tags: ['Warehousing', 'FTL', 'Dedicated Trucking', 'Cross Dock']
  },
  '3pl': {
    title: '3PL Transportation Capacity Solutions',
    tagline: 'Flexible Road Capacity When You Need It.',
    image: 'transport.jpg',
    desc: 'Skylink Corridors supports third-party logistics providers with flexible road freight capacity for customer requirements, seasonal peaks, overflow volumes, and contracted transportation programs. Our corridor-based transportation network enables 3PL providers to expand their service capabilities while maintaining coordinated shipment execution and delivery performance.',
    benefits: [
      'Flexible transportation capacity',
      'Support during peak demand',
      'Reduced fleet dependency',
      'Carrier coordination',
      'Scalable road freight solutions'
    ],
    offerings: [
      {
        title: 'Dedicated Road Capacity',
        desc: 'Allocated transportation resources for recurring customer requirements.'
      },
      {
        title: 'Peak & Overflow Transportation',
        desc: 'Additional capacity during seasonal or unexpected demand.'
      },
      {
        title: '3PL Network Support',
        desc: 'Coordinated road freight execution supporting wider logistics networks.'
      }
    ],
    tags: ['Dedicated Trucking', 'FTL & LTL', 'Cross-Border', 'Final Mile']
  },
  chemical: {
    title: 'Chemical Logistics',
    tagline: 'Safe & Compliant Road Freight for Chemicals.',
    image: 'transport.jpg',
    desc: 'Skylink Corridors provides controlled road freight solutions for hazardous and non-hazardous chemical products, subject to applicable regulations and shipment requirements. Our approach emphasizes appropriate vehicle selection, documentation, cargo handling, route planning, trained personnel, and safety procedures for responsible transportation.',
    benefits: [
      'Compliance-focused transportation',
      'Appropriate vehicle selection',
      'Safety-driven handling',
      'Shipment documentation support',
      'Route and risk planning'
    ],
    offerings: [
      {
        title: 'Hazardous Chemical Transportation',
        desc: 'Road movement of regulated chemical cargo using appropriate procedures and equipment.'
      },
      {
        title: 'Industrial Chemical Distribution',
        desc: 'Scheduled transportation between manufacturers, warehouses, and industrial customers.'
      },
      {
        title: 'Chemical Transport Documentation',
        desc: 'Coordination of shipment and regulatory documentation requirements.'
      }
    ],
    tags: ['Dedicated Transport', 'Temperature Control', 'Warehousing', 'Cross-Border']
  },
  'private-equity': {
    title: 'Private Equity & Portfolio Logistics',
    tagline: 'Smarter Road Freight for Growing Businesses.',
    image: 'about.jpg',
    desc: 'Skylink Corridors supports investment firms and portfolio companies with road freight solutions designed around operational efficiency, scalability, and supply chain performance. We help businesses coordinate transportation networks, consolidate road freight requirements, and develop practical transportation models aligned with changing business volumes.',
    benefits: [
      'Transportation cost visibility',
      'Network optimization',
      'Scalable capacity',
      'Performance monitoring',
      'Operational efficiency'
    ],
    offerings: [
      {
        title: 'Road Freight Network Optimization',
        desc: 'Review and optimization of transportation routes and distribution flows.'
      },
      {
        title: 'Freight Cost Management',
        desc: 'Transportation planning and consolidation to improve cost efficiency.'
      },
      {
        title: 'Portfolio Logistics Support',
        desc: 'Scalable road freight services for businesses undergoing expansion or operational transformation.'
      }
    ],
    tags: ['Transportation', 'Warehousing', 'Technology', 'Reporting']
  },
  healthcare: {
    title: 'Healthcare Logistics',
    tagline: 'Reliable Road Freight When Every Shipment Matters.',
    image: 'transport.jpg',
    desc: 'Our healthcare road freight solutions support pharmaceutical companies, medical device manufacturers, hospitals, clinics, laboratories, and healthcare distributors. Skylink Corridors coordinates secure and time-sensitive transportation for medical supplies, pharmaceutical products, equipment, and other healthcare cargo while supporting applicable handling and temperature requirements.',
    benefits: [
      'Time-sensitive transportation',
      'Secure cargo handling',
      'Temperature-aware transportation',
      'Shipment visibility',
      'Compliance-focused operations'
    ],
    offerings: [
      {
        title: 'Pharmaceutical Road Freight',
        desc: 'Transportation of pharmaceutical products subject to applicable handling requirements.'
      },
      {
        title: 'Medical Equipment Transportation',
        desc: 'Secure movement of medical devices, laboratory equipment, and healthcare supplies.'
      },
      {
        title: 'Temperature-Controlled Road Freight',
        desc: 'Controlled transportation for temperature-sensitive healthcare shipments.'
      }
    ],
    tags: ['Cold Chain', 'Dedicated Transport', 'Warehousing', 'Final Mile']
  },
  'food-beverage': {
    title: 'Food & Beverage Logistics',
    tagline: 'Keeping Products Fresh from Source to Destination.',
    image: 'transport.jpg',
    desc: 'Skylink Corridors provides road freight solutions for food manufacturers, distributors, retailers, supermarkets, restaurants, and food service businesses. Our transportation planning supports chilled, frozen, and ambient products through appropriate vehicle selection, route planning, temperature management, and scheduled distribution.',
    benefits: [
      'Temperature-managed transportation',
      'Freshness-focused handling',
      'Reliable delivery schedules',
      'Route optimization',
      'Reduced transit and spoilage risks'
    ],
    offerings: [
      {
        title: 'Cold Chain Road Freight',
        desc: 'Transportation of chilled and frozen food products under appropriate temperature conditions.'
      },
      {
        title: 'Food Distribution',
        desc: 'Scheduled road distribution to retailers, supermarkets, restaurants, and food service locations.'
      },
      {
        title: 'Retail Replenishment Freight',
        desc: 'Regular inventory movement supporting continuous product availability.'
      }
    ],
    tags: ['Temperature Controlled', 'Warehousing', 'FTL', 'Retail Delivery']
  },
  building: {
    title: 'Building Products & Materials Logistics',
    tagline: 'Keeping Construction Supply Chains Moving.',
    image: 'transport.jpg',
    desc: 'Skylink Corridors provides road freight solutions for construction companies, infrastructure developers, manufacturers, and building material suppliers. We coordinate transportation of cement, steel, timber, pipes, glass, prefabricated materials, and other project cargo through suitable vehicles, planned routes, and scheduled site deliveries.',
    benefits: [
      'Heavy cargo transportation',
      'Project-based scheduling',
      'Suitable vehicle planning',
      'Construction-site delivery coordination',
      'Reliable material movement'
    ],
    offerings: [
      {
        title: 'Construction Material Transportation',
        desc: 'Road movement of building materials and project supplies.'
      },
      {
        title: 'Heavy & Oversized Cargo Movement',
        desc: 'Transportation planning for heavy, bulky, and oversized materials.'
      },
      {
        title: 'Project Site Logistics',
        desc: 'Coordinated deliveries and scheduled transportation directly to project sites.'
      }
    ],
    tags: ['Flatbed Transport', 'Dedicated Trucking', 'Warehousing', 'Final Mile']
  },
  glass: {
    title: 'Glass Logistics',
    tagline: 'Moving Fragile Glass with Precision.',
    image: 'transport.jpg',
    desc: 'Skylink Corridors offers specialized road freight solutions for architectural, automotive, industrial, commercial, and specialty glass products. Our transportation approach focuses on secure positioning, protective handling, suitable vehicle selection, careful loading and unloading, and route planning to minimize the risk of damage during transit.',
    benefits: [
      'Fragile cargo handling',
      'Secure loading and positioning',
      'Suitable transportation equipment',
      'Careful route planning',
      'Reduced breakage risk'
    ],
    offerings: [
      {
        title: 'Architectural Glass Transportation',
        desc: 'Road freight for construction and architectural glass products.'
      },
      {
        title: 'Protective Handling & Crating',
        desc: 'Coordination of appropriate packaging, securing, and loading procedures.'
      },
      {
        title: 'Project Glass Distribution',
        desc: 'Scheduled transportation to construction sites, fabricators, and project locations.'
      }
    ],
    tags: ['Dedicated Transport', 'Special Equipment', 'Warehousing', 'Final Mile']
  },
  'wine-spirits': {
    title: 'Wine, Spirits & Brewery Logistics',
    tagline: 'Secure Beverage Transportation from Source to Market.',
    image: 'transport.jpg',
    desc: 'Skylink Corridors provides specialized road freight coordination for beverage manufacturers, importers, distributors, retailers, and hospitality businesses, subject to applicable laws, permits, and regulatory requirements. Our services support secure transportation, scheduled distribution, inventory movement, and controlled handling of packaged and bulk beverage products.',
    benefits: [
      'Secure cargo transportation',
      'Regulatory documentation support',
      'Scheduled distribution',
      'Inventory movement coordination',
      'Shipment visibility'
    ],
    offerings: [
      {
        title: 'Beverage Road Distribution',
        desc: 'Transportation of packaged beverage products across approved distribution networks.'
      },
      {
        title: 'Regulated Cargo Transportation',
        desc: 'Coordination of transportation requirements for regulated beverage shipments.'
      },
      {
        title: 'Hospitality & Event Deliveries',
        desc: 'Scheduled road freight support for approved hospitality and event-related requirements.'
      }
    ],
    tags: ['Temperature Controlled', 'Warehousing', 'Retail Delivery', 'FTL']
  }
};

const nav = `<header class="site-header"><nav class="navbar container" aria-label="Main navigation"><a class="brand" href="/"><img src="/assets/Skylink%20Corridor%20logo%20New.png" alt="Skylink Corridors"></a><button class="menu-toggle" aria-label="Open navigation" aria-expanded="false"><span></span><span></span><span></span></button><div class="nav-wrap"><div class="nav-item has-menu"><a class="nav-link nav-trigger" href="/about/">About Us <span>⌄</span></a><div class="dropdown about-menu"><a href="/about/story/">Our Story</a><a href="/about/leadership/">Leadership</a><a href="/about/values/">Our Values</a><a href="/about/technology/">Technology &amp; Innovation</a><a href="/about/sustainability/">Sustainability</a><a href="/about/news/">News</a><a href="/about/portfolio/">Portfolio</a></div></div><div class="nav-item has-menu"><a class="nav-link nav-trigger" href="/services/">Services <span>⌄</span></a><div class="dropdown services-menu">${Object.entries(servicePages).map(([slug, p]) => `<a href="/services/${slug}/">${p.title}</a>`).join('')}</div></div><div class="nav-item has-menu"><a class="nav-link nav-trigger" href="/industries/">Industries <span>⌄</span></a><div class="dropdown industries-menu">${Object.entries(industryPages).map(([slug, p]) => `<a href="/industries/${slug}/">${p.title}</a>`).join('')}</div></div><a class="nav-link" href="/careers/">Careers</a><a class="nav-link" href="/contact/">Contact</a></div><a class="btn btn-primary quote-btn" href="/contact/">Request a Quote</a></nav></header>`;

const footer = `<footer><div class="container footer-grid"><div class="footer-brand"><a href="/" class="footer-logo"><img src="/assets/Skylink%20Corridor%20logo%20New.png" alt="Skylink Corridor"></a><p class="footer-desc">Your trusted partner for integrated logistics, transportation, warehousing, freight forwarding, and supply chain solutions across Pakistan, Afghanistan &amp; Central Asia.</p><div class="footer-social-section"><div class="footer-subhead">Follow Us</div><div class="social-links" aria-label="Social media"><a href="https://www.linkedin.com/company/skylink-corridors/home/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" fill="currentColor" stroke="none"/><rect x="2" y="9" width="4" height="12" fill="currentColor" stroke="none"/><circle cx="4" cy="4" r="2" fill="currentColor" stroke="none"/></svg></a><a href="https://www.facebook.com/people/Skylink-Corridors-Private-Limited/61594321419321/?rdid=b9bEHVSRyUhgMFS6&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BtmHH6sUE%2F" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.5l.5-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a><a href="https://www.instagram.com/skylinkcorridors?stkn=azJibXYzM2Rkdzc2" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a></div></div></div><div><h3>Quick Links</h3><a href="/about/">About Us</a><a href="/services/">Services</a><a href="/industries/">Industries</a><a href="/about/technology/">Technology</a><a href="/careers/">Careers</a><a href="/contact/">Contact</a></div><div><h3>Services</h3><a href="/services/intermodal/">Intermodal Transportation</a><a href="/services/truck-brokerage/">Truck Brokerage</a><a href="/services/asset-trucking/">Asset Trucking</a><a href="/services/dedicated-trucking/">Dedicated Trucking</a><a href="/services/international-freight/">International Freight</a><a href="/services/cross-border/">Cross-Border Logistics</a></div><div class="footer-contact"><h3>Contact</h3><p class="contact-title"><strong>Head Office</strong><br><span class="footer-pin">📍</span> D60, Block-4, Kehkashan Clifton<br>Karachi, Pakistan</p><p class="footer-phone-row"><a href="tel:+9221111555401" class="phone-nowrap">☎ UAN: (021) 111 555 401</a></p><p class="footer-email-row"><a href="mailto:info@skylinkcorridor.com">✉ info@skylinkcorridor.com</a></p></div></div><div class="footer-bottom container"><span>© 2026 Skylink Corridor. All Rights Reserved.</span><span><a href="/privacy/">Privacy Policy</a><a href="/terms/">Terms of Service</a></span></div></footer>`;

const type = document.body.dataset.type;
const slug = document.body.dataset.slug;
const page = (type === 'service' ? servicePages : industryPages)[slug];
if (!page) {
  document.body.innerHTML = '<main class="missing-page"><h1>Page not found</h1><a href="/">Return home</a></main>';
} else {
  const label = type === 'service' ? 'Our Services' : 'Industries We Serve';
  const overviewTitle = 'Service Overview';
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

  const offeringsTitle = type === 'service' ? 'Service Offerings' : 'Specialized Service Offerings';
  const offeringsList = page.offerings && page.offerings.length
    ? page.offerings.map(o => `<article><b>•</b><div><h4>${o.title}</h4><p>${o.desc}</p></div></article>`).join('')
    : (page.focus || []).map((item, i) => `<article><b>•</b><div><h4>${item}</h4><p>${descriptions[i] || ''}</p></div></article>`).join('');

  document.title = `${page.title} | Skylink Corridors`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = page.desc;

  document.body.innerHTML = `${nav}<main><section class="detail-hero"><img src="/assets/${page.image}" alt="${page.title}"><div class="detail-hero-overlay"></div><div class="container detail-hero-content"><div class="eyebrow">${label}</div><h1>${page.title}</h1><p>${page.tagline}</p><a class="btn btn-primary" href="/contact/">Request a Quote <span>→</span></a></div></section><section class="detail-overview"><div class="container detail-grid"><div><h2>${overviewTitle}</h2><p class="detail-intro">${page.desc}</p><h3>Key Benefits</h3><ul class="benefit-list">${benefitsList}</ul></div><div><h3>${offeringsTitle}</h3><div class="offer-list">${offeringsList}</div></div></div></section><section class="detail-related"><div class="container"><h2>${sectionTitle}</h2><div class="detail-tags">${page.tags.map(tag => `<span>${tag}</span>`).join('')}</div></div></section><section class="cta detail-cta"><div class="container"><h2>Ready to Strengthen Your Supply Chain?</h2><p>Talk to our logistics team about a solution designed for your operation.</p><a class="btn btn-white" href="/contact/">Contact Our Logistics Experts</a></div></section></main>${footer}`;
}
