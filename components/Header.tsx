import React from "react";
import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";
import UserButton from "./UserButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { MessageSquareIcon } from "lucide-react";
import Link from "next/link";
import CreateChatButton from "./CreateChatButton";

async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-sm dark:shadow-lg dark:shadow-indigo-500/50 transition-all duration-300 border-b border-gray-200 dark:border-none">
      <nav className="flex flex-col sm:flex-row items-center p-5 pl-2 max-w-7xl mx-auto">
        <Logo />

        <div className="flex-1 flex items-center justify-end space-x-4">
          {session ? (
            <>
              <Link href="/chat" prefetch={false}>
                <MessageSquareIcon className="text-indigo-400 dark:hover:text-pink-400 transition-colors duration-300" />
              </Link>
              <CreateChatButton />
            </>
          ) : (
            <Link
              href="/pricing"
              className="text-black dark:text-white hover:text-indigo-400 transition-colors duration-300"
            >
              Pricing
            </Link>
          )}

          <DarkModeToggle />
          <UserButton session={session} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
