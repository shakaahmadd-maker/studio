
import { z } from 'genkit';

// Define the schema for a single message part (currently only text)
const MessagePartSchema = z.object({
  text: z.string(),
});

// Define the schema for a single message in the history
const HistoryMessageSchema = z.object({
  role: z.enum(['user', 'assistant']),
  parts: z.array(MessagePartSchema),
});

export const ChatbotInputSchema = z.object({
  history: z.array(HistoryMessageSchema),
});

export type ChatbotInput = z.infer<typeof ChatbotInputSchema>;
