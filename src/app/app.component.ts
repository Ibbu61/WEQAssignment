import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weq';


  // public isOn: boolean = false;

 public  isYearly: boolean = false;  

  monthlyPrices = {
    starter: 2.80,
    standard: 4.20,
    suprem: 7.00
  };

  
  displayPrices = {
    starter: this.monthlyPrices.starter,
    standard: this.monthlyPrices.standard,
    suprem: this.monthlyPrices.suprem
  };


  // Toggle function to switch between monthly and yearly pricing
  toggleButton(): void {
    this.isYearly = !this.isYearly;
    this.updatePrices();
  }

 public updatePrices(): void {
    if (this.isYearly) {
      // Apply a 20% discount for yearly pricing
      this.displayPrices.starter = this.monthlyPrices.starter * 12 * 0.8;
      this.displayPrices.standard = this.monthlyPrices.standard * 12 * 0.8;
      this.displayPrices.suprem = this.monthlyPrices.suprem * 12 * 0.8;
    } else {
      // Reset to monthly prices
      this.displayPrices = { ...this.monthlyPrices };
    }
  }


}
