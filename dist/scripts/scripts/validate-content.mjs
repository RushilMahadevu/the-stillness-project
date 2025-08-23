import { promises as fs } from "fs";
import path from "path";
const docsDir = path.join(process.cwd(), "contents/docs");
async function getMdxFiles(dir) {
    let files = [];
    try {
        const items = await fs.readdir(dir, { withFileTypes: true });
        for (const item of items) {
            const fullPath = path.join(dir, item.name);
            if (item.isDirectory()) {
                const subFiles = await getMdxFiles(fullPath);
                files = files.concat(subFiles);
            }
            else if (item.name.endsWith(".mdx")) {
                files.push(fullPath);
            }
        }
    }
    catch (error) {
        console.error(`Error reading directory ${dir}:`, error);
        throw error;
    }
    return files;
}
async function validateDurationConsistency() {
    const issues = [];
    const mdxFiles = await getMdxFiles(docsDir);
    for (const file of mdxFiles) {
        try {
            const content = await fs.readFile(file, "utf-8");
            const lines = content.split("\n");
            lines.forEach((line, index) => {
                // Check for inconsistent interview durations
                if (line.includes("35-minute") || line.includes("35 minute")) {
                    issues.push({
                        file: path.relative(process.cwd(), file),
                        issue: "Found 35-minute reference - should be 15 minutes for interviews",
                        line: index + 1,
                    });
                }
                // Check for inconsistent survey durations (should be 4-6 minutes)
                if (line.match(/survey.*\d+-\d+\s*minute/i) && !line.includes("4-6")) {
                    const match = line.match(/(\d+-\d+)\s*minute/i);
                    if (match && match[1] !== "4-6") {
                        issues.push({
                            file: path.relative(process.cwd(), file),
                            issue: `Found survey duration "${match[1]} minutes" - should be 4-6 minutes`,
                            line: index + 1,
                        });
                    }
                }
            });
        }
        catch (error) {
            issues.push({
                file: path.relative(process.cwd(), file),
                issue: `Error reading file: ${error}`,
            });
        }
    }
    return issues;
}
async function validateContent() {
    console.log("🔍 Validating content consistency...");
    try {
        const durationIssues = await validateDurationConsistency();
        if (durationIssues.length === 0) {
            console.log("✅ No content validation issues found");
        }
        else {
            console.log(`❌ Found ${durationIssues.length} validation issues:`);
            durationIssues.forEach((issue) => {
                const location = issue.line ? `:${issue.line}` : "";
                console.log(`  ${issue.file}${location}: ${issue.issue}`);
            });
            process.exit(1);
        }
    }
    catch (error) {
        console.error("Error during validation:", error);
        process.exit(1);
    }
}
validateContent();
