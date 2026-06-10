// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useQuery } from "convex/react";
// import { api } from "@/convex/_generated/api";
// import {
//   BookOpen,
//   Sparkles,
//   Clock,
//   ChevronDown,
//   ChevronUp,
//   type LucideIcon,
// } from "lucide-react";
// import { cn } from "@/lib/utils";

// type FilterType = "all" | "reading" | "fortune";

// export default function HistoryPage() {
//   const [filter, setFilter] = useState<FilterType>("all");
//   const [expandedId, setExpandedId] = useState<string | null>(null);

//   const sessions = useQuery(
//     api.sessions.getUserHistory,
//     filter === "all" ? {} : { type: filter },
//   );

//   const formatDate = (timestamp: number) => {
//     return new Intl.DateTimeFormat("en-GB", {
//       day: "numeric",
//       month: "short",
//       year: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//     }).format(new Date(timestamp));
//   };

//   const filters: { value: FilterType; label: string; icon: LucideIcon }[] = [
//     { value: "all", label: "All", icon: Clock },
//     { value: "reading", label: "Readings", icon: BookOpen },
//     { value: "fortune", label: "Fortunes", icon: Sparkles },
//   ];

//   return (
//     <div className="min-h-screen p-6 md:p-10">
//       <motion.div
//         initial={{ opacity: 0, y: -15 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-center mb-10 space-y-2"
//       >
//         <p className="text-purple-400 font-serif text-xs tracking-[0.5em] uppercase">
//           ✦ Sacred Archive ✦
//         </p>
//         <h1 className="font-serif text-4xl text-white glow-text">
//           Ancient Scrolls
//         </h1>
//         <p className="text-purple-300/60 font-body text-sm max-w-md mx-auto">
//           Every vision you&apos;ve received, preserved in the mystical archives.
//         </p>
//         <div className="mystical-divider max-w-48 mx-auto" />
//       </motion.div>

//       {/* Filter tabs */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.2 }}
//         className="flex justify-center gap-2 mb-8"
//       >
//         {filters.map(({ value, label, icon: Icon }) => (
//           <button
//             key={value}
//             onClick={() => setFilter(value)}
//             className={cn(
//               "flex items-center gap-2 px-5 py-2 rounded-full font-serif text-sm transition-all duration-300",
//               filter === value
//                 ? "bg-purple-700/60 text-fuchsia-200 border border-purple-500/50 shadow-mystical"
//                 : "text-purple-400 border border-purple-800/30 hover:border-purple-600/50 hover:text-purple-200",
//             )}
//           >
//             <Icon className="w-4 h-4" />
//             {label}
//           </button>
//         ))}
//       </motion.div>

//       {/* Sessions list */}
//       <div className="max-w-2xl mx-auto space-y-3">
//         {sessions === undefined && (
//           <div className="text-center py-20">
//             <motion.div
//               animate={{ rotate: 360 }}
//               transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//               className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"
//             />
//             <p className="text-purple-400 font-serif text-sm">
//               Consulting the archives...
//             </p>
//           </div>
//         )}

//         {sessions?.length === 0 && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-center py-20 mystical-card rounded-2xl p-10"
//           >
//             <div className="text-4xl mb-4">🔮</div>
//             <p className="text-purple-300 font-serif text-lg mb-2">
//               The scrolls are empty
//             </p>
//             <p className="text-purple-500 font-body text-sm">
//               Your first reading or fortune will be preserved here.
//             </p>
//           </motion.div>
//         )}

//         <AnimatePresence>
//           {sessions?.map((session, i: number) => {
//             const isExpanded = expandedId === session._id;
//             const isReading = session.type === "reading";

