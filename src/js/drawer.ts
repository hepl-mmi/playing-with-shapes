export function drawTriangle(ctx: CanvasRenderingContext2D, color: string, x: number, y: number, width: number, height: number, fill: boolean = true, stroke: number = 2) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = stroke;
    ctx.moveTo(x - width / 2, y + height / 2);
    ctx.lineTo(x, y - height / 2)
    ctx.lineTo(x + width / 2, y + height / 2)
    ctx.closePath();
    if (fill) {
        ctx.fill();
    }
    ctx.stroke();
}

export function drawCircle(ctx: CanvasRenderingContext2D, color: string, x: number, y: number, width: number, height: number = 0, fill: boolean = true, stroke: number = 2) {
    ctx.beginPath();
    ctx.arc(x, y, width / 2, 0, 2 * Math.PI);
    ctx.strokeStyle = color;
    ctx.lineWidth = stroke;
    ctx.closePath()
    ctx.stroke();
    if (fill) {
        ctx.fillStyle = color;
        ctx.fill();
    }
}

export function drawRectangle(ctx: CanvasRenderingContext2D, color: string, x: number, y: number, width: number, height: number, fill: boolean = true, stroke: number = 2, rotation: number = 0) {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = stroke;
    if (fill) {
        ctx.fillStyle = color;
    }

    if (rotation != 0) {
        ctx.translate(x, y);
        ctx.rotate((Math.PI / 180) * rotation);
        if (fill) {
            ctx.fillRect(-width / 2, -height / 2, width, height);
        }
        ctx.strokeRect(-width / 2, -height / 2, width, height);
    } else {
        if (fill) {
            ctx.fillRect(x - width / 2, y - height / 2, width, height);
        }
        ctx.strokeRect(x - width / 2, y - height / 2, width, height);
    }
    ctx.restore();
}

export function drawDiamond(ctx: CanvasRenderingContext2D, color: string, x: number, y: number, width: number, height: number, fill: boolean = true, stroke: number = 2) {
    drawRectangle(ctx, color, x, y, width, height, fill, stroke, 45);
}

export function drawCross(ctx: CanvasRenderingContext2D, color: string, x: number, y: number, width: number, height: number, fill: boolean = true, stroke: number = 2) {
    drawRectangle(ctx, color, x, y, stroke, height, true, stroke);
    drawRectangle(ctx, color, x, y, stroke, height, true, stroke,90);
}

export function fillCanvas(color: string, ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    drawRectangle(ctx, color, canvas.width / 2, canvas.height / 2, canvas.width, canvas.height);
}