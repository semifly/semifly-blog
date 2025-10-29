#!/bin/env node
import dayjs from "dayjs";
import fs from "fs";
import matter from "gray-matter";
import simpleGit from "simple-git";

const git = simpleGit();
const files = process.argv.slice(2);

async function processFile(file) {
  try {
    const content = fs.readFileSync(file, "utf8");
    const { data, content: body } = matter(content);

    const isTracked = await git.raw(["ls-files", "--error-unmatch", file]).then(
      () => true,
      () => false,
    );

    if (!isTracked && !data.updatedOn) {
      console.log(` First-time file: ${file} -> skip updatedOn`);
      return;
    }

    const now = dayjs().format("YYYY-MM-DD HH:mm:ss");
    data.updatedOn = now;
    const newContent = matter.stringify(body, data);
    fs.writeFileSync(file, newContent, "utf8");

    console.log(`updated "UpdatedOn" in ${file} -> ${now}`);
  } catch (err) {
    console.error(`Failed to update ${file}:`, err);
  }
}

(async () => {
  for (const file of files) {
    await processFile(file);
  }
})();
