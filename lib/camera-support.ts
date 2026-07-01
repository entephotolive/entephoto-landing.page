// lib/camera-support.ts

interface CameraSupportCategory {
  id: string;
  name: string;
  description: string;
  brands: string[];
}

export interface CameraBrand {
  slug: string;
  name: string;
  h1: string;
  intro: string;
  metaDescription: string;
  compatibleModels: string[];
  connectionMethods: string[];
  workflow: string[];
  faqs: { question: string; answer: string }[];
}

export const cameraBrands: CameraBrand[] = [
  {
    slug: "canon",
    name: "Canon",
    h1: "Canon Camera Photo Delivery with Entephoto",
    intro: "Use Entephoto with your Canon EOS, R-series, and 1D bodies to instantly deliver event photos to guests. From direct FTP to tethered laptop workflows, Canon shooters rely on our platform for high-speed delivery.",
    metaDescription: "Learn how to connect Canon cameras with Entephoto for instant event photo delivery. Compatible with EOS R3, R5, R6, 1D X, and other Canon models.",
    compatibleModels: ["EOS R3", "EOS R5 / R5 C", "EOS R6 / R6 Mark II", "EOS R8", "EOS-1D X Mark III", "EOS 5D Mark IV", "Most Wi-Fi enabled Canon bodies"],
    connectionMethods: ["Direct FTP transfer (via WFT transmitter or built-in)", "Tethered to laptop (EOS Utility)", "Smartphone bridge via Canon Camera Connect"],
    workflow: [
      "Connect your Canon camera to the venue Wi-Fi or a dedicated hotspot.",
      "Set up FTP transfer rules in the camera's network menu to send JPEGs to the Entephoto endpoint.",
      "Shoot as normal. The camera automatically pushes medium-resolution JPEGs to our server.",
      "Entephoto's AI processes the Canon files and routes them to guest galleries instantly."
    ],
    faqs: [
      { question: "Does Entephoto support Canon RAW files?", answer: "We recommend transmitting JPEGs for real-time delivery due to file size and speed. You can shoot RAW+JPEG and keep the RAWs on your card." },
      { question: "Can I use Canon's built-in FTP?", answer: "Yes, many modern Canon bodies like the R5 and R3 have excellent built-in FTP clients that integrate directly with Entephoto." }
    ]
  },
  {
    slug: "sony",
    name: "Sony",
    h1: "Sony Camera Photo Delivery with Entephoto",
    intro: "Connect your Sony Alpha cameras to Entephoto for blazingly fast event photo delivery. Sony's advanced networking makes real-time delivery seamless for event professionals.",
    metaDescription: "Use Entephoto with your Sony Alpha cameras for instant photo delivery. Compatible with A1, A9 II, A7 IV, A7R V, and more.",
    compatibleModels: ["Sony A1", "Sony A9 II / A9 III", "Sony A7S III", "Sony A7 IV", "Sony A7R V", "Most modern E-mount bodies"],
    connectionMethods: ["Background FTP transfer", "Sony Imaging Edge mobile transfer", "Wired tethering to Capture One or Lightroom"],
    workflow: [
      "Configure your Sony Alpha camera's FTP transfer function.",
      "Assign a custom button to 'Transfer to FTP' for manual selection, or enable automatic background transfer for all shots.",
      "The camera connects to the Entephoto server and uploads files while you continue shooting.",
      "Entephoto processes and delivers the images to your guests automatically."
    ],
    faqs: [
      { question: "Is the Sony FTP connection reliable at crowded events?", answer: "Yes, though we recommend using the 5GHz band on a dedicated hotspot, or a wired LAN connection on supported models like the A9 and A1, for maximum stability." },
      { question: "Can I selectively send photos?", answer: "Yes, Sony's transfer menu allows you to press a button to send only the images you select." }
    ]
  },
  {
    slug: "nikon",
    name: "Nikon",
    h1: "Nikon Camera Photo Delivery with Entephoto",
    intro: "Integrate your Nikon Z series or DSLR cameras with Entephoto. Whether you rely on NX Tether, SnapBridge, or direct WT transmitters, Nikon shooters can power live delivery workflows.",
    metaDescription: "Discover how to use Nikon cameras with Entephoto for live photo sharing. Compatible with Z9, Z8, Z6 II, D850, and other Nikon bodies.",
    compatibleModels: ["Nikon Z9", "Nikon Z8", "Nikon Z6 II / Z7 II", "Nikon Zf", "Nikon D6", "Nikon D850"],
    connectionMethods: ["Direct FTP transfer (Z9/Z8)", "Nikon SnapBridge auto-transfer", "NX Tether to laptop hot folder"],
    workflow: [
      "For Z9/Z8, configure the built-in network menu for FTP upload to Entephoto.",
      "For other models, use a laptop running NX Tether to pull images into a watched folder.",
      "The Entephoto app monitors the folder and uploads JPEGs automatically.",
      "AI face recognition matches Nikon files and delivers them to the right guests."
    ],
    faqs: [
      { question: "Does Nikon SnapBridge work for this?", answer: "SnapBridge can transfer 2MP files to your phone automatically. You can then use the Entephoto mobile app to upload those to the cloud." },
      { question: "Do I need a WT-7 transmitter?", answer: "For older bodies like the D850, a WT-7 provides the fastest direct upload. Newer bodies like the Z9 have networking built-in." }
    ]
  },
  {
    slug: "fujifilm",
    name: "Fujifilm",
    h1: "Fujifilm Camera Photo Delivery with Entephoto",
    intro: "Bring Fujifilm's legendary color science straight to your guests' phones in real time. Entephoto works smoothly with X-series and GFX cameras for event delivery.",
    metaDescription: "Learn how to set up Fujifilm cameras with Entephoto for instant delivery. Supports X-T5, X-H2, GFX 100 II, and more.",
    compatibleModels: ["Fujifilm X-T5", "Fujifilm X-H2 / X-H2S", "Fujifilm X-T4", "Fujifilm GFX 100 II", "Fujifilm GFX 50S II"],
    connectionMethods: ["Fujifilm XApp bridge", "Tethered shooting (Capture One)", "File Transmitter grip FTP (e.g., FT-XH)"],
    workflow: [
      "Shoot with your preferred Film Simulation applied to the JPEG.",
      "Use the FT-XH grip for direct FTP, or transfer images to a laptop via tethering.",
      "Entephoto picks up the uploaded JPEGs and processes them.",
      "Guests receive beautiful, straight-out-of-camera Fujifilm colors."
    ],
    faqs: [
      { question: "Can I send photos with Film Simulations applied?", answer: "Absolutely. We deliver exactly the JPEG that your camera produces, preserving the Fujifilm look." },
      { question: "Do I need the File Transmitter grip?", answer: "For the fastest live direct-from-camera upload, yes. Otherwise, you can use a laptop tether or the XApp." }
    ]
  }
];

export function getCameraBrandBySlug(slug: string): CameraBrand | undefined {
  return cameraBrands.find((brand) => brand.slug === slug);
}
