import type { MetadataRoute } from "next";

const routes = [
  "",
  "/services",
  "/about",
  "/doctors",
  "/doctors/dr-chris-schmaltz",
  "/doctors/dr-neha-patel",
  "/doctors/dr-courtney-gieseke",
  "/new-patients",
  "/news",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nldentalfargo.com";
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
