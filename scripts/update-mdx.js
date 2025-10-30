#!/bin/env node
import dayjs from "dayjs";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const files = process.argv.slice(2);

files.forEach((file) => {
  const fullPath = path.resolve(file);

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  const stats = fs.statSync(fullPath);
  const fileTime = dayjs(stats.mtime).format("YYYY-MM-DD HH:mm:ss");

  if (data.isPublished) {
    if (!data.publishedOn) {
      data.publishedOn = fileTime;
      console.log(`Added "PublishedOn" in ${file}: ${fileTime}`);
    }

    const prevUpdatedOn = data.updatedOn
      ? dayjs(data.updatedOn)
      : null;
    if (
      !prevUpdatedOn ||
      prevUpdatedOn.format("YYYY-MM-DD HH:mm:ss") !== fileTime
    ) {
    }
  } else {
    if (data.publishedOn || data.updatedOn) {
    }
  }
});
