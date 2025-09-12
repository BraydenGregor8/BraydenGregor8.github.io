$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(195, 650, 10, 50, "black");
    createPlatform(290, 550, 40, 3, "black");
    createPlatform(440, 530, 50, 5, "black");
    createPlatform(500, 400, 50, 10, "black");
    createPlatform(570, 350, 5, 50, "black");
    createPlatform(670, 260, 50, 5, "black");
    createPlatform(850, 260, 60, 5, "black");
    createPlatform(130, 400, 180, 3, "black");
    createPlatform(900, 400, 90, 5, "black");
    createPlatform(220, 320, 90, 5, "black");
    createPlatform(990, 350, 5, 50, "black");
    // TODO 3 - Create Collectables
    createCollectable("bass", 90, 370);
    createCollectable("note", 940, 360);
    createCollectable("treble", 90, 270);
    createCollectable("note", 940, 360);
    // TODO 4 - Create Cannons
    createCannon("top", 600, 4000);
    createCannon("right", 400, 6000);
    createCannon("top", 800, 5500);
    createCannon("right", 600, 4500);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
