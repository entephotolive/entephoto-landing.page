// lib/knowledge-articles.ts
// Central content registry for all knowledge hub articles and dedicated landing pages.

export interface FAQ {
  question: string;
  answer: string;
}

export interface Section {
  heading: string;
  body: string;
}

export interface KnowledgeArticle {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: Section[];
  benefits: string[];
  faqs: FAQ[];
  relatedSlugs: string[];
  publishedAt: string;
  updatedAt: string;
}

export const articles: KnowledgeArticle[] = [
  {
    slug: "instant-photo-delivery",
    title: "Instant Photo Delivery | Entephoto",
    metaDescription:
      "Learn how Entephoto delivers event photos instantly from the photographer's camera to every guest's phone using AI face recognition — no searching, no waiting.",
    h1: "Instant Photo Delivery: Get Your Event Photos in Seconds",
    intro:
      "Gone are the days of waiting weeks for a USB drive or a generic gallery link. Entephoto's instant photo delivery system uses AI face recognition to push each photo directly to the person in it — the moment the shutter clicks.",
    sections: [
      {
        heading: "How Instant Photo Delivery Works",
        body: "Our system connects directly to the photographer's camera or upload workflow. As each image is uploaded, our AI engine scans it for faces, matches them against registered attendees, and immediately pushes the photo to the correct guest's personal gallery. The entire process takes under 60 seconds per photo.",
      },
      {
        heading: "Why Speed Matters at Events",
        body: "At weddings, corporate events, and live shows, guests want to share their moments in real time. A photo that arrives the next day is already old news. Instant delivery keeps your event alive on social media, creating organic buzz that no ad campaign can replicate.",
      },
      {
        heading: "Secure and Private by Design",
        body: "Each guest only receives photos of themselves. Your other guests' photos remain private. Entephoto uses end-to-end encrypted delivery and never sells or shares biometric data.",
      },
      {
        heading: "How Photographers Use It",
        body: "Photographers upload in bulk or connect via our API. The platform handles all distribution automatically — freeing them to focus on capturing great shots instead of managing a delivery spreadsheet.",
      },
    ],
    benefits: [
      "Photos delivered in under 60 seconds",
      "Guests receive only their own photos",
      "Zero manual sorting by the photographer",
      "Works at weddings, corporate events, concerts, and sports meets",
      "Mobile-first: photos land directly in the guest's phone gallery",
      "GDPR-compliant face recognition with opt-in consent flow",
    ],
    faqs: [
      {
        question: "How quickly does Entephoto deliver photos?",
        answer:
          "Typically within 30–60 seconds of the photographer uploading a photo. Delivery speed depends on internet connectivity at the venue.",
      },
      {
        question: "Do guests need to download an app?",
        answer:
          "No app needed. Guests receive a secure link via WhatsApp or SMS. They simply click, verify their identity with a selfie, and access their personal gallery.",
      },
      {
        question: "What happens if the AI misidentifies someone?",
        answer:
          "Guests can flag mismatches from their gallery. Our team reviews and corrects these within minutes. Accuracy rates exceed 99% under good lighting conditions.",
      },
      {
        question: "Can Entephoto handle large events of 1,000+ people?",
        answer:
          "Yes. Our infrastructure is built for scale. We have successfully handled events with up to 5,000 registered attendees with zero downtime.",
      },
    ],
    relatedSlugs: [
      "live-event-photo-sharing",
      "ai-face-recognition",
      "photo-delivery-for-photographers",
    ],
    publishedAt: "2024-01-01",
    updatedAt: "2025-06-01",
  },
  {
    slug: "live-event-photo-sharing",
    title: "Live Event Photo Sharing | Entephoto",
    metaDescription:
      "Entephoto enables live, real-time photo sharing at events. Guests receive their photos instantly during the event — not days later.",
    h1: "Live Event Photo Sharing: Keep the Moment Alive in Real Time",
    intro:
      "Live event photo sharing means your guests can post, share, and relive moments while the event is still happening. Entephoto makes this possible through AI-powered, real-time photo delivery directly to every attendee.",
    sections: [
      {
        heading: "What Is Live Event Photo Sharing?",
        body: "Live event photo sharing is the process of distributing event photos to attendees in real time — as the event unfolds. Traditional photography workflows deliver photos hours or days after the event. Entephoto delivers within seconds.",
      },
      {
        heading: "The Technology Behind Real-Time Delivery",
        body: "Photographers upload images via our web dashboard or mobile app. Our AI engine processes each image instantly, identifies faces, and pushes photos to the correct guests' personal galleries — all within one minute of upload.",
      },
      {
        heading: "Perfect for Every Type of Event",
        body: "From intimate weddings and birthday parties to 5,000-person corporate galas and music festivals, Entephoto's live sharing platform scales seamlessly. Each guest's experience remains personal and private.",
      },
      {
        heading: "Increase Your Event's Social Reach",
        body: "When guests receive their photos in real time, they share them immediately. This generates authentic, organic social media content that dramatically increases the reach and visibility of your event brand.",
      },
    ],
    benefits: [
      "Real-time delivery during the event — not after",
      "Personal galleries for each attendee",
      "No app download required",
      "Supports 5,000+ attendees simultaneously",
      "Increases social media sharing by up to 300%",
      "Works across weddings, corporate, sports, and cultural events",
    ],
    faqs: [
      {
        question: "What makes Entephoto different from a shared Google Drive?",
        answer:
          "A shared Google Drive gives everyone access to all photos. Entephoto uses AI face recognition to give each guest only their own photos — privately, instantly, with no manual sorting.",
      },
      {
        question: "Can guests download and print their photos?",
        answer:
          "Yes. All photos in a guest's gallery are available for download in full resolution at no extra cost to the guest.",
      },
      {
        question: "Is the photo sharing live really real-time?",
        answer:
          "Delivery happens within 30–60 seconds of a photo being uploaded. This depends on the photographer's upload speed and venue internet connectivity.",
      },
    ],
    relatedSlugs: [
      "instant-photo-delivery",
      "real-time-photo-sharing",
      "wedding-photo-sharing",
    ],
    publishedAt: "2024-01-15",
    updatedAt: "2025-06-01",
  },
  {
    slug: "wedding-photo-sharing",
    title: "Wedding Photo Sharing | Entephoto",
    metaDescription:
      "Entephoto makes wedding photo sharing effortless. Every guest receives their personal wedding photos instantly, via AI face recognition — no sorting, no waiting.",
    h1: "Wedding Photo Sharing: Every Guest's Memories, Delivered Instantly",
    intro:
      "Your wedding is one of the most photographed days of your life — but most guests never see the photos taken of them. Entephoto changes that by delivering every guest's personal wedding photos directly to their phone the moment they're captured.",
    sections: [
      {
        heading: "The Problem with Traditional Wedding Photo Delivery",
        body: "Couples typically wait 4–8 weeks for edited photos. Guests either get access to a massive shared gallery — or nothing at all. Sorting 2,000 wedding photos by person is an impossible task manually.",
      },
      {
        heading: "How Entephoto Transforms the Wedding Experience",
        body: "Guests register with a selfie when they RSVP or check in. During the wedding, our AI matches every photo captured to the people in it and delivers each guest's photos privately and instantly. Your photographer can stay focused on shooting — we handle the distribution.",
      },
      {
        heading: "Privacy That Keeps Your Guests Comfortable",
        body: "Only the couple can see all photos. Each guest only sees photos of themselves. All facial data is deleted 30 days after the event. We are fully GDPR-compliant and transparent about data handling.",
      },
      {
        heading: "How Photographers Benefit",
        body: "Wedding photographers who use Entephoto report significantly happier clients, zero post-event sorting overhead, and a standout competitive advantage when pitching new bookings.",
      },
    ],
    benefits: [
      "Guests receive their wedding photos the same day",
      "Private, personal galleries for every attendee",
      "Photographer saves hours of manual sorting",
      "Full-resolution downloads available immediately",
      "GDPR-compliant with automatic data deletion",
      "Couples get a complete wedding gallery within 24 hours",
    ],
    faqs: [
      {
        question: "Does Entephoto work with any wedding photographer?",
        answer:
          "Yes. Any photographer can sign up and use Entephoto. There is no special equipment required — just an internet connection and our upload tool.",
      },
      {
        question: "What if a guest doesn't want to register their face?",
        answer:
          "Consent is completely voluntary. Guests who opt out will not have their photos matched, and they can still access the general event gallery if the couple enables it.",
      },
      {
        question: "Can we use Entephoto for a destination wedding abroad?",
        answer:
          "Yes. Entephoto is a cloud-based platform that works anywhere in the world with an internet connection.",
      },
      {
        question: "How do guests access their photos?",
        answer:
          "Guests receive a secure link via WhatsApp, SMS, or email. They click the link, verify with a selfie, and access their personal gallery instantly.",
      },
    ],
    relatedSlugs: [
      "live-event-photo-sharing",
      "instant-photo-delivery",
      "event-photo-gallery",
    ],
    publishedAt: "2024-02-01",
    updatedAt: "2025-06-01",
  },
  {
    slug: "event-photo-gallery",
    title: "Event Photo Gallery Management | Entephoto",
    metaDescription:
      "Entephoto's smart event photo gallery organizes thousands of event photos automatically using AI. Every guest gets a personal gallery — no manual sorting required.",
    h1: "Event Photo Gallery: Smart, Personalized, Instantly Organized",
    intro:
      "A traditional event photo gallery means hundreds of guests sorting through thousands of images to find themselves. Entephoto creates individual, AI-curated galleries for each attendee — organized instantly, delivered privately.",
    sections: [
      {
        heading: "What Makes an Event Photo Gallery 'Smart'?",
        body: "A smart event photo gallery uses AI face recognition to automatically group photos by person. Instead of one massive gallery, every attendee gets their own curated collection of photos in which they appear.",
      },
      {
        heading: "Gallery Features Built for Events",
        body: "Entephoto galleries include full-resolution downloads, social sharing shortcuts, a favorites feature, and a comment/reaction system. Guests can interact with their memories directly in the gallery without any additional software.",
      },
      {
        heading: "Photographer and Organizer Controls",
        body: "Organizers have a full admin dashboard: approve/reject photos before delivery, set download permissions, control watermarking, and generate download analytics to understand which photos resonate most.",
      },
      {
        heading: "Gallery Lifecycle Management",
        body: "Set your gallery to automatically expire after a defined period. All face data is purged on schedule. Photos can optionally be archived to a private S3 bucket or downloaded in bulk.",
      },
    ],
    benefits: [
      "Automatic AI curation — zero manual sorting",
      "Individual galleries for every attendee",
      "Full-resolution downloads with watermark control",
      "Social sharing built in",
      "Organizer admin dashboard with download analytics",
      "Automatic gallery expiry and data deletion",
    ],
    faqs: [
      {
        question: "How many photos can an event gallery hold?",
        answer:
          "There is no hard limit. Entephoto has managed event galleries containing over 20,000 photos across a single multi-day event.",
      },
      {
        question: "Can the photographer watermark photos before delivery?",
        answer:
          "Yes. Watermark templates can be configured per event. Watermarks are applied automatically during processing.",
      },
      {
        question: "Can guests share photos directly to Instagram from the gallery?",
        answer:
          "Yes. Each photo has a one-tap share button optimized for Instagram Stories, WhatsApp, and Facebook.",
      },
    ],
    relatedSlugs: [
      "event-photo-management",
      "wedding-photo-sharing",
      "instant-photo-delivery",
    ],
    publishedAt: "2024-02-15",
    updatedAt: "2025-06-01",
  },
  {
    slug: "ai-face-recognition",
    title: "AI Face Recognition for Events | Entephoto",
    metaDescription:
      "Entephoto uses advanced AI face recognition to automatically identify guests in event photos and deliver personalized galleries — accurately, privately, and instantly.",
    h1: "AI Face Recognition: The Technology Behind Instant Photo Delivery",
    intro:
      "Entephoto's core technology is AI face recognition built specifically for event photography — designed to work in challenging lighting, large crowds, and at high speed.",
    sections: [
      {
        heading: "How AI Face Recognition Works at Events",
        body: "Attendees register by submitting a reference selfie when they sign up or check in to the event. Our model creates a unique facial embedding — a mathematical representation of each person's face. When new event photos are uploaded, embeddings are compared and matched in milliseconds.",
      },
      {
        heading: "Accuracy in Real-World Event Conditions",
        body: "Our model is trained on diverse datasets and is specifically tuned for event conditions: low light, group shots, side profiles, and partial occlusion (hats, glasses). We achieve over 99% accuracy in well-lit conditions and over 95% in challenging environments.",
      },
      {
        heading: "Privacy-First by Architecture",
        body: "We do not store raw facial images. Only abstract mathematical embeddings are retained, and these are deleted automatically 30 days post-event. We never sell or share biometric data. Our processing is compliant with GDPR and India's DPDP Act.",
      },
      {
        heading: "Continuous Improvement",
        body: "Our AI model improves continuously with every event processed. Mismatches reported by guests directly feed back into our quality pipeline, keeping accuracy high over time.",
      },
    ],
    benefits: [
      "99%+ accuracy in well-lit conditions",
      "Works in crowds of 5,000+ people",
      "Under 100ms matching per photo",
      "No raw biometric data stored",
      "GDPR & DPDP Act compliant",
      "Continuous model improvement",
    ],
    faqs: [
      {
        question: "Is Entephoto's face recognition biased?",
        answer:
          "We actively test and audit our models for demographic bias across age, gender, and skin tone. We publish quarterly accuracy reports by demographic group.",
      },
      {
        question: "What data does Entephoto collect for face recognition?",
        answer:
          "Only a mathematical facial embedding is created from each reference selfie. The original selfie image is deleted immediately after processing. Embeddings are deleted 30 days after the event.",
      },
      {
        question: "Can I use Entephoto without enabling face recognition?",
        answer:
          "Yes. You can use Entephoto as a standard event gallery platform without enabling face recognition. Guests can manually browse the shared gallery.",
      },
    ],
    relatedSlugs: [
      "face-recognition-photo-search",
      "instant-photo-delivery",
      "live-event-photo-sharing",
    ],
    publishedAt: "2024-03-01",
    updatedAt: "2025-06-01",
  },
  {
    slug: "face-recognition-photo-search",
    title: "Face Recognition Photo Search | Entephoto",
    metaDescription:
      "Search thousands of event photos by face in seconds. Entephoto's face recognition photo search finds every photo you appear in — instantly and privately.",
    h1: "Face Recognition Photo Search: Find Every Photo of Yourself Instantly",
    intro:
      "Entephoto's face recognition photo search lets guests find every photo they appear in from a large event gallery — without scrolling through thousands of images manually.",
    sections: [
      {
        heading: "Search by Face, Not by File Name",
        body: "Traditional photo search requires tags, captions, or manual browsing. Entephoto's face search works differently: submit a selfie, and our AI instantly returns every photo in the event gallery in which you appear.",
      },
      {
        heading: "How to Use Face Search",
        body: "Guests navigate to the event gallery link, tap 'Find My Photos', take or upload a selfie, and within seconds see a curated, personal view of the entire gallery filtered to show only their photos.",
      },
      {
        heading: "Useful for Guests Who Didn't Pre-Register",
        body: "Even if a guest didn't register before the event, they can still use face search after the event to find their photos. There is no pre-registration requirement for search.",
      },
      {
        heading: "Photographer-Side Search Tools",
        body: "Photographers and organizers get access to a full face search dashboard, allowing them to find specific individuals in the gallery quickly for editorial, press, or client delivery purposes.",
      },
    ],
    benefits: [
      "Find all photos of yourself from a 10,000-image gallery in seconds",
      "No pre-registration required for post-event search",
      "Works on mobile and desktop",
      "Private — other guests cannot see your search results",
      "Photographer dashboard for advanced search",
      "Supports batch download of matched photos",
    ],
    faqs: [
      {
        question: "Can I find photos of someone else using their face?",
        answer:
          "No. Face search is strictly personal. You can only search for photos of yourself using your own selfie, ensuring guest privacy.",
      },
      {
        question: "How accurate is the face search for large group photos?",
        answer:
          "Our model detects and matches faces in group photos with 95%+ accuracy, even when faces are small (e.g., in a wide-angle crowd shot).",
      },
      {
        question: "Is there a limit to how many photos the search can return?",
        answer:
          "No. If you appeared in 300 photos at an event, face search will return all 300 of them.",
      },
    ],
    relatedSlugs: [
      "ai-face-recognition",
      "event-photo-gallery",
      "instant-photo-delivery",
    ],
    publishedAt: "2024-03-15",
    updatedAt: "2025-06-01",
  },
  {
    slug: "event-photo-management",
    title: "Event Photo Management Platform | Entephoto",
    metaDescription:
      "Entephoto is the complete event photo management platform for photographers and event organizers. Upload, organize, deliver, and analyze photos from one dashboard.",
    h1: "Event Photo Management: One Platform for Every Step of the Process",
    intro:
      "Managing event photography is complex — multiple photographers, thousands of photos, hundreds of guests, and tight delivery timelines. Entephoto consolidates every step into one intelligent platform.",
    sections: [
      {
        heading: "A Dashboard Built for Professional Events",
        body: "The Entephoto dashboard gives photographers and organizers a clear, real-time view of every aspect of an event: photos uploaded, faces matched, deliveries sent, and guest engagement stats.",
      },
      {
        heading: "Multi-Photographer Support",
        body: "Assign multiple photographers to a single event. All photos from all cameras are ingested, processed, and distributed from one place. No more collecting memory cards or shared Dropbox folders.",
      },
      {
        heading: "Quality Control Before Delivery",
        body: "Enable a review queue to manually approve photos before they are delivered to guests. Flag duplicates, out-of-focus shots, or private moments before distribution.",
      },
      {
        heading: "Analytics and Reporting",
        body: "See which photos were downloaded, shared, or favorited the most. Identify your best-performing shots across the event for use in portfolios or client presentations.",
      },
    ],
    benefits: [
      "Centralized dashboard for all photographers",
      "Real-time delivery tracking",
      "Photo review and approval queue",
      "Engagement analytics per photo",
      "Multi-event management",
      "API access for integration with existing workflows",
    ],
    faqs: [
      {
        question: "Can I manage multiple events simultaneously on Entephoto?",
        answer:
          "Yes. The dashboard supports concurrent event management. Switch between events with a single click.",
      },
      {
        question: "Does Entephoto integrate with Lightroom or Capture One?",
        answer:
          "We currently offer a direct upload API. Lightroom and Capture One plugins are on the product roadmap for 2025.",
      },
      {
        question: "How does Entephoto handle duplicate photos?",
        answer:
          "Our system automatically detects and flags near-duplicate images during processing. You can set rules to automatically discard duplicates or route them to a review queue.",
      },
    ],
    relatedSlugs: [
      "photo-delivery-for-photographers",
      "event-photo-gallery",
      "instant-photo-delivery",
    ],
    publishedAt: "2024-04-01",
    updatedAt: "2025-06-01",
  },
  {
    slug: "photo-delivery-for-photographers",
    title: "Photo Delivery for Photographers | Entephoto",
    metaDescription:
      "Entephoto is the photo delivery platform designed for professional event photographers. Automate delivery, delight clients, and grow your business.",
    h1: "Photo Delivery for Photographers: Automate Delivery, Delight Every Client",
    intro:
      "Professional photographers spend enormous time after an event sorting, culling, and delivering photos manually. Entephoto eliminates that work entirely — so photographers can focus on what they do best.",
    sections: [
      {
        heading: "The Post-Event Photography Problem",
        body: "For every hour of shooting, photographers often spend 3–5 hours in post: culling duplicates, sorting by person, creating gallery links, sending emails, and following up with clients. This overhead is expensive and unsustainable.",
      },
      {
        heading: "How Entephoto Automates the Workflow",
        body: "Upload your photos to Entephoto after editing. Our AI automatically sorts them by person, creates individual guest galleries, and delivers each gallery via WhatsApp or SMS. The entire delivery process happens in minutes.",
      },
      {
        heading: "Happy Clients, More Referrals",
        body: "When guests receive their photos the same day as the event, satisfaction scores go through the roof. Photographers using Entephoto report a dramatic increase in referral rates and repeat bookings.",
      },
      {
        heading: "Pricing That Works for Photographers",
        body: "Entephoto offers per-event pricing and monthly subscription plans to suit photographers at every scale — from solo wedding photographers to large studios handling 50+ events per year.",
      },
    ],
    benefits: [
      "Zero manual photo sorting post-event",
      "Automated delivery to every guest",
      "Dramatic increase in client satisfaction",
      "More referrals and repeat bookings",
      "Flexible pricing — per event or subscription",
      "White-label options available",
    ],
    faqs: [
      {
        question: "Can I white-label Entephoto with my own photography brand?",
        answer:
          "Yes. White-label plans allow you to deliver photos through your own branded portal. Guests see your logo and brand — Entephoto works silently in the background.",
      },
      {
        question: "How do I get started as a photographer on Entephoto?",
        answer:
          "Sign up at entephoto.co.in, create your first event, and upload your edited photos. Your first event setup takes less than 15 minutes.",
      },
      {
        question: "Does Entephoto work for video delivery as well?",
        answer:
          "Currently, Entephoto is photo-only. Video delivery is on the product roadmap. Stay tuned for announcements.",
      },
    ],
    relatedSlugs: [
      "event-photo-management",
      "instant-photo-delivery",
      "ai-face-recognition",
    ],
    publishedAt: "2024-04-15",
    updatedAt: "2025-06-01",
  },
  {
    slug: "real-time-photo-sharing",
    title: "Real-Time Photo Sharing for Events | Entephoto",
    metaDescription:
      "Entephoto delivers real-time photo sharing at any event. Photos go from camera to guest's phone in under 60 seconds — no app download required.",
    h1: "Real-Time Photo Sharing: Camera to Guest in Under 60 Seconds",
    intro:
      "Real-time photo sharing is the next evolution of event photography. Instead of collecting a link days later, guests receive their photos while the event is still going — creating an instant, memorable experience.",
    sections: [
      {
        heading: "What 'Real-Time' Actually Means",
        body: "With Entephoto, real-time means under 60 seconds from camera to guest's phone. A photo taken at 3:00 PM lands in the guest's personal gallery by 3:01 PM. That is the Entephoto standard.",
      },
      {
        heading: "No App. No Download. No Friction.",
        body: "Guests receive a WhatsApp message or SMS with their gallery link. There is no app to download, no account to create, and no password to remember. One tap and they see their photos.",
      },
      {
        heading: "The Social Amplification Effect",
        body: "Events where guests receive real-time photos generate 3–5x more organic social media shares compared to events using traditional delivery methods. This amplification is spontaneous, authentic, and free.",
      },
      {
        heading: "Built to Scale at Peak Moments",
        body: "During peak event moments — a first dance, a keynote announcement, a trophy presentation — hundreds of photos can be uploaded simultaneously. Entephoto's cloud infrastructure handles burst loads without delays.",
      },
    ],
    benefits: [
      "Under 60-second delivery time",
      "No app download — works via WhatsApp/SMS link",
      "3–5x more social media shares vs. traditional delivery",
      "Handles burst upload loads at peak event moments",
      "Works offline-to-online: photos queue if connectivity drops",
      "Available globally",
    ],
    faqs: [
      {
        question: "What happens if the venue has poor internet connectivity?",
        answer:
          "Photos queue locally and upload as soon as connectivity is restored. Delivery to guests is automatic once photos are processed.",
      },
      {
        question: "Can Entephoto share photos to an event display screen in real time?",
        answer:
          "Yes. Our live gallery wall feature can display an approved real-time photo feed on a TV or projector screen at your event.",
      },
    ],
    relatedSlugs: [
      "live-event-photo-sharing",
      "instant-photo-delivery",
      "camera-to-phone-photo-transfer",
    ],
    publishedAt: "2024-05-01",
    updatedAt: "2025-06-01",
  },
  {
    slug: "camera-to-phone-photo-transfer",
    title: "Camera to Phone Photo Transfer | Entephoto",
    metaDescription:
      "Entephoto enables instant camera to phone photo transfer at events — photos move from the photographer's camera to every guest's phone in under a minute.",
    h1: "Camera to Phone Photo Transfer: How Event Photos Reach Guests Instantly",
    intro:
      "The traditional camera-to-phone photo transfer process involves memory cards, editing software, cloud uploads, and manual gallery management. Entephoto compresses this entire pipeline into a single, automated step.",
    sections: [
      {
        heading: "The Old Way vs. the Entephoto Way",
        body: "Traditionally: Photographer shoots → copies card to laptop → edits → exports → uploads to gallery → shares link → guests download. With Entephoto: Photographer shoots → uploads via app or API → AI delivers to each guest automatically.",
      },
      {
        heading: "How the Transfer Works Technically",
        body: "Photographers use our mobile upload app, web dashboard, or REST API to upload photos directly from their device. Images are compressed for fast transfer, processed by our AI, and pushed to guest galleries — all within 60 seconds of upload.",
      },
      {
        heading: "Works with Any Camera Setup",
        body: "Entephoto works with DSLRs, mirrorless cameras, drones, and phone cameras. Any device that can connect to a phone or laptop for uploading works seamlessly with our platform.",
      },
      {
        heading: "Guests Receive Photos on Any Phone",
        body: "Delivery is channel-agnostic: WhatsApp, SMS, or email. Guests on any mobile OS — Android or iOS — receive and can download their photos in full resolution.",
      },
    ],
    benefits: [
      "Eliminates memory card transfer overhead",
      "Upload from phone, laptop, or directly via API",
      "Works with any camera: DSLR, mirrorless, drone, or smartphone",
      "Guests receive photos on any phone OS",
      "Full-resolution transfer with optional compression",
      "Photographers can upload while still on-site",
    ],
    faqs: [
      {
        question: "Does Entephoto compress photos during transfer?",
        answer:
          "We offer both full-resolution transfer and an optimized web-resolution option. The choice is per-event and controlled by the photographer.",
      },
      {
        question: "Can photographers upload from a drone or GoPro?",
        answer:
          "Yes. Any device that can export photos to a phone or laptop can use Entephoto for upload and delivery.",
      },
      {
        question: "What is the maximum file size per photo?",
        answer:
          "Individual photo files up to 50MB are supported. RAW files can be uploaded separately and linked to delivery copies.",
      },
    ],
    relatedSlugs: [
      "real-time-photo-sharing",
      "instant-photo-delivery",
      "photo-delivery-for-photographers",
    ],
    publishedAt: "2024-05-15",
    updatedAt: "2025-06-01",
  },
];

export function getArticleBySlug(slug: string): KnowledgeArticle | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticles(
  slug: string
): KnowledgeArticle[] {
  const article = getArticleBySlug(slug);
  if (!article) return [];
  return articles.filter((a) => article.relatedSlugs.includes(a.slug));
}
