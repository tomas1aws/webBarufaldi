import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots():MetadataRoute.Robots{return {rules:{userAgent:'*',allow:'/webBarufaldi/'},sitemap:'https://tomas1aws.github.io/webBarufaldi/sitemap.xml'};}
