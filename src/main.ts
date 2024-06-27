"use strict";

import { loadComicImage } from "./comic.js";
import { setCreatePostHandler } from "./blog.js";

document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

  if (path.includes("comic.html")) {
    loadComicImage();
  } else if (path.includes("blog.html")) {
    setCreatePostHandler();
  }
});
