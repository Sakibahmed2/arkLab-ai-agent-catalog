import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { TAgents } from "@/types/global";
import { Loader2Icon, Search } from "lucide-react";
import AgentCard from "./AgentCard";

const AgentGrid = () => {
  const { filteredAgents, loading } = useAppSelector(
    (state: RootState) => state.agents
  );

  if (loading) {
    return (
      <div className="col-span-3 flex items-center flex-col ">
        <Loader2Icon className="animate-spin size-10 text-zinc-400" />
        <span className="ml-2 text-2xl text-zinc-500">Loading agents...</span>
      </div>
    );
  }

  if (filteredAgents.length === 0) {
    return (
      <div className="text-center py-12 col-span-3">
        <div className="mx-auto w-24 h-24 bg-zinc-100 rounded-full flex items-center justify-center mb-4">
          <Search className="w-8 h-8 " />
        </div>
        <h3 className="text-lg font-semibold mb-2">No agents found</h3>
        <p className="text-zinc-400">
          Try adjusting your search criteria or clearing some filters.
        </p>
      </div>
    );
  }

  return (
    <>
      {filteredAgents.map((agent, index) => (
        <div key={agent.id} className="mb-6">
          <AgentCard agent={agent as TAgents} index={index} />
        </div>
      ))}
    </>
  );
};

export default AgentGrid;
