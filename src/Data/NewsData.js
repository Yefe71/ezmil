const tracks = [
    {
      title: "Up Down OMV Out Now!",
      date: "February 10,2023",
      caption: "On this come down, Ez just rides this 16bit futuristic beat. With a mix of old school... ",
      img: "https://i.ytimg.com/vi/f4YWrr2gmAs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHOzQ-F-MSwXRZ2kfaeVqKqU8hKQ",
    },
    {
      title: "Interview for #BigReidLive",
      date: "January 10, 2023",
      caption: "",
      img: "https://yt3.ggpht.com/GddmSxGjCSUec67dZGurOOPgm6Hl7Ci_niy5rmyz9iBJytJyzLWpzD1Hp5_ZrXPDvbaIA5Yk3MQa9ts=s1024-c-fcrop64=1,0f740000f08bffff-nd-v1",

    },
    {
      title: "Interview with DJ Showtime on Twitch",
      date: "January 9, 2023",
      caption: "Live at www.twitch.tv/djshowtime",
      img: "https://yt3.ggpht.com/Ufrpq1AcRPNDuVEk1fDLZwLz1gD6ki2ikVJTiYVSXXvQ4HgpS02rO-kHbMw5PM10p-ZIDl23LzbaAg=s1024-c-fcrop64=1,000037faffffc805-nd-v1",

    },
    {
      title: "Hawaii on 12/15! Grab your Tix!",
      date: "December 21, 2022",
      caption: "",
      img: "https://yt3.ggpht.com/2BlIgt_i7SqUTkJna7hRyNIn01RQmViTX_komy5becopDLJR3HR1OQxd3vgYT75jOGmYsjGbckft-A=s1024-c-fcrop64=1,000037faffffc805-nd-v1",

    },
    {
      title: "Halftime Performance!",
      date: "November 21, 2022",
      caption: "One more day until I perform in LA for the NBA Halftime L.A. Clippers Filipino... ",
      img: "https://yt3.ggpht.com/ChBk8RtI2fpiZrIRbIXEex_YdHqdUZ3M6t0fs5CO4JLYBI9vRD_KBdRDc1OrkR-8bOQnbYPQtOFO6Q=s1024-c-fcrop64=1,00000000ffffffff-nd-v1",
    },
    {
      title: "Merch Capsule AVAILABLE NOW! ",
      date: "November 18, 2022",
      caption: "Check out the official store link here: https://ezmil.lnk.to/DU4LI7Y",
      img: "https://yt3.ggpht.com/b9WZ4VgaWA7uSD7L3Gmg22-tCz81ouOi_rx9hXAETUKZjh6MpxYaBTbx6_8T3soDWl1oc9l3C0dBkg=s1024-c-fcrop64=1,00000000ffffffff-nd-v1",

    },
    {
      title: "Will You OMV Out Now",
      date: "September 27, 2022",
      caption: "",
      img: "https://www.nme.com/wp-content/uploads/2022/09/ez-mil-will-you@2000x1270-696x442.jpg",

    },
    {
      title: "Ridin' With The Moonlight Out Now!",
      date: "July 27, 2022",
      caption: "July 27, 2022",
      img: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/295299663_576696014028528_7375158556033747078_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGaanyBK77B3Cu8uYHIZoXe1e7gfnOIyiTV7uB-c4jKJEwhFpezkQZ0P3H0nw_y2dG5Nsrj3ZN6juBsX4l2o-VC&_nc_ohc=c2ErkgdbBl4AX-Ctk3Z&_nc_oc=AQnP-w-UqIhRg0b0odcHCu01fj03VU97PMPcbD47NLr9LcAN5yTJeWUuwqb2a2NONuA&_nc_ht=scontent.fmnl4-1.fna&oh=00_AfC-erFhr5xjBAn_dYduYpC0qlnmfk_YObe5LH2gtURF8g&oe=63EB62AC"

    },
    {
      title: "Newest album “DU4LI7Y” Out Now!",
      date: "July 27, 2022",
      caption: "Filipino-American singer-songwriter EZ Mil just released his second studio album, DU4LI7Y,...",
      img: "https://i.scdn.co/image/ab67616d0000b27372ade935f9f6560e16e7aa9b",
    },

    {
      title: "Ez Mil's Album Press Conference Livestream",
      date: "July 22, 2022",
      caption: "July 22, 2022",
      img: "https://yt3.ggpht.com/XT7iB0I5owmcEDIMlu-1BDs6Ka5AC5_5BMePee2hwlDY1Z7uP1JRJ8jKg7Rm3w1fIZfFWvmozIsN7AA=s1024-c-fcrop64=1,00000000ffffffff-nd-v1",

    },
    {
      title: "27 Bodies OMV Out Now",
      date: "June 24, 2022",
      caption: "",
      img: "https://i.ytimg.com/vi/WycGOjeEI0I/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCeqzLfzO7QRGs43H-MFxq9vhb6dQ",

    },
 
    {
      title: "Dalawampu't Dalawang Oo OMV Out Now",
      date: "June 14, 2022",
      caption: "July 22, 2022",
      img: "https://i.ytimg.com/vi/Ey2EK0Acn24/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB9W6JtJIQo5X5CeewwlRb0MWLBcg",

    },


];

export default tracks;