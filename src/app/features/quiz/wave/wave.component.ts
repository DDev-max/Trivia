import { Component, ElementRef, viewChild } from '@angular/core';
import { Wave, WaveConfig } from './wave';

@Component({
  selector: 'app-wave',
  imports: [],
  templateUrl: './wave.component.html',
  styleUrl: './wave.component.css',
})
export class WaveComponent {
  canvasRef =
    viewChild.required<ElementRef<HTMLCanvasElement>>('animatedCanvas');
  fillerRef = viewChild.required<ElementRef<HTMLDivElement>>('fillerRef');

  private wave!: Wave;

  ngAfterViewInit() {
    const canvas = this.canvasRef().nativeElement;
    const waveConfig: WaveConfig = {
      strokeColor: '#66c5e8',
      fillColor: '#8ED6FF',
      lineWidth: 10,
      speed: 0.1,
    };

    this.wave = new Wave(waveConfig, canvas.getContext('2d')!);

    this.wave.start();
  }

  isPaused = false;

  restartAnimation() {
    this.fillerRef().nativeElement.classList.remove('growWaveAnimation');

    void this.fillerRef().nativeElement.offsetWidth; //forces browser to read changes

    this.fillerRef().nativeElement.classList.add('growWaveAnimation');
    this.isPaused = false;
  }

  stopWaveAnimation() {
    if (this.wave) {
      this.wave.stop();
    }
  }

  stopWaveGrowth() {
    this.isPaused = true;
  }
}
