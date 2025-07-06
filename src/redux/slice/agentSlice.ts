import { TAgents, TFilterValues } from "@/types/global";
import { createSlice } from "@reduxjs/toolkit";

export type AgentState = {
  agents: TAgents[];
  filteredAgents: TAgents[];
  filters: TFilterValues;
  loading: boolean;
};

const initialState: AgentState = {
  agents: [],
  filteredAgents: [],
  filters: {
    searchQuery: "",
    selectedStatus: [],
    selectedCategories: [],
    selectedPricingModels: "",
  },
  loading: false,
};

const agentSlice = createSlice({
  name: "agents",
  initialState,
  reducers: {
    setAgents: (state, action) => {
      state.agents = action.payload;
      state.filteredAgents = action.payload;
    },

    setSearchQuery: (state, action) => {
      state.filters.searchQuery = action.payload;
      agentSlice.caseReducers.applyFilters(state);
    },

    setSelectedStatus: (state, action) => {
      state.filters.selectedStatus = action.payload;
      agentSlice.caseReducers.applyFilters(state);
    },

    setSelectedCategories: (state, action) => {
      state.filters.selectedCategories = action.payload;
      agentSlice.caseReducers.applyFilters(state);
    },

    setSelectedPricingModels: (state, action) => {
      state.filters.selectedPricingModels = action.payload;
      agentSlice.caseReducers.applyFilters(state);
    },

    clearAllFilters: (state) => {
      state.filters = {
        searchQuery: "",
        selectedStatus: [],
        selectedCategories: [],
        selectedPricingModels: "",
      };
      state.filteredAgents = state.agents;
    },

    applyFilters: (state) => {
      let filtered = state.agents;

      // apply search query filter
      if (state.filters.searchQuery) {
        const query = state.filters.searchQuery.toLowerCase();

        filtered = filtered.filter(
          (agent) =>
            agent.name.toLowerCase().includes(query) ||
            agent.description.toLowerCase().includes(query)
        );
      }

      // apply status filter
      if (state.filters.selectedStatus.length > 0) {
        filtered = filtered.filter((agent) =>
          state.filters.selectedStatus.includes(agent.status)
        );
      }

      // apply category filter
      if (state.filters.selectedCategories.length > 0) {
        filtered = filtered.filter((agent) =>
          state.filters.selectedCategories.includes(agent.category)
        );
      }

      // apply pricing model filter
      if (state.filters.selectedPricingModels) {
        filtered = filtered.filter(
          (agent) => agent.pricingModel === state.filters.selectedPricingModels
        );
      }

      state.filteredAgents = filtered;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setAgents,
  setSearchQuery,
  setSelectedStatus,
  setSelectedCategories,
  setSelectedPricingModels,
  clearAllFilters,
  setLoading,
} = agentSlice.actions;
export default agentSlice.reducer;
