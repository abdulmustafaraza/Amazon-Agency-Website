export type Stat = {
  value: number;
  prefix: string;
  suffix: string;
  label: string;
};

export const stats: Stat[] = [
  {
    value: 4,
    prefix: "",
    suffix: "+",
    label: "Years in Amazon & Ecommerce Operations",
  },
  {
    value: 350,
    prefix: "$",
    suffix: "K+",
    label: "Creator Campaign Sales Tracked",
  },
  {
    value: 20,
    prefix: "",
    suffix: "K+",
    label: "SKUs Managed Across Channels",
  },
  {
    value: 100,
    prefix: "",
    suffix: "+",
    label: "Marketplace Audits & Brand Checks",
  },
];
