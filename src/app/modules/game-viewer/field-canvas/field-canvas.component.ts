import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-field-canvas',
  templateUrl: './field-canvas.component.html',
  styleUrls: ['./field-canvas.component.scss']
})
export class FieldCanvasComponent implements AfterViewInit {

  @ViewChild('canvasDiv', {static: true}) canvasDiv: ElementRef;
  @ViewChild('bgCanvas', {static: true}) bgCanvas: ElementRef;
  @ViewChild('fgCanvas', {static: true}) fgCanvas: ElementRef;

  private ratio: number;
  private cx: CanvasRenderingContext2D;

  private field = {
    length: 9000,
    width: 6000,
    margin: 300,
    centerRadius: 500,
    areaLength: 1000,
    areaWidth: 2000,
    goalDepth: 180,
    goalWidth: 1000
  };

  constructor() { }

  ngAfterViewInit() {
    const divEl: HTMLDivElement = this.canvasDiv.nativeElement;
    this.ratio = divEl.clientHeight / (this.field.width + this.field.margin * 2);
    const bgEl: HTMLCanvasElement = this.bgCanvas.nativeElement;
    bgEl.width = divEl.clientWidth;
    bgEl.height = divEl.clientHeight;
    this.drawField(bgEl);
  }

  private drawField(canvasEl: HTMLCanvasElement) {
    const cx = canvasEl.getContext('2d');
    cx.translate(canvasEl.width / 2, canvasEl.height / 2);
    cx.scale(this.ratio, -this.ratio);
    cx.strokeStyle = '#fff';
    cx.lineWidth = 10;
    // begin path
    cx.beginPath();
    // borders
    cx.strokeRect(
      -this.field.length / 2, -this.field.width / 2,
      this.field.length, this.field.width);
    // central lines
    cx.moveTo(-this.field.length / 2, 0);
    cx.lineTo(this.field.length / 2, 0);
    cx.moveTo(0, this.field.width / 2);
    cx.lineTo(0, -this.field.width / 2);
    // central circle
    cx.moveTo(this.field.centerRadius, 0);
    cx.arc(0, 0, this.field.centerRadius, 0, Math.PI * 2);
    // areas
    cx.moveTo(-this.field.length / 2, this.field.areaWidth / 2);
    cx.lineTo((-this.field.length / 2) + this.field.areaLength, this.field.areaWidth / 2);
    cx.lineTo((-this.field.length / 2) + this.field.areaLength, -this.field.areaWidth / 2);
    cx.lineTo(-this.field.length / 2, -this.field.areaWidth / 2);
    cx.moveTo(this.field.length / 2, this.field.areaWidth / 2);
    cx.lineTo((this.field.length / 2) - this.field.areaLength, this.field.areaWidth / 2);
    cx.lineTo((this.field.length / 2) - this.field.areaLength, -this.field.areaWidth / 2);
    cx.lineTo(this.field.length / 2, -this.field.areaWidth / 2);
    // goals
    cx.moveTo(-this.field.length / 2, this.field.goalWidth / 2);
    cx.lineTo((-this.field.length / 2) - this.field.goalDepth, this.field.goalWidth / 2);
    cx.lineTo((-this.field.length / 2) - this.field.goalDepth, -this.field.goalWidth / 2);
    cx.lineTo(-this.field.length / 2, -this.field.goalWidth / 2);
    cx.moveTo(this.field.length / 2, this.field.goalWidth / 2);
    cx.lineTo((this.field.length / 2) + this.field.goalDepth, this.field.goalWidth / 2);
    cx.lineTo((this.field.length / 2) + this.field.goalDepth, -this.field.goalWidth / 2);
    cx.lineTo(this.field.length / 2, -this.field.goalWidth / 2);
    // end path
    cx.stroke();
  }

}
