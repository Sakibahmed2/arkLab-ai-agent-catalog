"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TAgents } from "@/types/global";
import { motion } from "framer-motion";
import { Bot } from "lucide-react";

interface AgentCardProps {
  agent: TAgents;
  index: number;
}

const cardAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  whileHover: { y: -4, transition: { duration: 0.2 } },
};

const AgentCard = ({ agent, index }: AgentCardProps) => {
  return (
    <motion.div
      variants={cardAnimation}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow duration-200  hover:border-primary/20">
        <CardHeader>
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <div className=" w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <CardTitle className="text-lg ">{agent.name}</CardTitle>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge
              variant="outline"
              className={cn(
                ` flex items-center gap-1 border-2`,
                agent.status === "Active"
                  ? "text-green-600 border-green-200"
                  : agent.status === "Beta"
                  ? "text-red-600 border-red-200"
                  : "text-yellow-600 border-yellow-200"
              )}
            >
              {agent.status}
            </Badge>
            <Badge
              className={cn(
                "",
                agent.pricingModel === "Free Tier"
                  ? "text-green-600 bg-green-100"
                  : agent.pricingModel === "Subscription"
                  ? "text-blue-600 bg-blue-100"
                  : "text-yellow-600 bg-yellow-100"
              )}
            >
              {agent.pricingModel}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <CardDescription className="text-sm text-zinc-500 mb-3 line-clamp-3">
            {agent.description}
          </CardDescription>
          <div className="flex items-center justify-between">
            <Badge className="text-sm bg-zinc-100 text-zinc-700 border border-zinc-300 px-2 py-1">
              {agent.category}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AgentCard;
