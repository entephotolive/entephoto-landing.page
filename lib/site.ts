import type { Metadata } from "next";

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, "https://www.entephoto.co.in").toString();
}

