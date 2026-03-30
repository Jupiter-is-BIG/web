"use client";

import Giscus from "@giscus/react";

export function Comments() {
  return (
    <Giscus
      repo="Jupiter-is-BIG/web"
      repoId="R_kgDOR0b7zQ"
      category="Announcements"
      categoryId="DIC_kwDOR0b7zc4C5l6a"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="http://localhost:3000/_web/giscus.css"
      lang="en"
    />
  );
}
