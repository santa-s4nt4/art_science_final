function setup() {
        createCanvas(windowWidth, windowHeight);
        fill(255);
        frameRate(random(1, 5));
}
function draw() {
        for (let i = 0; i < 10; i++) {
                textSize(32);
                text('I want school credits.', random(0, windowWidth), random(0, windowHeight));
                fill(0, 102, 153);
                text('I want school credits.', random(0, windowWidth), random(0, windowHeight));
                fill(0, 102, 153);
                text('I want school credits.', random(0, windowWidth), random(0, windowHeight));
        }
        for (let i = 0; i < 100; i++) {
                fill(255);
                textSize(100);
                textAlign(CENTER, CENTER);
                text('Modern education is wrong.', windowWidth / 2, windowHeight / 2);
        }
}