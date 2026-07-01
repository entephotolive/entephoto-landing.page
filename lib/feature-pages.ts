import { absoluteUrl } from "@/lib/site";

interface FeaturePageSection {
  heading: string;
  body: string;
}

interface FeaturePageFaq {
  question: string;
  answer: string;
}

export interface FeaturePageData {
  slug: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  eyebrow: string;
  intro: string;
  problem: string;
  traditionalWorkflow: string;
  whyTraditionalFails: string;
  solution: string;
  workflow: string[];
  sections: FeaturePageSection[];
  benefits: string[];
  privacy: string;
  security: string;
  compatibility: string;
  realEventExample: string;
  faqs: FeaturePageFaq[];
}

export const featurePages: FeaturePageData[] = [
  {
    slug: "instant-photo-delivery",
    title: "Instant Photo Delivery for Events | Entephoto",
    metaDescription:
      "Instant photo delivery for weddings, corporate events, and live activations. Entephoto moves event photos from camera to guest phone in minutes with AI face matching.",
    keywords: [
      "instant photo delivery",
      "instant event photo delivery",
      "camera to phone delivery",
      "event photo sharing software",
      "AI event photo delivery",
    ],
    h1: "Instant Photo Delivery for Events Without Manual Sorting",
    eyebrow: "Instant Photo Delivery",
    intro:
      "Entephoto helps event teams deliver photos while the event is still happening. Instead of uploading everything into one giant gallery and asking guests to search for themselves, the platform matches each photo to the right attendee and sends it to a personal gallery almost immediately.",
    problem:
      "Fast delivery matters because event excitement fades quickly. When guests wait until the next day or the next week, share rates drop, client satisfaction dips, and photographers lose one of the strongest differentiators they can offer.",
    traditionalWorkflow:
      "The traditional process usually looks like this: shoot on camera, copy cards to a laptop, review the files, export JPEGs, upload a folder, send one link to everyone, and answer messages from guests who cannot find their photos. That workflow adds hours of admin work after every event.",
    whyTraditionalFails:
      "Traditional delivery fails because it treats every guest the same. People do not want all event photos. They want their photos, delivered quickly, privately, and on the device they already use.",
    solution:
      "Entephoto replaces the old workflow with a live delivery pipeline. Photographers upload, Entephoto processes the images, AI matches faces, and each guest receives a gallery that feels personal instead of overwhelming.",
    workflow: [
      "Guests register with a selfie through a simple event link.",
      "Photographers upload from camera-connected devices or a laptop.",
      "Entephoto detects faces, matches photos, and creates private galleries.",
      "Guests receive delivery links through WhatsApp, SMS, or email.",
      "Organizers track delivery, downloads, and guest engagement from one dashboard.",
    ],
    sections: [
      {
        heading: "What instant photo delivery means in practice",
        body: "For Entephoto, instant delivery means reducing the time between capture and access enough that guests can still share the moment while they are in it. At weddings that means portraits appearing before dinner ends. At conferences it means keynote photos landing while attendees are still networking. At brand activations it means the guest can post branded content before they leave the venue.",
      },
      {
        heading: "Why photographers use it",
        body: "Photographers use instant photo delivery to remove repetitive delivery work, improve the guest experience, and offer a more modern service package. Instead of manually building separate gallery folders or responding to individual delivery requests, they can let the platform handle matching and distribution automatically.",
      },
      {
        heading: "Why event organizers care",
        body: "Organizers care because quick delivery increases guest engagement and extends the life of the event online. Real-time sharing often leads to more story posts, more brand mentions, and a smoother guest experience than a delayed shared-drive approach.",
      },
      {
        heading: "Built for recurring event workflows",
        body: "Entephoto is not only for one-off weddings. The same delivery workflow works for schools, award nights, conferences, sports meets, alumni reunions, destination events, and mall activations where organizers need a reliable repeatable process.",
      },
    ],
    benefits: [
      "Delivers photos while the event is still active",
      "Removes hours of post-event sorting and link sharing",
      "Keeps each guest gallery private by default",
      "Works for weddings, conferences, activations, and large public events",
      "Supports multiple upload points and multiple photographers",
      "Helps photographers sell a premium turnaround experience",
    ],
    privacy:
      "Guests access only their own matched gallery unless the organizer intentionally enables a broader public gallery. That makes Entephoto useful for family events, school events, and corporate functions where privacy expectations are higher than in a public social album.",
    security:
      "Delivery links are tied to the guest journey and the platform is designed around controlled access rather than open folder sharing. Organizers can decide how long galleries stay active and keep event distribution inside one managed workflow.",
    compatibility:
      "Entephoto fits DSLR and mirrorless workflows as long as photographers have a path to upload from a connected device. It is suitable for teams using Canon, Sony, Nikon, Fujifilm, Panasonic, and other modern event setups.",
    realEventExample:
      "Imagine a wedding reception with two photographers and 600 guests. During stage portraits and candid coverage, photos are uploaded continuously from the media desk. Guests who registered earlier receive their own gallery links throughout the evening, which reduces the usual post-event flood of messages asking when photos will be shared.",
    faqs: [
      {
        question: "How fast is instant photo delivery with Entephoto?",
        answer:
          "Delivery speed depends on upload speed and venue connectivity, but the system is designed for near-immediate guest access once a photo reaches the platform.",
      },
      {
        question: "Do guests need an app to receive photos?",
        answer:
          "No. Guests can receive a gallery link through familiar channels like WhatsApp, SMS, or email.",
      },
      {
        question: "Can multiple photographers upload to the same event?",
        answer:
          "Yes. Entephoto supports multi-photographer workflows so large events do not depend on a single upload point.",
      },
    ],
  },
  {
    slug: "live-event-photo-sharing",
    title: "Live Event Photo Sharing Software | Entephoto",
    metaDescription:
      "Live event photo sharing software for weddings, conferences, activations, and stage events. Deliver guest photos during the event with private AI-matched galleries.",
    keywords: [
      "live event photo sharing",
      "event live sharing",
      "real time event photos",
      "event guest photo delivery",
      "AI photo sharing platform",
    ],
    h1: "Live Event Photo Sharing That Feels Personal to Every Guest",
    eyebrow: "Live Event Photo Sharing",
    intro:
      "Live event photo sharing is not just about uploading fast. It is about giving the right attendee the right image at the right moment. Entephoto combines live delivery speed with AI matching so guests do not need to browse a crowded folder or wait for the event team to respond manually.",
    problem:
      "Most event galleries are technically fast to publish but slow to use. Guests still need to search, scroll, and download on their own, which creates friction and lowers actual engagement.",
    traditionalWorkflow:
      "Typical live sharing tools publish one common gallery. Staff members then answer requests through WhatsApp, sort VIP photos manually, or build separate folders for special groups after the event.",
    whyTraditionalFails:
      "Shared galleries create noise instead of clarity. At a wedding guests see hundreds of strangers' pictures. At a conference attendees must filter through stage shots and booth coverage to find a single portrait.",
    solution:
      "Entephoto gives organizers a live sharing workflow with better targeting. Each uploaded image can become part of a personal guest experience instead of a bulk upload exercise.",
    workflow: [
      "Collect guest registrations before or during the event.",
      "Upload images continuously from the event production workflow.",
      "Let the platform match faces and organize galleries automatically.",
      "Send guests their updated gallery throughout the event.",
      "Review delivery analytics and download trends after the event.",
    ],
    sections: [
      {
        heading: "Designed for guest experience, not only storage",
        body: "The core difference between live event photo sharing and basic cloud storage is the guest journey. Entephoto is designed around discovery, privacy, and immediate usefulness, so the gallery experience is as important as the upload experience.",
      },
      {
        heading: "Useful for branded and public-facing events",
        body: "Brand activations, mall events, exhibitions, music shows, college festivals, and corporate launches often need guests to share photos quickly for promotional momentum. Entephoto supports that goal without turning every event gallery into an uncontrolled public album.",
      },
      {
        heading: "A stronger fit for weddings and private functions",
        body: "In private events, live sharing only works if it respects relationships and boundaries. Couples want family members to enjoy their moments, but they do not want every guest searching through sensitive or incomplete images. Private personal galleries solve that tension well.",
      },
      {
        heading: "Helps teams operate with less manual coordination",
        body: "Because matching, gallery creation, and delivery happen in one workflow, the production team spends less time coordinating between photographers, editors, venue staff, and organizers.",
      },
    ],
    benefits: [
      "Live guest delivery without opening all photos to everyone",
      "Higher share rates than delayed gallery publishing",
      "Less manual coordination for event and studio teams",
      "Works for both private and promotional event formats",
      "Supports repeatable workflows across event types",
      "Creates a cleaner experience than open shared-drive links",
    ],
    privacy:
      "Live delivery does not need to mean open delivery. Entephoto emphasizes personal galleries first, which is especially useful when guest lists include families, employees, students, or invited clients.",
    security:
      "Because the workflow runs through one managed system, organizers can avoid the usual mix of ad hoc folder sharing, forwarded download links, and manually curated WhatsApp groups.",
    compatibility:
      "The platform is suited to photographers shooting on common event camera systems and uploading through laptops, phones, or connected workstations.",
    realEventExample:
      "Consider a corporate annual day with stage awards, team photos, and branded photo booths. Instead of waiting until the next morning, attendees receive their own event photos during the program, which makes internal sharing and social posting far more likely before the event ends.",
    faqs: [
      {
        question: "What is the difference between live event photo sharing and a shared gallery?",
        answer:
          "A shared gallery gives every attendee the same folder. Live event photo sharing with Entephoto gives each attendee a private gallery that updates during the event.",
      },
      {
        question: "Can live event photo sharing work for large crowds?",
        answer:
          "Yes. The workflow is designed for events where many guests and multiple photographers are active at the same time.",
      },
      {
        question: "Is this only useful for public events?",
        answer:
          "No. It is often even more valuable for private events because guests get a more curated and private experience.",
      },
    ],
  },
  {
    slug: "wedding-photo-sharing",
    title: "Wedding Photo Sharing Platform | Entephoto",
    metaDescription:
      "Wedding photo sharing with private guest galleries, AI face matching, and same-day delivery. Entephoto helps couples and photographers share wedding memories faster.",
    keywords: [
      "wedding photo sharing",
      "wedding guest photo delivery",
      "AI wedding photo sharing",
      "wedding photo gallery for guests",
      "same day wedding photos",
    ],
    h1: "Wedding Photo Sharing for Couples, Guests, and Photographers",
    eyebrow: "Wedding Photo Sharing",
    intro:
      "Wedding photo sharing usually breaks into two extremes: either guests get nothing until long after the celebration, or they receive one massive gallery that is hard to navigate. Entephoto creates a middle path where guests can receive their own wedding photos quickly without creating extra work for the photographer.",
    problem:
      "Weddings generate emotional, high-demand moments. Friends and family want their portraits, couple photos, dance floor shots, and family combinations while the excitement is still fresh.",
    traditionalWorkflow:
      "Traditionally, photographers finish the event, bring back cards, review the files, export a selected set, and later share a general gallery with the couple or everyone. Guests often rely on screenshots, forwarded images, or informal WhatsApp sharing.",
    whyTraditionalFails:
      "That process is slow for guests and stressful for couples. It also hides an important service opportunity for photographers because delivery becomes a post-event administrative task rather than part of the wedding experience.",
    solution:
      "Entephoto turns wedding photo sharing into an organized guest experience. It helps couples feel more responsive, helps guests find their own memories, and helps photographers deliver more value without adding another manual job.",
    workflow: [
      "Share a guest registration link before the ceremony or reception.",
      "Capture portraits, candid moments, stage photos, and family groups as usual.",
      "Upload selected photos from the media desk or connected device.",
      "Let Entephoto match and send guest-specific galleries automatically.",
      "Keep the couple's full wedding collection separate from guest access rules.",
    ],
    sections: [
      {
        heading: "A better fit for modern Indian wedding workflows",
        body: "Indian weddings often run across multiple functions, multiple outfits, and large family groups. A single shared folder becomes difficult very quickly. Entephoto helps make these events manageable by organizing delivery around the people in the photos instead of the order the files were uploaded.",
      },
      {
        heading: "Useful for both intimate weddings and large receptions",
        body: "Small weddings benefit because every guest matters and the experience feels more personal. Large weddings benefit because the volume of guests makes manual delivery unrealistic. In both cases, private guest galleries reduce confusion and make the service feel thoughtful.",
      },
      {
        heading: "Why photographers can position it as a premium add-on",
        body: "Wedding photographers already compete on style, edit quality, and album presentation. Same-day guest delivery gives them a practical differentiator that couples understand instantly, especially when families want easy access to their own portraits.",
      },
      {
        heading: "How it supports couples after the event",
        body: "Couples often spend days forwarding images to relatives who missed the gallery link or cannot locate their photos. By giving guests their own delivery path, Entephoto can reduce those follow-up requests and help couples focus on the full wedding collection instead.",
      },
    ],
    benefits: [
      "Makes guest photo access easier during and after the wedding",
      "Reduces follow-up requests to the couple and photographer",
      "Works well with large family and stage-photo workflows",
      "Adds a premium service layer for wedding studios",
      "Keeps guest access separate from the couple's master gallery",
      "Supports multi-function wedding events",
    ],
    privacy:
      "Wedding events often include children, elders, and private family moments, so guest-specific access matters. Entephoto is designed to limit unnecessary exposure while still making sharing convenient.",
    security:
      "Instead of forwarding open folders between family groups, organizers can route access through one managed platform with clearer gallery boundaries.",
    compatibility:
      "Wedding teams working with DSLR, mirrorless, laptop tethering, or mixed camera setups can integrate Entephoto into their existing same-day workflow.",
    realEventExample:
      "At a two-day wedding with mehendi, ceremony, and reception coverage, the studio can use one guest registration workflow across events while still sending attendees relevant photos as each function unfolds.",
    faqs: [
      {
        question: "Can wedding guests see only their own photos?",
        answer:
          "That is the core guest experience Entephoto is built for. Personal galleries are designed to keep wedding delivery focused and private.",
      },
      {
        question: "Does this replace the couple's final edited gallery?",
        answer:
          "No. It improves guest sharing and same-day access while the couple can still receive their full edited wedding collection separately.",
      },
      {
        question: "Can photographers use this across multiple wedding functions?",
        answer:
          "Yes. The workflow can support multi-function wedding coverage where delivery continues across separate moments and venues.",
      },
    ],
  },
  {
    slug: "event-photo-gallery",
    title: "Event Photo Gallery Software | Entephoto",
    metaDescription:
      "Event photo gallery software with AI-organized guest galleries, controlled downloads, and faster delivery. Build event galleries that guests can actually use.",
    keywords: [
      "event photo gallery",
      "event gallery software",
      "AI photo gallery for events",
      "private event gallery",
      "guest photo gallery platform",
    ],
    h1: "Event Photo Gallery Software Guests Can Navigate Easily",
    eyebrow: "Event Photo Gallery",
    intro:
      "An event photo gallery should help people find, enjoy, and download the images that matter to them. Too many event galleries behave like storage folders instead of guest experiences. Entephoto organizes galleries around the attendee journey, not just around file upload.",
    problem:
      "When one gallery contains thousands of images, most guests never browse long enough to find their best moments. That lowers engagement and makes the gallery feel less valuable than the event team expected.",
    traditionalWorkflow:
      "Photographers typically publish one folder, perhaps add a watermark, and let everyone download what they can find. If an organizer wants more control, they often have to create special folders manually.",
    whyTraditionalFails:
      "Traditional galleries are hard to navigate because they assume guests are willing to search manually. In reality, people leave after a few minutes unless the gallery leads them straight to relevant photos.",
    solution:
      "Entephoto creates a more useful gallery model by matching photos to people, organizing delivery intelligently, and giving organizers more control over how the gallery behaves.",
    workflow: [
      "Create the event and define gallery access rules.",
      "Collect guest registrations or allow post-event face search.",
      "Upload photos continuously or in batches.",
      "Let the platform assemble private guest galleries automatically.",
      "Use reporting and expiry controls after the event.",
    ],
    sections: [
      {
        heading: "More than a folder of JPEGs",
        body: "A strong event photo gallery should support discovery, downloading, and controlled sharing. Entephoto turns the gallery into a product experience instead of an archive, which is especially important when guests are using their phones and making decisions quickly.",
      },
      {
        heading: "Better for organizers who need control",
        body: "Organizers often need decisions around download access, visibility windows, and how photos are presented to guests. Entephoto is a better fit for those needs than general-purpose file sharing tools because event galleries have different expectations from normal cloud folders.",
      },
      {
        heading: "Useful for staged publishing",
        body: "Some teams want to deliver only approved images, stage by stage or batch by batch. A managed event gallery makes that easier than republishing and resending links repeatedly.",
      },
      {
        heading: "Supports event galleries after the live moment",
        body: "Even after the event, the gallery remains easier to use because guests can continue returning to their own matched set instead of starting from the top of a general photo dump.",
      },
    ],
    benefits: [
      "Creates galleries that feel personal instead of overwhelming",
      "Improves guest discovery on mobile devices",
      "Supports access rules and event-specific controls",
      "Helps organizers publish in a more intentional way",
      "Reduces dependence on open file-sharing tools",
      "Works for both live and post-event viewing",
    ],
    privacy:
      "Guest-specific gallery access reduces the chance that attendees browse photos unrelated to them, which is especially helpful for weddings, schools, and internal company events.",
    security:
      "A managed gallery workflow is generally easier to control than sending public links that can be forwarded without context.",
    compatibility:
      "The gallery workflow is camera-agnostic as long as event photos can be uploaded into the Entephoto processing pipeline.",
    realEventExample:
      "At a college convocation with thousands of portraits and stage moments, students can return to a personal matched gallery instead of opening one giant album and manually scanning every row.",
    faqs: [
      {
        question: "Can an event photo gallery be private for each attendee?",
        answer:
          "Yes. Entephoto is built around private personal galleries rather than only a shared public album.",
      },
      {
        question: "Can organizers control how long the gallery stays live?",
        answer:
          "Yes. Gallery access can be managed according to the event's delivery window and follow-up plan.",
      },
      {
        question: "Is this better than using generic cloud storage?",
        answer:
          "For event workflows, usually yes, because the platform is designed around guest access and discovery rather than basic file storage.",
      },
    ],
  },
  {
    slug: "ai-face-recognition",
    title: "AI Face Recognition for Event Photos | Entephoto",
    metaDescription:
      "AI face recognition for event photos that helps guests find and receive their own images quickly. Built for event delivery, privacy, and high-volume workflows.",
    keywords: [
      "AI face recognition for events",
      "face recognition event photos",
      "AI event photography software",
      "photo matching by face",
      "event guest photo matching",
    ],
    h1: "AI Face Recognition for Event Photo Matching and Delivery",
    eyebrow: "AI Face Recognition",
    intro:
      "AI face recognition is the engine that makes personalized event photo delivery practical. Entephoto uses it to connect uploaded event photos with the guests who appear in them, so delivery is faster and more relevant than generic gallery publishing.",
    problem:
      "Without automated matching, event teams face an impossible scale problem. Even moderate events can produce thousands of images and hundreds of guests, which makes manual sorting too slow and too expensive.",
    traditionalWorkflow:
      "Traditional sorting depends on folder naming, staff memory, or guests browsing through entire galleries. None of those methods scale well when speed and accuracy matter.",
    whyTraditionalFails:
      "Manual categorization breaks down as soon as multiple photographers, crowded frames, or large guest lists enter the workflow. It also introduces more inconsistency than a system designed to match people automatically.",
    solution:
      "Entephoto applies AI face matching specifically to event delivery use cases, where high volume, changing light, and guest expectations all matter at once.",
    workflow: [
      "Collect a reference selfie from the attendee journey.",
      "Upload event images through the live or batch workflow.",
      "Run automated face matching against event participants.",
      "Route matched photos into guest-specific galleries.",
      "Let guests review and access their own images quickly.",
    ],
    sections: [
      {
        heading: "Why event face recognition is different from general face search",
        body: "Event workflows have different demands from a general consumer photo library. Event teams need quick processing, repeatable delivery, and clear guest boundaries. Entephoto's AI layer is useful because it serves that operational goal, not only search convenience.",
      },
      {
        heading: "A practical answer to large gallery overload",
        body: "Most people do not care about a gallery's total size. They care about how quickly they can find themselves. AI face recognition shortens that path dramatically and turns a huge archive into a much more usable guest experience.",
      },
      {
        heading: "Helps organizers deliver a more premium workflow",
        body: "For studios and agencies, face recognition can become part of the value proposition. It lets them promise more than photography coverage alone; they can promise relevant delivery that feels modern and organized.",
      },
      {
        heading: "Why privacy framing matters",
        body: "Guests are more comfortable with AI-based event tools when the purpose is clearly explained. Entephoto uses face matching in service of personal delivery, not open browsing, which helps the workflow stay understandable and easier to justify.",
      },
    ],
    benefits: [
      "Automates guest photo matching at event scale",
      "Improves delivery relevance for every attendee",
      "Reduces manual sorting for photographers and coordinators",
      "Makes large galleries easier to use",
      "Supports premium event delivery experiences",
      "Works within a privacy-focused guest workflow",
    ],
    privacy:
      "The product story around face recognition should always be clear: it exists to help guests access their own photos more easily, not to expose unrelated images.",
    security:
      "Using one managed workflow is generally safer than distributing broad-access folders and expecting guests to self-police what they view or share.",
    compatibility:
      "The matching system supports event workflows across common professional camera setups, as long as photos are uploaded into the platform.",
    realEventExample:
      "At a trade show photo booth program, attendees can register once, visit multiple photo stations, and later receive a combined view of their matched images without the brand team manually sorting every capture.",
    faqs: [
      {
        question: "How does AI face recognition help event photo delivery?",
        answer:
          "It automates the step of identifying which guest appears in which image, so the platform can organize and deliver photos much faster.",
      },
      {
        question: "Is AI face recognition only useful for very large events?",
        answer:
          "No. It is helpful anywhere guests want quick access to their own photos, from intimate weddings to large public events.",
      },
      {
        question: "Can face matching be part of a privacy-first workflow?",
        answer:
          "Yes. It can support privacy well when the goal is personal gallery delivery rather than open gallery exposure.",
      },
    ],
  },
  {
    slug: "face-recognition-photo-search",
    title: "Face Recognition Photo Search for Events | Entephoto",
    metaDescription:
      "Face recognition photo search for event guests who need to find their own pictures quickly. Search event photos by face without browsing the full gallery manually.",
    keywords: [
      "face recognition photo search",
      "find my event photos",
      "search event photos by face",
      "photo search by selfie",
      "AI event photo search",
    ],
    h1: "Face Recognition Photo Search for Guests Who Want Fast Results",
    eyebrow: "Photo Search by Face",
    intro:
      "Not every guest registers before the event, and not every event team wants to deliver live. Face recognition photo search gives attendees a fast way to find themselves later by using a selfie instead of scrolling through the full gallery.",
    problem:
      "Large event galleries are difficult to search manually, especially on mobile. Guests who missed the live delivery workflow still expect a convenient way to find their own images.",
    traditionalWorkflow:
      "Without AI search, guests either browse every folder themselves or message the photographer and ask for help. Both options create friction.",
    whyTraditionalFails:
      "Manual search wastes time and discourages downloads. Many guests give up before they find the few images they care about most.",
    solution:
      "Entephoto offers face-based search as a direct guest utility. Instead of browsing everything, the attendee can verify identity and jump to relevant matches quickly.",
    workflow: [
      "Open the event gallery link.",
      "Choose the find-my-photos option.",
      "Submit or capture a selfie for matching.",
      "Review the returned personal photo results.",
      "Download or share relevant images from the matched set.",
    ],
    sections: [
      {
        heading: "Useful when pre-registration is not realistic",
        body: "Some events have walk-in guests, open entries, or attendance that changes constantly. Face recognition photo search helps those events offer a better gallery experience even when a pre-event registration journey would be difficult to enforce.",
      },
      {
        heading: "A cleaner experience than endless manual browsing",
        body: "Browsing thousands of event images on a phone is tiring. A face-search workflow reduces the number of taps and decisions a guest needs to make, which usually leads to better engagement and more completed downloads.",
      },
      {
        heading: "Helpful for event teams after the live window closes",
        body: "Even if live delivery was used, search remains useful later. Guests who did not open their link earlier or who want to revisit the event after a few days can still find their photos quickly.",
      },
      {
        heading: "A practical backup to real-time delivery",
        body: "Face search is also helpful as a fallback workflow. It means teams do not have to choose between live delivery and later discoverability; both can work together.",
      },
    ],
    benefits: [
      "Lets guests find photos without browsing the full event gallery",
      "Works well for walk-in and open-attendance events",
      "Improves mobile gallery usability significantly",
      "Supports both live and post-event journeys",
      "Reduces guest support messages to the photographer",
      "Creates a more complete discoverability workflow",
    ],
    privacy:
      "A face-search workflow should still keep results scoped to the searching guest, which is why personal result sets matter more than a broad searchable public archive.",
    security:
      "Identity-based search is more controlled than asking event teams to manually send guest images over messaging apps without a consistent verification flow.",
    compatibility:
      "This workflow operates at the platform layer and works with the same upload process used for common event camera systems.",
    realEventExample:
      "At a public college fest, many attendees may skip registration during the event but still want their stage and candid images later. Face-based search helps them retrieve those images without the organizing team sorting requests manually.",
    faqs: [
      {
        question: "Can guests use photo search if they did not register earlier?",
        answer:
          "Yes. That is one of the main reasons face-based search is useful for events with open or unpredictable attendance.",
      },
      {
        question: "Is photo search different from live delivery?",
        answer:
          "Yes. Live delivery pushes photos to guests during the event, while face search helps them pull their own results later or on demand.",
      },
      {
        question: "Does photo search work on phones?",
        answer:
          "Yes. The workflow is especially valuable on phones because manual browsing is more tedious there.",
      },
    ],
  },
  {
    slug: "event-photo-management",
    title: "Event Photo Management Software | Entephoto",
    metaDescription:
      "Event photo management software for upload coordination, guest delivery, approvals, and gallery workflows. Run event photography operations from one platform.",
    keywords: [
      "event photo management",
      "event photography software",
      "photo management platform for events",
      "event photo workflow software",
      "event image delivery dashboard",
    ],
    h1: "Event Photo Management Software for High-Volume Event Teams",
    eyebrow: "Event Photo Management",
    intro:
      "Event photo management is more than storing images. It includes coordinating photographers, controlling what gets published, delivering the right images to the right people, and keeping the whole workflow understandable under event pressure. Entephoto brings those steps together in one operating system for event delivery.",
    problem:
      "As events scale, photography operations become fragmented. Different photographers upload in different ways, organizers ask for approvals in separate chats, and delivery lives in a different tool entirely.",
    traditionalWorkflow:
      "Many teams juggle shared drives, messaging apps, spreadsheets, editing tools, and manual gallery links. Each step works alone, but together they create delays and prevent consistent delivery.",
    whyTraditionalFails:
      "Fragmented workflows are hard to repeat. They depend on staff memory and constant coordination, which makes quality inconsistent across events.",
    solution:
      "Entephoto gives event teams a single workflow for getting photos in, organizing them, and distributing them efficiently. That helps photographers, coordinators, and organizers stay aligned during live production and after the event.",
    workflow: [
      "Create and configure the event workspace.",
      "Add photographers and define upload flow expectations.",
      "Review, process, and organize event images centrally.",
      "Deliver photos to guests through one controlled system.",
      "Use post-event reporting to understand gallery performance.",
    ],
    sections: [
      {
        heading: "A management layer for recurring event operations",
        body: "Studios and event agencies often need the same workflow across many events with different guest counts and teams. Entephoto helps standardize the operational side so staff members do not rebuild the process from scratch every time.",
      },
      {
        heading: "Better visibility during live events",
        body: "When delivery is part of the event promise, teams need to know whether uploads are moving, galleries are updating, and guests are receiving content. An event photo management layer makes those questions easier to answer than a loose collection of folders and chats.",
      },
      {
        heading: "Supports approvals and publishing decisions",
        body: "Some events need quick review before images go out, especially branded programs, award nights, and sensitive internal functions. Centralized management makes those approval steps easier to slot into the workflow.",
      },
      {
        heading: "Useful for studio growth",
        body: "A management platform can help studios expand because good operations are easier to delegate than improvised operations. Teams can train around one workflow rather than relying on individual shortcuts.",
      },
    ],
    benefits: [
      "Centralizes event photography operations",
      "Improves visibility during live delivery workflows",
      "Supports repeatable multi-event processes",
      "Reduces dependency on scattered tools and chats",
      "Makes approvals easier to manage",
      "Helps studios scale with clearer operations",
    ],
    privacy:
      "Centralized event management helps teams enforce consistent guest-access rules instead of improvising who gets what through separate channels.",
    security:
      "Using one controlled platform is easier to govern than distributing files across several unrelated tools and temporary links.",
    compatibility:
      "The workflow fits common professional event camera setups as long as teams have a reliable route to upload images into the platform.",
    realEventExample:
      "A studio covering school graduations across several venues can use one management approach for photographer onboarding, parent gallery delivery, and post-event support instead of creating a new spreadsheet-and-drive process for every campus.",
    faqs: [
      {
        question: "What does event photo management include?",
        answer:
          "It includes the operational side of event photography: uploads, organization, approvals, guest delivery, and post-event reporting.",
      },
      {
        question: "Who is this useful for?",
        answer:
          "It is useful for photographers, studios, agencies, and organizers who run recurring or high-volume event workflows.",
      },
      {
        question: "Can management software still support fast guest delivery?",
        answer:
          "Yes. In fact, structured management usually makes faster delivery more reliable because the workflow is better coordinated.",
      },
    ],
  },
  {
    slug: "photo-delivery-for-photographers",
    title: "Photo Delivery Software for Photographers | Entephoto",
    metaDescription:
      "Photo delivery software for photographers who want faster guest sharing, less manual sorting, and a more premium event service offering.",
    keywords: [
      "photo delivery for photographers",
      "photographer photo delivery software",
      "event photo delivery for studios",
      "photo gallery software for photographers",
      "guest delivery platform photographers",
    ],
    h1: "Photo Delivery Software for Photographers Who Want Less Admin",
    eyebrow: "For Photographers",
    intro:
      "Event photographers spend too much time on the parts of the job clients rarely notice: sorting by person, sending links, answering download questions, and following up with guests after the event. Entephoto helps move that effort into a repeatable software workflow.",
    problem:
      "Post-event delivery work eats into editing time, sales time, and recovery time. It is especially painful for studios covering multiple events every week.",
    traditionalWorkflow:
      "The usual routine includes exporting selected images, uploading them to a gallery, sharing one link, and then handling a stream of messages from guests who cannot locate themselves in the gallery.",
    whyTraditionalFails:
      "This workflow creates admin tasks that do not scale with event volume. The more successful a studio becomes, the more delivery overhead it inherits.",
    solution:
      "Entephoto gives photographers a way to offer fast, organized guest delivery without turning their post-production pipeline into a customer-support queue.",
    workflow: [
      "Create the event and configure guest delivery settings.",
      "Capture and upload selected images during or after the event.",
      "Let the platform organize images into personal galleries.",
      "Share automated delivery links instead of one-off messages.",
      "Use the improved guest experience as part of the studio offer.",
    ],
    sections: [
      {
        heading: "Useful for solo photographers and larger studios",
        body: "Solo photographers benefit because they remove repetitive admin from a small team. Larger studios benefit because the workflow becomes easier to standardize across shooters, coordinators, and delivery staff.",
      },
      {
        heading: "Turns delivery into a business differentiator",
        body: "Many clients expect good photography. Fewer expect personalized same-day sharing. That gap creates an opportunity for photographers who want a stronger story when comparing services with competing studios.",
      },
      {
        heading: "Supports wedding and event referral growth",
        body: "Guests who receive their photos quickly are more likely to remember who delivered them. That can help photographers generate more word-of-mouth visibility, especially in weddings and social events where future clients are already present.",
      },
      {
        heading: "Reduces communication overhead after the event",
        body: "Instead of answering repeated questions about missing or hard-to-find photos, photographers can point guests toward a clearer delivery flow that is already organized around them.",
      },
    ],
    benefits: [
      "Cuts down repetitive delivery admin",
      "Improves the perceived value of event photography packages",
      "Creates a better guest experience without custom manual work",
      "Supports studio growth and workflow standardization",
      "Can help referrals by making delivery memorable",
      "Works across weddings, school events, and branded programs",
    ],
    privacy:
      "Photographers can offer a modern delivery experience without opening a full event gallery to everyone by default.",
    security:
      "A platform-based delivery workflow is easier to manage than sending separate folders and ad hoc download links to guests manually.",
    compatibility:
      "Photographers can integrate the workflow into existing DSLR, mirrorless, tethered, or media-desk setups as long as image upload is available.",
    realEventExample:
      "A studio covering weekend weddings can use the same guest-delivery workflow across every event, reducing manual follow-up from the team on Monday and Tuesday after each job.",
    faqs: [
      {
        question: "How does Entephoto help photographers specifically?",
        answer:
          "It helps by reducing guest-delivery admin, improving organization, and making the final service feel more polished and modern.",
      },
      {
        question: "Can photographers use this as an add-on service?",
        answer:
          "Yes. Many studios can position faster personalized delivery as a premium feature within their event packages.",
      },
      {
        question: "Does this replace editing software?",
        answer:
          "No. It complements the editing workflow by improving delivery and guest access after capture and selection.",
      },
    ],
  },
  {
    slug: "real-time-photo-sharing",
    title: "Real-Time Photo Sharing for Events | Entephoto",
    metaDescription:
      "Real-time photo sharing for events with guest-specific galleries, fast uploads, and a smoother camera-to-phone workflow for photographers and organizers.",
    keywords: [
      "real-time photo sharing",
      "real time event photos",
      "camera to guest phone",
      "live photo sharing platform",
      "event photo delivery in real time",
    ],
    h1: "Real-Time Photo Sharing for Events That Need Immediate Engagement",
    eyebrow: "Real-Time Sharing",
    intro:
      "Real-time photo sharing matters when the value of an image is highest right now, not tomorrow. Entephoto helps event teams deliver photos quickly enough for guests to react, download, and share while the event is still in motion.",
    problem:
      "Delayed delivery reduces excitement and lowers the chance that guests will post or revisit the gallery. It also weakens the impact of brand-led and stage-led event moments.",
    traditionalWorkflow:
      "Most teams still capture everything first and publish later, even when the event would benefit from live momentum. That approach makes sense for archiving, but not for engagement.",
    whyTraditionalFails:
      "When the workflow is built around after-the-fact publishing, it misses the time window where the photo is most useful to the guest and most valuable to the organizer.",
    solution:
      "Entephoto supports a real-time sharing approach where capture, upload, matching, and guest access can happen close together without turning the event team into manual dispatch operators.",
    workflow: [
      "Set up the event for live or near-live uploads.",
      "Capture and route images into the upload pipeline continuously.",
      "Match guests and update their galleries during the event.",
      "Let attendees access photos on their phones without extra friction.",
      "Continue using the same gallery after the event for long-tail access.",
    ],
    sections: [
      {
        heading: "Best when events benefit from immediate social energy",
        body: "Conferences, activations, award nights, concerts, and weddings all gain something from immediate sharing, but the reason differs. For brands it may be reach. For conferences it may be attendee buzz. For weddings it may be emotional delight and family participation.",
      },
      {
        heading: "Real-time should still feel organized",
        body: "Quick delivery is only useful if the result is still easy to navigate. Entephoto aims to keep the experience organized by connecting the image to the right attendee instead of simply pushing everything into a common feed.",
      },
      {
        heading: "Supports event teams during peak moments",
        body: "Real-time pressure increases during key stage moments and crowd surges. A repeatable platform workflow matters because those are the exact moments when manual coordination tends to break down.",
      },
      {
        heading: "Keeps the gallery useful after the event too",
        body: "A real-time event workflow does not need to be disposable. The same matched gallery remains useful later, which means the guest experience can continue after the live excitement fades.",
      },
    ],
    benefits: [
      "Makes event photos useful in the moment they are captured",
      "Supports stronger social and guest engagement",
      "Keeps real-time delivery organized and guest-specific",
      "Works well during high-energy peak moments",
      "Reduces manual coordination under live pressure",
      "Extends into a post-event gallery experience naturally",
    ],
    privacy:
      "Guests can benefit from live delivery without seeing unrelated photos, which is important for events that need both excitement and discretion.",
    security:
      "Real-time sharing through one managed system is usually easier to control than a mix of manual message sends and open galleries.",
    compatibility:
      "The workflow works with common event-camera setups as long as the team can move images into the upload pipeline during the event.",
    realEventExample:
      "At an award ceremony, winners can receive their stage photos shortly after they walk off stage, making it easy for them to share on social platforms before the event program has ended.",
    faqs: [
      {
        question: "What kinds of events benefit most from real-time photo sharing?",
        answer:
          "Any event where timing matters, including weddings, conferences, activations, stage shows, and award ceremonies.",
      },
      {
        question: "Is real-time delivery only for social media promotion?",
        answer:
          "No. It is also valuable for guest satisfaction, family sharing, and creating a more memorable on-site experience.",
      },
      {
        question: "Can a real-time workflow still be private?",
        answer:
          "Yes. Real-time delivery can be private when photos are routed into guest-specific galleries instead of one open feed.",
      },
    ],
  },
  {
    slug: "camera-to-phone-photo-transfer",
    title: "Camera to Phone Photo Transfer for Events | Entephoto",
    metaDescription:
      "Camera to phone photo transfer for event teams that need fast guest delivery. Move photos from camera workflows to attendee phones through one managed platform.",
    keywords: [
      "camera to phone photo transfer",
      "camera to guest phone",
      "event photo transfer",
      "DSLR to phone photo delivery",
      "event photo workflow software",
    ],
    h1: "Camera to Phone Photo Transfer for Faster Event Photo Delivery",
    eyebrow: "Camera to Phone Transfer",
    intro:
      "Camera to phone photo transfer is a practical workflow question for every event team: how do photos move from the capture device to the guest device quickly and reliably? Entephoto helps simplify that journey by turning upload, matching, and delivery into one event workflow.",
    problem:
      "Moving photos from professional cameras to guest phones usually involves multiple disconnected steps, which adds delay and creates more opportunities for confusion.",
    traditionalWorkflow:
      "Shoot on camera, copy files to a laptop, export to a gallery, send a link, and hope guests can find themselves. Even when the process works, it is slower than most guests expect today.",
    whyTraditionalFails:
      "The old workflow optimizes for file transfer, not guest outcome. It gets images online eventually but does not solve discovery, timing, or personal delivery.",
    solution:
      "Entephoto treats camera-to-phone transfer as a full delivery system problem rather than a cable or upload problem alone. Once the image enters the platform, the software handles the rest of the guest journey.",
    workflow: [
      "Capture on the photographer's preferred camera setup.",
      "Move selected images into the Entephoto upload workflow.",
      "Process and match photos automatically.",
      "Send guest galleries to phones through common channels.",
      "Keep downloads and post-event access inside the same system.",
    ],
    sections: [
      {
        heading: "More useful than simple file syncing",
        body: "File syncing answers how the image moves between devices. Event delivery needs a broader answer: how the image becomes accessible, private, and easy to use for the right guest. Entephoto bridges that gap well.",
      },
      {
        heading: "Fits the way event teams already operate",
        body: "Most event teams already have a media desk, laptop, phone, or tethered transfer point. Entephoto does not require them to abandon that structure. It gives those existing workflows a cleaner final delivery layer.",
      },
      {
        heading: "Supports guest expectations on mobile",
        body: "Guests expect the final experience to work on their phone because that is where they will view, download, and share. Treating camera-to-phone transfer as the end goal helps event teams design the workflow around that reality.",
      },
      {
        heading: "Useful for many event formats",
        body: "The same transfer logic matters across weddings, corporate events, graduations, photo booths, sports meets, and brand activations. The exact camera setup changes, but the need for fast useful guest delivery stays the same.",
      },
    ],
    benefits: [
      "Improves the full path from capture to guest access",
      "Reduces friction in camera-based event delivery workflows",
      "Works with the media-desk setups teams already use",
      "Keeps the mobile guest experience front and center",
      "Supports multiple event formats and camera types",
      "Moves beyond simple folder syncing into managed delivery",
    ],
    privacy:
      "A phone-friendly delivery workflow should still respect guest boundaries, which is why personal galleries matter more than one broad mobile-accessible album.",
    security:
      "Managed delivery reduces the need to pass around public links and unstructured files after the event.",
    compatibility:
      "Entephoto is intended to work alongside professional DSLR and mirrorless workflows where files can be routed into a connected upload device.",
    realEventExample:
      "At a school annual day, the photo team can move selected stage and portrait images from their camera workflow into Entephoto so parents receive their child's event images on phone-friendly gallery links rather than a difficult shared archive.",
    faqs: [
      {
        question: "Does camera to phone photo transfer mean guests get original files directly from the camera?",
        answer:
          "Not necessarily. It refers to the overall workflow that gets event photos from the capture process to the guest's phone efficiently.",
      },
      {
        question: "Can this work with DSLR and mirrorless cameras?",
        answer:
          "Yes. The workflow is designed to fit common professional camera setups as long as images can reach the upload device.",
      },
      {
        question: "Why is this better than just sending a gallery link later?",
        answer:
          "Because it improves both timing and discoverability. Guests get a faster and more relevant experience on the device they already use.",
      },
    ],
  },
];

