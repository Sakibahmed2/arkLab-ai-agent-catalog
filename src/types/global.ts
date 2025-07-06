import { ReactNode } from "react";

export type TChildren = {
  children: ReactNode;
};

export type TAgents = {
  id: string;
  name: string;
  description: string;
  status: "Active" | "Beta" | "Archived";
  category: string;
  pricingModel: "Free Tier" | "Subscription" | "Per-Use";
};

export type TFilterValues = {
  searchQuery: string;
  selectedStatus: string[];
  selectedCategories: string[];
  selectedPricingModels: string;
};
