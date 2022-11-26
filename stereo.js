const { EffectsNative } = require("@bymiroslavsky/graphicsnative"); 
const { writeFileSync } = require("fs");
const { posToString } = require("./utils");

const image = new EffectsNative("./example.jpg");
const image2 = new EffectsNative("./example.jpg"); 

image.composite("geometry", image2, posToString(-50, 0));
image.stereo(image2);

writeFileSync("./stereo.png", image.toBuffer("png"));