"use client";
import useRedirect from "@/hooks/useUserRedirect";
import Sidebar from "./components/sidebar/Sidebar";
import { useGlobalContext } from "@/context/globalContext";
import Header from "./components/messages/Header/Header";
import Body from "./components/messages/Body/Body";
import TextArea from "./components/messages/TextArea/TextArea";
import Profile from "./components/profile/Profile";
import { useChatContext } from "@/context/chatContext";
import FriendProfile from "./components/friendProfile/FriendProfile";
import Online from "./components/online/Online";
import MainContent from "./components/mainContent/MainContent";

export default function Home() {
  useRedirect("/login");

  const { currentView, showFriendProfile, showProfile } = useGlobalContext();
  const { selectedChat } = useChatContext();

  return (
    <div className="relative px-8 lg:px-10 2xl:px-20 py-10 h-full">
      <main
        className="h-full flex backdrop-blur-sm rounded-3xl bg-white/65 dark:bg-[#262626]/90 border-2 border-white
        dark:border-[#3C3C3C]/65 shadow-sm overflow-hidden"
      >
        <Sidebar />
        <div className="flex-1 flex">
          <div className="relative flex-1 border-r-2 border-white dark:border-[#3C3C3C]/60">
            {/* Default Content */}
            {!showProfile && !selectedChat && <MainContent />}

            {!showProfile && selectedChat && <Header />}
            {!showProfile && selectedChat && <Body />}
            <div className="absolute w-full px-4 pb-4 left-0 bottom-0">
              {!showProfile && selectedChat && <TextArea />}
            </div>

            {showProfile && (
              <div className="flex flex-col items-center justify-center h-full">
                <Profile />
              </div>
            )}
          </div>
          <div className="w-[30%]">
            {!showFriendProfile && <Online />}
            {showFriendProfile && <FriendProfile />}
          </div>
        </div>
      </main>
    </div>
  );
}
