"use client";

import Giscus from "@giscus/react";

export function Comments() {
  return (
    <Giscus
      repo="YOUR_GITHUB_USERNAME/YOUR_REPO_NAME"
      repoId="YOUR_REPO_ID"
      category="Announcements"
      categoryId="YOUR_CATEGORY_ID"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="light"
      lang="en"
    />
  );
}
