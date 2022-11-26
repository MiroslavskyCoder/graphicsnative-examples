const { EffectsNative } = require("@bymiroslavsky/graphicsnative"); 
const { writeFileSync } = require("fs"); 
 
const config = { 
 input: "./example.jpg", 
 output: "./dem.png", 
 font: "./Montserrat-Regular.ttf", 
 width: 620, 
 height: 620 
} 
 
const image = EffectsNative.createImage(config.width, config.height); 
const imageSrc = new EffectsNative(config.input); 
 
imageSrc.resize(`512:480`); 
 
const imageBorder = EffectsNative.createImage(imageSrc.width, imageSrc.height); 
 
imageBorder.addBorder({ color: "black", height: 3, width: 3 }); 
imageBorder.addBorder({ color: "white", height: 2, width: 2 }); 
 
image.addSource({ 
 source: imageSrc.context, 
 x: (image.width - imageSrc.width) * 0.5, 
 y: 35, 
 width: imageSrc.width, 
 height: imageSrc.height 
}); 
 
imageBorder.transparent("black"); 
 
image.addSource({ 
 source: imageBorder.context, 
 x: (image.width - imageBorder.width) * 0.5, 
 y: 30, 
 width: imageBorder.width, 
 height: imageBorder.height 
}); 
 
writeFileSync(config.output, image.toBuffer("png"));
