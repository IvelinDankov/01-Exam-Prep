import { create } from "express-handlebars";
import mongoose from "mongoose";

function hbsCofig(app) {
  /* HBS START */
  const hbs = create({
    extname: "hbs",
    helpers: {
      setTitle(title) {
        this.pageTitle = title;
      },
      limitWords(text, limit) {
        const words = text.split(/\s+/);

        if (words.length <= limit) return text;
        return words.slice(0, limit).join(" ") + "...";
      },
    },
    runtimeOptions: {
      allowProtoMethodsByDefault: true,
      allowProtoPropertiesByDefault: true,
    },
  });

  app.engine("hbs", hbs.engine);
  app.set("view engine", "hbs");
  app.set("views", "src/views");
  /* HBS END */
}

async function mongooseConfig() {
  let dbName = "Wiki";

  try {
    await mongoose.connect("mongodb://localhost/", { dbName: dbName });
    console.log(`DB is connected with ${dbName}...`);
  } catch (err) {
    console.log(err.message);
    console.log(`DB is not connected to ${dbName} database!`);
  }
}

export default {
  hbsCofig,
  mongooseConfig,
};
