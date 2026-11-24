// Contest entry: one sentence, absurd at first, real on a second read.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Cities buy napping-until-spring tags for dormant street trees so residents stop filing winter removal tickets, because one crew dispatch costs more than the tag.";

const chars = [...ENTRY].length;
if (chars < 1 || chars > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry length out of range: ${chars}`);
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, ENTRY, { encoding: "utf8" });
