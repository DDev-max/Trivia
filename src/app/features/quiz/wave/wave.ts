export interface WaveConfig {
  strokeColor: string;
  fillColor: string;
  lineWidth: number;
  speed: number;
  pointCount?: number;
  shiftX?: number;
  amplitudeX?: number;
  amplitudeY?: number;
  curveSmoothness?: number;
}

interface Points {
  x: number;
  y: number;
  originalX: number;
  originalY: number;
  phase: number;
  start: {
    x: number;
    y: number;
  };
  end: {
    x: number;
    y: number;
  };
}

export class Wave {
  private canvasWidth = 1400;
  private canvasHeight = 60;
  private points: Points[] = [];
  private fullConfig: Required<WaveConfig>;
  private animationFrameId: number | null = null;

  constructor(config: WaveConfig, private context: CanvasRenderingContext2D) {
    this.fullConfig = {
      pointCount: 14,
      shiftX: -3,
      amplitudeX: 6,
      amplitudeY: 8,
      curveSmoothness: 0.5,
      ...config,
    };
    context.canvas.width = this.canvasWidth;
    context.canvas.height = this.canvasHeight;
    this.points = this.createWavePoints();
  }

  private createWavePoints() {
    const points: Points[] = [];
    const spacing = this.canvasWidth / this.fullConfig.pointCount;

    for (let i = 0; i <= this.fullConfig.pointCount + 1; i++) {
      const x = i * spacing + (-20 + Math.random() * 40);
      const y = 15 + Math.random() * 20;

      points.push({
        x,
        y,
        originalX: x,
        originalY: y,
        phase: Math.random() * 2 * Math.PI,
        end: { x: 0, y: 0 },
        start: { x: 0, y: 0 },
      });
    }

    return points;
  }

  private updateWavePoints() {
    this.points.forEach((point, index) => {
      const { amplitudeX, amplitudeY, curveSmoothness, shiftX } =
        this.fullConfig;

      const isFirst = index === 0;
      const isLast = index === this.points.length - 1;

      const prev = this.points[index - 1];
      const next = this.points[index + 1];

      if (!isFirst && !isLast) {
        point.x = point.originalX + shiftX + Math.sin(point.phase) * amplitudeX;
        point.y = point.originalY + Math.cos(point.phase) * amplitudeY;
      }

      point.start = {
        x: isFirst
          ? point.x - curveSmoothness * (next.x - point.x)
          : point.x - curveSmoothness * (point.x - prev.x),
        y: isFirst
          ? next.y - curveSmoothness * (next.y - point.y)
          : point.y - curveSmoothness * (point.y - prev.y),
      };

      point.end = {
        x: isLast
          ? point.x + curveSmoothness * (point.x - prev.x)
          : next.x - curveSmoothness * (next.x - point.x),
        y: isLast
          ? point.y - curveSmoothness * (point.y - prev.y)
          : next.y - curveSmoothness * (next.y - point.y),
      };

      point.phase += this.fullConfig.speed;
    });
  }

  private drawWavePath() {
    const ctx = this.context;
    const { lineWidth, strokeColor, fillColor } = this.fullConfig;
    ctx.beginPath();

    this.points.forEach((point, index) => {
      if (index === 0) {
        ctx.moveTo(point.start.x, point.start.y);
      }

      ctx.quadraticCurveTo(point.x, point.y, point.end.x, point.end.y);
    });

    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = strokeColor;
    ctx.stroke();

    ctx.lineTo(this.canvasWidth + 50, this.canvasHeight + 10);
    ctx.lineTo(-50, this.canvasHeight + 10);
    ctx.lineTo(-50, this.points[0].y);
    ctx.closePath();

    ctx.fillStyle = fillColor;
    ctx.fill();
  }

  private animate = () => {
    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.updateWavePoints();
    this.drawWavePath();
    this.animationFrameId = requestAnimationFrame(this.animate);
  };

  start() {
    if (this.animationFrameId === null) {
      this.animate();
    }
  }

  stop() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }
}