//             return (
//               <motion.div
//                 key={session._id}
//                 initial={{ opacity: 0, y: 15 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.06 }}
//                 className="mystical-card rounded-xl border border-purple-800/20 overflow-hidden"
//               >
//                 <button
//                   className="w-full p-4 flex items-center gap-4 text-left hover:bg-purple-900/20 transition-colors"
//                   onClick={() => setExpandedId(isExpanded ? null : session._id)}
//                 >
//                   {/* Color dot */}
//                   <div
//                     className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center"
//                     style={{
//                       backgroundColor: session.selectedColor + "33",
//                       border: `2px solid ${session.selectedColor}80`,
//                       boxShadow: `0 0 12px ${session.selectedColor}60`,
//                     }}
//                   >
//                     {isReading ? (
//                       <BookOpen className="w-4 h-4 text-purple-300" />
//                     ) : (
//                       <Sparkles className="w-4 h-4 text-fuchsia-300" />
//                     )}
//                   </div>

//                   <div className="flex-1 min-w-0">
//                     <div className="flex items-center gap-2 mb-0.5">
//                       <span
//                         className={cn(
//                           "text-xs font-serif px-2 py-0.5 rounded-full border",
//                           isReading
//                             ? "text-purple-300 border-purple-700/50 bg-purple-900/30"
//                             : "text-fuchsia-300 border-fuchsia-700/50 bg-fuchsia-900/30",
//                         )}
//                       >
//                         {isReading ? "Reading" : "Fortune"}
//                       </span>
//                       <span className="text-xs text-purple-500 font-serif">
//                         {session.colorName}
//                       </span>
//                     </div>
//                     <p className="text-white font-serif text-sm font-medium truncate">
//                       {session.resultTitle}
//                     </p>
//                     <p className="text-purple-400 text-xs font-body mt-0.5">
//                       {formatDate(session.createdAt)}
//                     </p>
//                   </div>

//                   {isExpanded ? (
//                     <ChevronUp className="w-4 h-4 text-purple-400 shrink-0" />
//                   ) : (
//                     <ChevronDown className="w-4 h-4 text-purple-400 shrink-0" />
//                   )}
//                 </button>

//                 <AnimatePresence>
//                   {isExpanded && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       transition={{ duration: 0.3 }}
//                       className="overflow-hidden"
//                     >
//                       <div className="px-4 pb-4 border-t border-purple-800/20 pt-4">
//                         <p className="text-purple-200/80 font-body text-sm leading-7 italic">
//                           {session.resultText}
//                         </p>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             );
//           })}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import {
  BookOpen,
  Sparkles,
  Clock,
  ChevronDown,
  ChevronUp,
  Trash2,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

type FilterType = "all" | "reading" | "fortune";

