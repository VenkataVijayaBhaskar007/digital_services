import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    newTab: false,
    path: "/#Services",
  },


 

  {
    id: 4,
    title: "Testimonials",
    newTab: false,
    path: "/#Testimonials",
  },
  {
    id: 2.3,
    title: "Team",
    newTab: false,
    path: "/team",
  },
  {
    id: 3,
    title: "Page links",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Atoms Group",
        newTab: false,
        path: "https://atoms-group2.vercel.app/",
      },
      {
        id: 34,
        title: "Atoms Education",
        newTab: false,
        path: "https://atoms-education-omega.vercel.app/",
      },
      {
        id: 35,
        title: "Atoms Digital Solutins ",
        newTab: false,
        path: "https://digital-solutions-orpin.vercel.app/",
      },
      {
        id: 35,
        title: "Atoms 2.O",
        newTab: false,
        path: "http://atoms2-0.vercel.app",
      },
      // {
      //   id: 35.1,
      //   title: "Support",
      //   newTab: false,
      //   path: "/support",
      // },
      {
        id: 36,
        title: "",
        newTab: false,
        path: "/error",
      },
    ],
  },
];

export default menuData;
