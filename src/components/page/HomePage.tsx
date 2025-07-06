"use client";

import FilterPanel from "@/components/FilterPanel";
import SearchBar from "@/components/SearchBar";
import agentData from "@/data/mock-agent.json";
import { useAppDispatch } from "@/redux/hooks";
import { setAgents, setLoading } from "@/redux/slice/agentSlice";
import { TAgents } from "@/types/global";
import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import { useEffect } from "react";
import AgentGrid from "../AgentGrid";

const headerAnimation = {
  initial: { opacity: 0, y: -100, scale: 0.8 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
};

const searchBarAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.1 },
  },
};

const filterPanelAnimation = {
  initial: { opacity: 0, x: -20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 0.3 },
  },
};

const agentInfoAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.4 },
  },
};

const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));

    setTimeout(() => {
      dispatch(setAgents(agentData as TAgents[]));
      dispatch(setLoading(false));
    }, 1000);
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          variants={headerAnimation}
          initial="initial"
          animate="animate"
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-2 md:mb-4">
            <Bot className="size-8 md:size-12 text-primary" />

            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              ArkLab AI Agents
            </h1>
          </div>
          <p className="text-sm md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover powerful AI agents designed to transform your business
            operations across various industries and use cases.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          variants={searchBarAnimation}
          initial="initial"
          animate="animate"
          className="mb-8 "
        >
          <SearchBar />
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <motion.div
            variants={filterPanelAnimation}
            initial="initial"
            animate="animate"
            className="lg:col-span-1 "
          >
            <div className="sticky top-8">
              {" "}
              <FilterPanel />
            </div>
          </motion.div>

          {/* Agent Grid */}
          <motion.div
            variants={agentInfoAnimation}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:col-span-3"
          >
            <AgentGrid />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
