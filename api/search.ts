import type { VercelRequest, VercelResponse } from "@vercel/node";

import { searchIcons, TOTAL_ICONS } from "../shared/icon-catalog.js";

const firstValue = (value: string | string[] | undefined) => {
  if (Array.isArray(value)) {
    return value[0];
  }
  return value;
};

// GET /api/search?q=<query>&limit=25&variant=<variant>&category=<id>
// Token-light: returns icon names + import lines only, never SVG markup.
export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "public, max-age=300, s-maxage=3600");

  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed. Use GET." });
    return;
  }

  const query = firstValue(req.query.q) ?? firstValue(req.query.query) ?? "";
  const limitRaw = firstValue(req.query.limit);
  const limit = limitRaw ? Math.trunc(Number(limitRaw)) : undefined;

  const result = searchIcons(query, {
    category: firstValue(req.query.category),
    limit: Number.isFinite(limit) ? limit : undefined,
    variant: firstValue(req.query.variant),
  });

  res.status(200).json({
    ...result,
    available: TOTAL_ICONS,
    hint: "Fetch one icon via /api/icon?name=<name> or the get_icon MCP tool.",
  });
}
