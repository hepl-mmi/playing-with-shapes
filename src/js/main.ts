import {drawCircle, drawDiamond, drawRectangle, drawTriangle, fillCanvas} from "./helpers";

function drawSwissFlag() {
    const swissCanvas: HTMLCanvasElement = document.getElementById("Swiss-flag") as HTMLCanvasElement;
    const swissCanvasContext: CanvasRenderingContext2D = swissCanvas.getContext("2d");
    const rect = {width: 280, height: 60};
    fillCanvas("red", swissCanvasContext, swissCanvas);

    drawRectangle(swissCanvasContext, "red", 0, 0, swissCanvas.width, swissCanvas.height);
    drawRectangle(swissCanvasContext, "white", swissCanvas.width / 2, swissCanvas.height / 2, rect.width, rect.height);
    drawRectangle(swissCanvasContext, "white", swissCanvas.width / 2, swissCanvas.height / 2, rect.width, rect.height, true,2,90);
}

function drawHome() {
    const homeCanvas: HTMLCanvasElement = document.getElementById("home") as HTMLCanvasElement;
    const homeCanvasContext: CanvasRenderingContext2D = homeCanvas.getContext("2d");


  homeCanvasContext.lineWidth = 5;

// --- Lignes (toit et murs)

// Couleur de ligne
  homeCanvasContext.strokeStyle = "red";

// Ouverture du chemin
  homeCanvasContext.beginPath();

// Lignes (toit)
  homeCanvasContext.moveTo(40, 80);
  homeCanvasContext.lineTo(80, 40);
  homeCanvasContext.lineTo(120, 80);

// Lignes (murs)
  homeCanvasContext.moveTo(60, 80);
  homeCanvasContext.lineTo(60, 120);
  homeCanvasContext.lineTo(100, 120);
  homeCanvasContext.lineTo(100, 80);

// --- Rectangle (porte)
  homeCanvasContext.rect(75,100,10,20);

// Tracé
  homeCanvasContext.stroke();

// Nouveau style
  homeCanvasContext.strokeStyle = "turquoise";

// --- Courbes de Bézier

// Nouveau chemin
  homeCanvasContext.beginPath();

  homeCanvasContext.moveTo(20, 150);
  homeCanvasContext.bezierCurveTo(80,130,80,180,140,150);

  homeCanvasContext.moveTo(20, 170);
  homeCanvasContext.bezierCurveTo(80,150,80,200,140,170);

// Tracé
  homeCanvasContext.stroke();

// --- Arc (soleil)
  homeCanvasContext.fillStyle = "yellow";
  homeCanvasContext.strokeStyle = "orange";

// Nouveau chemin
  homeCanvasContext.beginPath();

  homeCanvasContext.arc(150,40,30,0,Math.PI*2,true);

// Tracé
  homeCanvasContext.fill();
  homeCanvasContext.stroke();

// --- Courbe de Bézier quadratique (sourire)

// Nouveau chemin
  homeCanvasContext.beginPath();

  homeCanvasContext.strokeStyle = "orange";

  homeCanvasContext.moveTo(130, 40);
  homeCanvasContext.quadraticCurveTo(150,70,170,40);

// Tracé
  homeCanvasContext.stroke();

// --- ArcTo (arbre)

  homeCanvasContext.beginPath();
  homeCanvasContext.strokeStyle = "LimeGreen";

  homeCanvasContext.moveTo(20,120);
  homeCanvasContext.arcTo(20,30,160,120,20);

// Tracé
  homeCanvasContext.stroke();

}

function drawMasterCard() {
    const masterCardCanvas: HTMLCanvasElement = document.getElementById("master-card") as HTMLCanvasElement;
    const masterCardCanvasContext: CanvasRenderingContext2D = masterCardCanvas.getContext("2d");
    const shapes = {
        circle1: {diameter: 200, color: "#ff1b16"},
        circle2: {diameter: 200, color: "rgba(250,160,0,0.6)"}
    };
    fillCanvas("black", masterCardCanvasContext, masterCardCanvas);

    // I draw the right circle in white once.
    drawCircle(masterCardCanvasContext, "rgba(250,160,0,1)", masterCardCanvas.width / 2 + shapes.circle1.diameter / 4, masterCardCanvas.height / 2, shapes.circle2.diameter, shapes.circle2.diameter);
    // I draw the circle on the left
    drawCircle(masterCardCanvasContext, shapes.circle1.color, masterCardCanvas.width / 2 - shapes.circle1.diameter / 4, masterCardCanvas.height / 2, shapes.circle1.diameter, shapes.circle1.diameter)
    // I redraw the circle on the left but with transparency.
    drawCircle(masterCardCanvasContext, shapes.circle2.color, masterCardCanvas.width / 2 + shapes.circle1.diameter / 4, masterCardCanvas.height / 2, shapes.circle2.diameter, shapes.circle2.diameter);


    masterCardCanvasContext.beginPath();
    masterCardCanvasContext.fillStyle = "white";
    masterCardCanvasContext.font = '48px Helvetica Neue';
    masterCardCanvasContext.textAlign = 'center';
    masterCardCanvasContext.fillText("mastercard", masterCardCanvas.width / 2, masterCardCanvas.height - 25);
}

function drawTriangles() {
    const triangleCanvas: HTMLCanvasElement = document.getElementById("triangle") as HTMLCanvasElement;
    const triangleCanvasContext: CanvasRenderingContext2D = triangleCanvas.getContext("2d");
    const shapes = {
        triangle: {height: 200, width: 200, color: "black"},
        circle1: {diameter: 250, color: "white"},
        circle2: {diameter: 160, color: "black"}
    };

    drawTriangle(triangleCanvasContext, shapes.triangle.color, triangleCanvas.width / 2, triangleCanvas.height / 2, shapes.triangle.width, shapes.triangle.height);

    drawCircle(triangleCanvasContext, shapes.circle1.color, triangleCanvas.width / 2, triangleCanvas.height / 2 + shapes.circle1.diameter * 0.05, shapes.circle1.diameter / 2);
    drawCircle(triangleCanvasContext, shapes.circle2.color, triangleCanvas.width / 2 + shapes.triangle.width / 2.3 - shapes.circle2.diameter / 2, triangleCanvas.height / 2 + shapes.circle1.diameter * 0.05, shapes.circle2.diameter / 2);
}

function drawShapes() {
    const shapesCanvas: HTMLCanvasElement = document.getElementById("shapes") as HTMLCanvasElement;
    const shapesCanvasContext: CanvasRenderingContext2D = shapesCanvas?.getContext("2d");
    const spacer: number = 30;
    let xPosition: number = spacer;
    const shapes = [drawCircle, drawTriangle, drawRectangle, drawDiamond];

    const colors = ["#fea200", "#01c8b5", "#02befe"]
    let randomShapePosition: number = Math.floor(Math.random() * shapes.length);
    let randomColor: number = Math.floor(Math.random() * colors.length);

    fillCanvas('#08293e', shapesCanvasContext, shapesCanvas);
    while (xPosition < shapesCanvas.width) {
        shapes[randomShapePosition](shapesCanvasContext, colors[randomColor], xPosition, shapesCanvas.height / 2, spacer, spacer, Math.random() < 0.5);
        xPosition += spacer * 2;
        randomShapePosition = Math.floor(Math.random() * shapes.length);
        randomColor = Math.floor(Math.random() * colors.length);
    }

}

drawSwissFlag();
drawHome();
drawMasterCard();
drawTriangles();
drawShapes();