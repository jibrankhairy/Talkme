"use client";

import React from "react";
import { Button } from "./ui/button";
import { MessageSquarePlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const CreateChatButton = () => {
  const router = useRouter();

  const createNewChat = async () => {
    router.push("/chat/abc");
  };

  return (
    <Button onClick={createNewChat} variant={"ghost"}>
      <MessageSquarePlusIcon className="text-indigo-400 dark:hover:text-pink-400 transition-colors duration-300" />
    </Button>
  );
};

export default CreateChatButton;
