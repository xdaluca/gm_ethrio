module.exports = {
  base: "/",
  title: "Rio GM Events",
  heading: "GM Rio 2023",
  dateSubheading: "22. March - 3. April 2023",
  subHeading:
    "We're bringing the Ethereum community to Rio de Janeiro! GM events website shows you events happening in Rio and allows anyone to add and update their side event.",
  calendarHeading: "March 2023",
  sumbitEventLink: "https://gmevents.typeform.com/ethrio",
  startDate: {
    day: 22,
    month: 3,
    year: 2023,
  },
  endDate: {
    day: 3,
    month: 4,
    year: 2023,
  },
  daysInFirstMonth: 31,
  startHour: 8,
  endHour: 24,
  duarationInDays: 13,
  dayNames: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  layout: 1, // 0 - banner layout, 1 - venue layout
  bannerPath: "TwitHeader_1500x5002.jpg", // only if banner layout
  venues: [
    {
      name: "Museu de Arte do Rio",
      desc:
        "MAR in Praça Mauá comprises two interconnected buildings: the eclectic Dom João VI Mansion for exhibitions, and a modernist-style former bus station for the Escola do Olhar. The museum offers a transversal reading of the city’s history, social fabric, conflicts, and challenges.",
      path: "Museu de Arte do Rio.jpeg",
    },
    {
      name: "EthSamba Venue TBA",
      desc: "EthSamba Venue Desc TBA",
      path: "logo_gm_events.svg",
    },
  ], // only if venue layout
  head: [
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["link", { rel: "icon", href: "./logo_gm_events.svg" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  themeConfig: {
    nav: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Events",
        link: "/events/",
      },
      {
        text: "Calendar",
        link: "/calendar/",
      },
      {
        text: "EthRio",
        link: "https://www.ethereumbrasil.com/ethereumrio/",
      },
      {
        text: "EthSamba",
        link: "https://www.ethsamba.org/",
      },
    ],
    logo: "logo_gm_events.svg",
    search: false,
    // Assumes GitHub. Can also be a full GitLab url.
    // repo: 'JosefJ/PragueBlockchainWeek',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    // repoLabel: 'Contribute!',
    // Optional options for generating "Edit this page" link
    // if your docs are in a different repo from your main project:
    // docsRepo: 'vuejs/vuepress',
    // if your docs are not at the root of the repo:
    // docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: "master",
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    // editLinkText: 'Help us improve this page!'
  },
};
