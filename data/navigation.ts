export type NavigationItem = {
  label: string;
  href: string;
};

// Primary navigation, shared by the header and footer so they stay identical.
export const navigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/#selected-work" },
  { label: "About Us", href: "/#about" },
  { label: "Contact", href: "/contact" },
];

export const serviceLinks: NavigationItem[] = [
  {
    label: "Marketplace Leakage Audit",
    href: "/contact",
  },
  {
    label: "Amazon Channel Strategy",
    href: "/services",
  },
  {
    label: "Brand Control Planning",
    href: "/services",
  },
];
