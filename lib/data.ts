import rawData from "@/data/dlss-data.json";
import type { DLSSData } from "@/types/dlss";

export const data = rawData as unknown as DLSSData;
