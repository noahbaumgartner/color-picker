import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.scss']
})
export class PickerComponent implements OnInit {
  hexCode = '';
  sliderColorClass = '';

  red = 0;
  green = 0;
  blue = 0;

  constructor() {
    this.red = this.getRandomNumber();
    this.green = this.getRandomNumber();
    this.blue = this.getRandomNumber();

    this.setHexCode();
  }

  ngOnInit(): void { }

  changeColor(red: string, green: string, blue: string) {
    this.red = parseInt(red);
    this.green = parseInt(green);
    this.blue = parseInt(blue);

    this.setHexCode();
  }

  convertRGBtoHex(n: Number) {
    var hex = n.toString(16);
    while (hex.length < 2) {hex = "0" + hex; }
    return hex;
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 255);
  }
  
  setHexCode() {
    var redH = this.convertRGBtoHex(this.red);
    var greenH = this.convertRGBtoHex(this.green);
    var blueH = this.convertRGBtoHex(this.blue);

    if(this.red + this.green + this.blue > 300) {
      this.sliderColorClass = 'slider_black';
    } else {
      this.sliderColorClass = 'slider_white';
    }

    this.hexCode = '#' + redH + greenH + blueH;
  }
}
