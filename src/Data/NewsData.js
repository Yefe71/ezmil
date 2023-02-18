const tracks = [
    {
      title: "Up Down OMV Out Now!",
      date: "February 10,2023",
      caption: "On this come down, Ez just rides this 16bit futuristic beat. With a mix of old school... ",
      img: "https://i.ytimg.com/vi/f4YWrr2gmAs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHOzQ-F-MSwXRZ2kfaeVqKqU8hKQ",
      link: "https://www.youtube.com/watch?v=f4YWrr2gmAs"
    },
    {
      title: "Interview for #BigReidLive",
      date: "January 10, 2023",
      caption: "",
      img: "https://yt3.ggpht.com/GddmSxGjCSUec67dZGurOOPgm6Hl7Ci_niy5rmyz9iBJytJyzLWpzD1Hp5_ZrXPDvbaIA5Yk3MQa9ts=s1024-c-fcrop64=1,0f740000f08bffff-nd-v1",
      link: "https://www.instagram.com/bigreidradio/"
    },
    {
      title: "Interview with DJ Showtime on Twitch",
      date: "January 9, 2023",
      caption: "Live at www.twitch.tv/djshowtime",
      img: "https://yt3.ggpht.com/Ufrpq1AcRPNDuVEk1fDLZwLz1gD6ki2ikVJTiYVSXXvQ4HgpS02rO-kHbMw5PM10p-ZIDl23LzbaAg=s1024-c-fcrop64=1,000037faffffc805-nd-v1",
      link: "twitch.tv/djshowtime"
    },
    {
      title: "Hawaii on 12/15! Grab your Tix!",
      date: "December 21, 2022",
      caption: "",
      img: "https://yt3.ggpht.com/2BlIgt_i7SqUTkJna7hRyNIn01RQmViTX_komy5becopDLJR3HR1OQxd3vgYT75jOGmYsjGbckft-A=s1024-c-fcrop64=1,000037faffffc805-nd-v1",
      link: "https://roslynnc.com/2022/11/03/ezmil-hawaii/"
    },
    {
      title: "Halftime Performance!",
      date: "November 21, 2022",
      caption: "One more day until I perform in LA for the NBA Halftime L.A. Clippers Filipino... ",
      img: "https://yt3.ggpht.com/ChBk8RtI2fpiZrIRbIXEex_YdHqdUZ3M6t0fs5CO4JLYBI9vRD_KBdRDc1OrkR-8bOQnbYPQtOFO6Q=s1024-c-fcrop64=1,00000000ffffffff-nd-v1",
      link: "https://myx.global/ezmil-laclippers-halftime/"
    },
    {
      title: "Merch Capsule AVAILABLE NOW! ",
      date: "November 18, 2022",
      caption: "Check out the official store link here: https://ezmil.lnk.to/DU4LI7Y",
      img: "https://yt3.ggpht.com/b9WZ4VgaWA7uSD7L3Gmg22-tCz81ouOi_rx9hXAETUKZjh6MpxYaBTbx6_8T3soDWl1oc9l3C0dBkg=s1024-c-fcrop64=1,00000000ffffffff-nd-v1",
      link: "https://shop.virginmusic.com/collections/ez-mil"
    },
    {
      title: "Will You OMV Out Now",
      date: "September 27, 2022",
      caption: "With that same love getting deeper, all of Ez's alter-entities join forces to let him bear his soul to The Emprezz...",
      img: "https://www.nme.com/wp-content/uploads/2022/09/ez-mil-will-you@2000x1270-696x442.jpg",
      link: "https://www.youtube.com/watch?v=xYU-b80882c"
    },
    {
      title: "Ridin' With The Moonlight OMV Out Now!",
      date: "July 27, 2022",
      caption: "A taste of the unique side of R&B. Enveloped in the elysian piano...",
      img: "https://i.ibb.co/QjLvKcj/rwtmpic.jpg",
      link: "https://www.youtube.com/watch?v=f2O00lZQ6q0"
    },
    {
      title: "Newest album “DU4LI7Y” Out Now!",
      date: "July 27, 2022",
      caption: "Filipino-American singer-songwriter EZ Mil just released his second studio album, DU4LI7Y,...",
      img: "https://i.scdn.co/image/ab67616d0000b27372ade935f9f6560e16e7aa9b",
      link: "https://businessmirror.com.ph/2022/08/14/ez-mil-blends-hip-hop-rock-pop-and-rb-for-du4li7y/"
    },

    {
      title: "Ez Mil's Album Press Conference Livestream",
      date: "July 22, 2022",
      caption: "",
      img: "https://yt3.ggpht.com/XT7iB0I5owmcEDIMlu-1BDs6Ka5AC5_5BMePee2hwlDY1Z7uP1JRJ8jKg7Rm3w1fIZfFWvmozIsN7AA=s1024-c-fcrop64=1,00000000ffffffff-nd-v1",
      link: "https://www.facebook.com/100050644022312/videos/583588353367047"
    },
    {
      title: "27 Bodies OMV Out Now",
      date: "June 24, 2022",
      caption: "This is Ez Mil's take on putting his own instrumentals to his 24 Bars Challenge",
      img: "https://i.ytimg.com/vi/WycGOjeEI0I/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCeqzLfzO7QRGs43H-MFxq9vhb6dQ",
      link: "https://www.youtube.com/watch?v=WycGOjeEI0I"
    },
 
    {
      title: "Dalawampu't Dalawang Oo OMV Out Now",
      date: "June 14, 2022",
      caption: "Representing twenty-two double-o! Paying homage to his hometown, Olongapo...",
      img: "https://i.ytimg.com/vi/Ey2EK0Acn24/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB9W6JtJIQo5X5CeewwlRb0MWLBcg",
      link: "https://www.youtube.com/watch?v=Ey2EK0Acn24"
    },


];

export default tracks;