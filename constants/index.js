import {
  bankole,
  lawal,
  lolade,
  ogunleye,
  okunade,
  poroye,
  bamgbopa,
  vp,
} from "../public/assets";

export const navLinks = [
  { href: "/", label: "Home" },
  {
    label: "About",
    subMenu: [
      { href: "#mission", label: "Mission" },
      { href: "#vision", label: "Vision" },
      { href: "#constitution", label: "Constitution" },
      { href: "/dues", label: "Dues" },
      { href: "#history", label: "History" },
    ],
  },
  {
    label: "News",
    subMenu: [
      { href: "#latest-news", label: "Latest News" },
      { href: "#archives", label: "Archives" },
    ],
  },
  { href: "#gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
  {
    label: "Directory",
    subMenu: [
      { href: "/executives", label: "Executives" },
      { href: "/alumni", label: "Alumni List" },
      { href: "/profile", label: "Profile" },
    ],
  },
];

export const excos = [
  {
    name: "Damilare BAMGBOPA",
    office: "President",
    image: bamgbopa,
  },
  {
    name: "Olabisi ONALAJA",
    office: "Vice President",
    Occupation: "Developer",
    image: vp,
  },
  {
    name: "Poroye SUNDAY",
    office: "General Secretary 1",
    image: poroye,
  },
  {
    name: "Abdul Siju OKUNADE",
    office: "General Secretary 2",
    image: okunade,
  },
  {
    name: "Abiodun Damilare OGUNLEYE",
    office: "Treasurer",
    image: ogunleye,
  },
  {
    name: "Ololade OGUNSANYA",
    office: "Financial Secretary",
    image: lolade,
  },
  {
    name: "Adeola Yetunde LAWAL",
    office: "Social Director",
    image: lawal,
  },
  {
    name: "Ademuyiwa Oyetola BANKOLE",
    office: "P.R.O",
    image: bankole,
  },
];
