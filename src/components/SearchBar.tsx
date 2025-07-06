/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { Bot, Filter, Search } from "lucide-react";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { setSearchQuery } from "@/redux/slice/agentSlice";

export default function SearchBar() {
  const dispatch = useAppDispatch();
  const { agents, filteredAgents, filters } = useAppSelector(
    (state: RootState) => state.agents
  );

  const hasActiveFilters =
    filters.searchQuery ||
    filters.selectedStatus.length > 0 ||
    filters.selectedCategories.length > 0 ||
    filters.selectedPricingModels;

  return (
    <div>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          type="text"
          placeholder="Search agents by name or description..."
          className="pl-10 w-full py-3"
          value={filters.searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />
      </div>

      <div className="mt-4 ml-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Showing{" "}
                <span className="font-medium text-foreground">
                  {filteredAgents.length}
                </span>{" "}
                of{" "}
                <span className="font-medium text-foreground">
                  {agents.length}
                </span>{" "}
                agents
              </span>
            </div>
            {hasActiveFilters && (
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <Badge variant="secondary" className="text-xs">
                  Filtered
                </Badge>
              </div>
            )}
          </div>
          {filters.searchQuery && (
            <div className="text-sm text-muted-foreground">
              Search:{" "}
              <span className="font-medium text-foreground">
                {filters.searchQuery}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
