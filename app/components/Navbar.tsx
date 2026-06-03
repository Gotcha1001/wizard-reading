// "use client";

// import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { useUserContext } from "../context/UserContext";
// import { ThemeToggle } from "./ThemeToggle";
// import { SidebarTrigger } from "@/components/ui/sidebar";

// export default function Navbar() {
//   const user = useUserContext();

//   return (
//     <motion.nav
//       className="flex items-center justify-between px-6 py-4 border-b bg-white dark:bg-gradient-to-r dark:from-purple-900 dark:via-purple-950 dark:to-indigo-950 border-gray-200 dark:border-purple-800 shadow-sm dark:shadow-purple-900/50"
//       initial={{ y: -40, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.4 }}
//     >
//       <SidebarTrigger className="md:hidden mr-2" />
//       <Link
//         href="/"
//         className="text-xl font-bold text-black dark:text-white tracking-tight"
//       >
//         🃏 UNO Arena
//       </Link>

//       <div className="flex items-center gap-3">
//         <SignedOut>
//           <Link href="/sign-in">
//             <Button
//               variant="ghost"
//               className="text-gray-700 dark:text-purple-200 hover:text-purple-600 dark:hover:text-purple-300"
//             >
//               Sign In
//             </Button>
//           </Link>
//           <Link href="/sign-up">
//             <Button className="bg-purple-600 dark:bg-purple-700 text-white hover:bg-purple-500 dark:hover:bg-purple-600">
//               Sign Up
//             </Button>
//           </Link>
//         </SignedOut>

//         <SignedIn>
//           <Link href="/lobby">
//             <Button
//               variant="ghost"
//               className="text-gray-700 dark:text-purple-200 hover:text-purple-600 dark:hover:text-purple-300"
//             >
//               Lobby
//             </Button>
//           </Link>
//           <Link href="/dashboard">
//             <Button
//               variant="ghost"
//               className="text-gray-700 dark:text-purple-200 hover:text-purple-600 dark:hover:text-purple-300"
//             >
//               Dashboard
//             </Button>
//           </Link>
//           {user?.role === "admin" && (
//             <Link href="/admin">
//               <Button
//                 variant="ghost"
//                 className="text-gray-700 dark:text-purple-200 hover:text-purple-600 dark:hover:text-purple-300"
//               >
//                 Admin
//               </Button>
//             </Link>
//           )}
//           <ThemeToggle />
//           <UserButton afterSignOutUrl="/" />
//         </SignedIn>
//       </div>
//     </motion.nav>
//   );
// }



"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { Users, LayoutDashboard, Swords, Bot } from "lucide-react";

const NAV_ITEMS = [
  { href: "/lobby",     icon: Users,           label: "Lobby" },
  { href: "/local",     icon: Swords,          label: "Local" },
  { href: "/vs-ai",     icon: Bot,             label: "vs AI" },
  { href: "/dashboard", icon: LayoutDashboard, label: "Stats" },
];

export default function Navbar() {
  const path = usePathname();

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 flex items-center justify-between px-4 h-14">
      <Link href="/" className="text-white font-black text-lg tracking-tight">
        ♟ Chess Arena
      </Link>

      <div className="flex items-center gap-1">
        {NAV_ITEMS.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-all ${
              path.startsWith(href)
                ? "bg-amber-500/20 text-amber-400 font-semibold"
                : "text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            <Icon size={15} />
            <span className="hidden sm:inline">{label}</span>
          </Link>
        ))}
        <div className="ml-2">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </nav>
  );
}