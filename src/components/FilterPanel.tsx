"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  clearAllFilters,
  setSelectedCategories,
  setSelectedPricingModels,
  setSelectedStatus,
} from "@/redux/slice/agentSlice";
import { RootState } from "@/redux/store";
import { Filter, X } from "lucide-react";

export default function FilterPanel() {
  const dispatch = useAppDispatch();
  const { selectedStatus, selectedCategories, selectedPricingModels } =
    useAppSelector((state: RootState) => state.agents.filters);

  const { agents } = useAppSelector((state: RootState) => state.agents);

  const statusItem = [...new Set(agents.map((agent) => agent.status))];
  const categoryItem = [...new Set(agents.flatMap((agent) => agent.category))];
  const pricingModelItem = [
    ...new Set(agents.map((agent) => agent.pricingModel)),
  ];

  const hasActiveFilters =
    selectedStatus.length > 0 ||
    selectedCategories.length > 0 ||
    selectedPricingModels !== "";

  const handleStatusChange = (status: string, checked: boolean) => {
    if (checked) {
      dispatch(setSelectedStatus([...selectedStatus, status]));
    } else {
      dispatch(
        setSelectedStatus(selectedStatus.filter((item) => item !== status))
      );
    }
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      dispatch(setSelectedCategories([...selectedCategories, category]));
    } else {
      dispatch(
        setSelectedCategories(
          selectedCategories.filter((item) => item !== category)
        )
      );
    }
  };

  const handlePricingModelChange = (value: string) => {
    dispatch(
      setSelectedPricingModels(value === selectedPricingModels ? "" : value)
    );
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Filters
          </CardTitle>
          {hasActiveFilters && (
            <Button
              variant="outline"
              size="sm"
              className="text-xs"
              onClick={() => dispatch(clearAllFilters())}
            >
              <X className="w-3 h-3 mr-1" />
              Clear All
            </Button>
          )}
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
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Status Filter */}
        <div>
          <Label className="text-sm font-medium mb-3 block">Status</Label>
          <div className="space-y-2">
            {statusItem.map((status) => (
              <div key={status} className="flex items-center space-x-2 ">
                <Checkbox
                  id={`status-${status}`}
                  checked={selectedStatus.includes(status)}
                  onCheckedChange={(checked) =>
                    handleStatusChange(status, checked as boolean)
                  }
                  className="cursor-pointer"
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
          <div className="space-y-2 ">
            {categoryItem.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={`category-${category}`}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={(checked) =>
                    handleCategoryChange(category, checked as boolean)
                  }
                  className="cursor-pointer"
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
          <RadioGroup
            value={selectedPricingModels}
            onValueChange={handlePricingModelChange}
          >
            {pricingModelItem.map((model) => (
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
      </CardContent>
    </Card>
  );
}
