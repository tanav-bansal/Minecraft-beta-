canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object = "";

var block_image_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150)
        player_object.scaleToHeight(140)
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img
        block_image_object.scaleToWidth(block_image_width)
        block_image_object.scaleToHeight(block_image_height)
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
    keyPressed = e.keyCode;
    if (e.shiftKey == true && keyPressed == "80") {
        block_image_width += 10
        block_image_height += 10
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;

    }
    if (e.shiftKey == true && keyPressed == "77") {
        block_image_width -= 10;
        block_image_height -= 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;

    }
    if (keyPressed == "38") {
        up()
        console.log("up");
    }
    if (keyPressed == "40") {
        down()
        console.log("down");
    }
    if (keyPressed == "37") {
        left()
        console.log("left");
    }
    if (keyPressed == "39") {
        right()
        console.log("right");
    }

    if (keyPressed == '71') {
        new_image('ground.png');
        console.log("g")
    }

    if (keyPressed == '84') {
        new_image('trunk.jpg');
        console.log("t")
    }

    if (keyPressed == '82') {
        new_image('redstone.jfif');
        console.log("r")
    }

    if (keyPressed == '89') {
        new_image('yellow_wall.png');
        console.log("y")
    }

    if (keyPressed == '67') {
        new_image('cobblestone.png');
        console.log("c")
    }
    if (keyPressed == '80') {
        new_image('woodplank.png');
        console.log("p")
    }
    if (keyPressed == '65') {
        new_image('air.jpg');
        console.log("a")
    }
    if (keyPressed == '66') {
        new_image('Bed.png');
        console.log("b")
    }
    if (keyPressed == '68') {
        new_image('Diamondblock.png');
        console.log("d")
    }
    if (keyPressed == '69') {
        new_image('endstone.png');
        console.log("e")
    }
    if (keyPressed == '70') {
        flower_img_array = ["flower1.png", "flower2.png", "flower3.png", "flower4.png"];
        var random_no = Math.floor(Math.random() * 4)
        new_image(flower_img_array[random_no])
        console.log("f")
    }
    if (keyPressed == '72') {
        new_image('haybale.png');
        console.log("h")
    }
    if (keyPressed == '73') {
        new_image('ironblock.png');
        console.log("i")
    }
    if (keyPressed == '74') {
        new_image('jacklantern.jpg');
        console.log("j")
    }
    if (keyPressed == '76') {
        new_image('lava.jfif');
        console.log("l")
    }
    if (keyPressed == '77') {
        new_image('mycelium.png');
        console.log("m")
    }
    if (keyPressed == '78') {
        new_image('netherrack.png');
        console.log("n")
    }
    if (keyPressed == '79') {
        new_image('obsidian.png');
        console.log("o")
    }
    if (keyPressed == '83') {
        new_image('sand.png');
        console.log("s")
    }
    if (keyPressed == '86') {
        new_image('villager.png');
        console.log("v")
    }
    if (keyPressed == '87') {
        new_image('water.png');
        console.log("w")
    }
    if (keyPressed == '90') {
        new_image('zombie.png');
        console.log("z")
    }
}


function up() {
    if (player_y >= 0) {
        player_y -= block_image_height
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if (player_y <= 440) {
        player_y += block_image_height
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if (player_x >= 0) {
        player_x -= block_image_width
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if (player_x <= 1140) {
        player_x += block_image_width
        canvas.remove(player_object);
        player_update();
    }
}