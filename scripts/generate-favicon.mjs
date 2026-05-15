import sharp from "sharp";
import { join } from "path";

const src = join(process.cwd(), "public/images/stelios.jpg");
const appDir = join(process.cwd(), "src/app");

await sharp(src)
  .resize(32, 32, { fit: "cover", position: "centre" })
  .png()
  .toFile(join(appDir, "icon.png"));

await sharp(src)
  .resize(180, 180, { fit: "cover", position: "centre" })
  .png()
  .toFile(join(appDir, "apple-icon.png"));

console.log("Generated icon.png and apple-icon.png");
