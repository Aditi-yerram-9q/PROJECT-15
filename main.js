canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
greencar_width = 75;
greencar_height = 100;
greencar_x = 5;
greencar_y = 225;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

function add() {
	background_img_tag = new Image();
    background_img_tag.onload = uploadBackground;
    background_img_tag.src = background_image;

    rover_img_tag = new Image();
    rover_img_tag.onload = uploadRoverImg;
    rover_img_tag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_img_tag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {

	ctx.drawImage(greencar_img_tag, greencar_x, greencar_y, greencar_width, greencar_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (greencar_y >= 0) {
        greencar_y = greencar_y - 10;
        console.log("when up arrow is pressed, X=" + greencar_x + " and y=" + greencar_y);
        uploadBackground();
        uploadRoverImg();

	}
}

function down()
{
    if (greencar_y <= 500) {
        greencar_y = greencar + 10;
        console.log("when up arrow is pressed, X=" + greencar_x + " and y=" + greencar_y);
        uploadBackground();
        uploadRoverImg();
    }

}

function left()
{
	if (greencar_x > 0) {
        greencar_x -= 10;
        console.log("when up arrow is pressed, X=" + greencar_x + " and y=" + greencar_y);
        uploadBackground();
        uploadRoverImg();
    }
}

function right()
{
	if (greencar_x <= 700) {
        greencar_x += 10;
        console.log("when up arrow is pressed, X=" + greencar_x + " and y=" + greencar_y);
        uploadBackground();
        uploadRoverImg();
    }
}
