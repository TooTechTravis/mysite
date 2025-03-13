import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  display: string = '';

  // Append value to the display
  appendToDisplay(value: string): void {
    this.display += value;
  }

  // Clear the display
  clearDisplay(): void {
    this.display = '';
  }

  // Calculate the result of the expression
  calculateResult(): void {
    try {
      this.display = eval(this.display).toString();
    } catch (e) {
      this.display = 'Error';
    }
  }
}