export default function HistoryPage() {
  const [filter, setFilter] = useState<FilterType>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const sessions = useQuery(
    api.sessions.getUserHistory,
    filter === "all" ? {} : { type: filter },
  );

  const deleteSession = useMutation(api.sessions.deleteSession);

  const handleDelete = async (e: React.MouseEvent, id: Id<"sessions">) => {
    e.stopPropagation(); // don't toggle expand
    setDeletingId(id);
    try {
      await deleteSession({ id });
    } catch (err) {
      console.error("Failed to delete session", err);
    } finally {
      setDeletingId(null);
    }
  };

  const formatDate = (timestamp: number) => {
    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(timestamp));
  };

  const filters: { value: FilterType; label: string; icon: LucideIcon }[] = [
    { value: "all", label: "All", icon: Clock },
    { value: "reading", label: "Readings", icon: BookOpen },
    { value: "fortune", label: "Fortunes", icon: Sparkles },
  ];

  return (
    <div className="min-h-screen p-6 md:p-10">
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10 space-y-2"
      >
        <p className="text-purple-400 font-serif text-xs tracking-[0.5em] uppercase">
          ✦ Sacred Archive ✦
        </p>
        <h1 className="font-serif text-4xl text-white glow-text">
          Ancient Scrolls
        </h1>
        <p className="text-purple-300/60 font-body text-sm max-w-md mx-auto">
          Every vision you&apos;ve received, preserved in the mystical archives.
        </p>
        <div className="mystical-divider max-w-48 mx-auto" />
      </motion.div>

      {/* Filter tabs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex justify-center gap-2 mb-8"
      >
        {filters.map(({ value, label, icon: Icon }) => (
          <button
            key={value}
            onClick={() => setFilter(value)}
            className={cn(
              "flex items-center gap-2 px-5 py-2 rounded-full font-serif text-sm transition-all duration-300",
              filter === value
                ? "bg-purple-700/60 text-fuchsia-200 border border-purple-500/50 shadow-mystical"
                : "text-purple-400 border border-purple-800/30 hover:border-purple-600/50 hover:text-purple-200",
            )}
          >
            <Icon className="w-4 h-4" />
            {label}
          </button>
        ))}
      </motion.div>

      {/* Sessions list */}
      <div className="max-w-2xl mx-auto space-y-3">
        {sessions === undefined && (
          <div className="text-center py-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"
            />
            <p className="text-purple-400 font-serif text-sm">
              Consulting the archives...
            </p>
          </div>
        )}

        {sessions?.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 mystical-card rounded-2xl p-10"
          >
            <div className="text-4xl mb-4">🔮</div>
            <p className="text-purple-300 font-serif text-lg mb-2">
              The scrolls are empty
            </p>
            <p className="text-purple-500 font-body text-sm">
              Your first reading or fortune will be preserved here.
            </p>
          </motion.div>
        )}

        <AnimatePresence>
          {sessions?.map((session, i: number) => {
            const isExpanded = expandedId === session._id;
            const isReading = session.type === "reading";
            const isBeingDeleted = deletingId === session._id;

            return (
              <motion.div
                key={session._id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -30, transition: { duration: 0.25 } }}
                transition={{ delay: i * 0.06 }}
                className="mystical-card rounded-xl border border-purple-800/20 overflow-hidden"
              >
                <button
                  className="w-full p-4 flex items-center gap-4 text-left hover:bg-purple-900/20 transition-colors"
                  onClick={() => setExpandedId(isExpanded ? null : session._id)}
                >
                  {/* Color dot */}
                  <div
                    className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center"
                    style={{
                      backgroundColor: session.selectedColor + "33",
                      border: `2px solid ${session.selectedColor}80`,
                      boxShadow: `0 0 12px ${session.selectedColor}60`,
                    }}
                  >
                    {isReading ? (
                      <BookOpen className="w-4 h-4 text-purple-300" />
                    ) : (
                      <Sparkles className="w-4 h-4 text-fuchsia-300" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span
                        className={cn(
                          "text-xs font-serif px-2 py-0.5 rounded-full border",
                          isReading
                            ? "text-purple-300 border-purple-700/50 bg-purple-900/30"
                            : "text-fuchsia-300 border-fuchsia-700/50 bg-fuchsia-900/30",
                        )}
                      >
                        {isReading ? "Reading" : "Fortune"}
                      </span>
                      <span className="text-xs text-purple-500 font-serif">
                        {session.colorName}
                      </span>
                    </div>
                    <p className="text-white font-serif text-sm font-medium truncate">
                      {session.resultTitle}
                    </p>
                    <p className="text-purple-400 text-xs font-body mt-0.5">
                      {formatDate(session.createdAt)}
                    </p>
                  </div>

                  {/* Delete button */}
                  <motion.button
                    onClick={(e) =>
                      handleDelete(e, session._id as Id<"sessions">)
                    }
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    disabled={isBeingDeleted}
                    className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-purple-600 hover:text-red-400 hover:bg-red-900/20 border border-transparent hover:border-red-800/30 transition-all duration-200 disabled:opacity-40"
                    title="Banish this scroll"
                  >
                    {isBeingDeleted ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-3 h-3 border border-red-400 border-t-transparent rounded-full"
                      />
                    ) : (
                      <Trash2 className="w-3.5 h-3.5" />
                    )}
                  </motion.button>

                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-purple-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-purple-400 shrink-0" />
                  )}
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 border-t border-purple-800/20 pt-4">
                        <p className="text-purple-200/80 font-body text-sm leading-7 italic">
                          {session.resultText}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