export function getFeaturePageBySlug(slug: string) {
  return featurePages.find((page) => page.slug === slug);
}



export function getFeatureJsonLd(page: FeaturePageData) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${absoluteUrl(page.slug)}#webpage`,
        url: absoluteUrl(page.slug),
        name: page.h1,
        description: page.metaDescription,
        inLanguage: "en-IN",
        isPartOf: {
          "@id": `${absoluteUrl()}#website`,
        },
        breadcrumb: {
          "@id": `${absoluteUrl(page.slug)}#breadcrumb`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${absoluteUrl(page.slug)}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: absoluteUrl("/landing"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.h1,
            item: absoluteUrl(page.slug),
          },
        ],
      },
      {
        "@type": "SoftwareApplication",
        name: "Entephoto",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Web",
        url: absoluteUrl(page.slug),
        description: page.metaDescription,
        featureList: page.benefits,
      },
      {
        "@type": "HowTo",
        name: `How ${page.h1} works`,
        description: page.solution,
        step: page.workflow.map((step, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: step,
          text: step,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "Product",
        name: page.h1,
        description: page.metaDescription,
        brand: {
          "@type": "Brand",
          name: "Entephoto",
        },
        category: "Event photography software",
        url: absoluteUrl(page.slug),
      },
    ],
  };
}

