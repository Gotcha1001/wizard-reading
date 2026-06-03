import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    clerkId: v.string(),
    email: v.string(),
    name: v.string(),
    imageUrl: v.optional(v.string()),
    createdAt: v.number(),
  }).index("by_clerk_id", ["clerkId"]),

  sessions: defineTable({
    userId: v.string(),
    type: v.union(v.literal("reading"), v.literal("fortune")),
    selectedColor: v.string(),
    colorName: v.string(),
    resultId: v.string(),
    resultTitle: v.string(),
    resultCategory: v.string(),
    resultText: v.string(),
    createdAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_user_type", ["userId", "type"]),
});
