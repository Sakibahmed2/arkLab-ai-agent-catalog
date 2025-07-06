"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { RootState } from "@/redux/store";
import { Filter, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

const STATUSES = ["Active", "Beta", "Archived"];

const CATEGORIES = [
  "Customer Service",
  "Operations",
  "Marketing",
  "Data Analysis",
  "Development",
  "Human Resources",
  "Finance",
  "Legal",
];
const PRICING_MODELS = ["Free Tier", "Subscription", "Per-Use"];

export default function FilterPanel() {
  const dispatch = useDispatch();
  const { selectedStatus, selectedCategories, selectedPricingModels } =
    useSelector((state: RootState) => state.agents.filters);

  const hasActiveFilters =
    selectedStatus.length > 0 ||
    selectedCategories.length > 0 ||
    selectedPricingModels !== "";

  return (
    <Card>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Filters
          </CardTitle>
          {hasActiveFilters && (
            <Button variant="outline" size="sm" className="text-xs">
              <X className="w-3 h-3 mr-1" />
              Clear All
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Status Filter */}
        <div>
          <Label className="text-sm font-medium mb-3 block">Status</Label>
          <div className="space-y-2">
            {STATUSES.map((status) => (
              <div key={status} className="flex items-center space-x-2">
                <Checkbox
                  id={`status-${status}`}
                  checked={selectedStatus.includes(status)}
                />
                <Label
                  htmlFor={`status-${status}`}
                  className="text-sm font-normal cursor-pointer"
                >
                  {status}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div>
          <Label className="text-sm font-medium mb-3 block">Category</Label>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {CATEGORIES.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={`category-${category}`}
                  checked={selectedCategories.includes(category)}
                />
                <Label
                  htmlFor={`category-${category}`}
                  className="text-sm font-normal cursor-pointer"
                >
                  {category}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Model Filter */}
        <div>
          <Label className="text-sm font-medium mb-3 block">
            Pricing Model
          </Label>
          <RadioGroup value={selectedPricingModels}>
            {PRICING_MODELS.map((model) => (
              <div key={model} className="flex items-center space-x-2">
                <RadioGroupItem value={model} id={`pricing-${model}`} />
                <Label
                  htmlFor={`pricing-${model}`}
                  className="text-sm font-normal cursor-pointer"
                >
                  {model}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Active Filters Summary */}
        {hasActiveFilters && (
          <div>
            <Label className="text-sm font-medium mb-2 block">
              Active Filters
            </Label>
            <div className="flex flex-wrap gap-1">
              {selectedStatus.map((status) => (
                <Badge key={status} variant="secondary" className="text-xs">
                  {status}
                </Badge>
              ))}
              {selectedCategories.map((category) => (
                <Badge key={category} variant="secondary" className="text-xs">
                  {category}
                </Badge>
              ))}
              {selectedPricingModels && (
                <Badge variant="secondary" className="text-xs">
                  {selectedPricingModels}
                </Badge>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
