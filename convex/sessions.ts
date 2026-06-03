import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const saveSession = mutation({
  args: {
    type: v.union(v.literal("reading"), v.literal("fortune")),
    selectedColor: v.string(),
    colorName: v.string(),
    resultId: v.string(),
    resultTitle: v.string(),
    resultCategory: v.string(),
    resultText: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");

    return await ctx.db.insert("sessions", {
      userId: identity.subject,
      ...args,
      createdAt: Date.now(),
    });
  },
});

export const getUserHistory = query({
  args: {
    type: v.optional(v.union(v.literal("reading"), v.literal("fortune"))),
  },
  handler: async (ctx, { type }) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) return [];

    const q = ctx.db.query("sessions");

    if (type) {
      const results = await q
        .withIndex("by_user_type", (qb) =>
          qb.eq("userId", identity.subject).eq("type", type),
        )
        .order("desc")
        .take(50);
      return results;
    }

    return await q
      .withIndex("by_user", (qb) => qb.eq("userId", identity.subject))
      .order("desc")
      .take(50);
  },
});
