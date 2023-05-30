interface NavItem {
  id: string;
  description: string;
  logo: string;
  url?: string;
  children?: Array<NavItem>;
}

const NavItems: Array<NavItem> = [
  {
    id: "Home",
    description: "",
    logo: "",
    url: "/",
  },
  {
    id: "AI Services",
    description: "",
    logo: "",
    children: [
      {
        id: "Computer Vision",
        description: "",
        logo: "eye",
        url: "/services/cv",
      },
      {
        id: "Software Development",
        description: "",
        logo: "globe",
        url: "/services/softwaredev",
      },
    ],
  },
  {
    id: "General Services",
    description: "",
    logo: "",
    children: [
      {
        id: "Web Development",
        description: "",
        logo: "code-square",
        url: "/services/webdev",
      },
    ],
  },
  {
    id: "About Us",
    description: "",
    logo: "",
    url: "/about",
  },
  {
    id: "Contact",
    description: "",
    logo: "",
    url: "/contact"
  }
];

const isNavItemValid = (item: NavItem): boolean => {
  return (
    item.children?.some((x: NavItem) => isNavItemValid(x)) || item.url !== ""
  );
};

const hasValidChildren = (item: NavItem): boolean => {
  return (
    item.children?.some((child: NavItem) => isNavItemValid(child)) || false
  );
};

export { NavItems, isNavItemValid, hasValidChildren };
