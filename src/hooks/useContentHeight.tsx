"use client";
import { useState, useEffect } from "react";

export default function useContentHeight(selector: any) {
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    const content = document.querySelector(selector);
    if (content) {
      setContentHeight(content.offsetHeight);
    }
  }, [selector]);

  return contentHeight;
}
