import { Component } from '@angular/core';
import { Printer, PrintOptions } from '@ionic-native/printer/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public content = '<h1>MBA printer<h1><br><p>Aqui está um exemplo de utilização do plugin printer do ionic na versão 4';

  constructor(private printer: Printer) { }
  
  handlePrinter() {
    this.printer.isAvailable().then(this.onSuccess, this.onError);

    let options: PrintOptions = {
      name: 'MyDocument',
      printerId: 'printer007',
      duplex: true,
      landscape: true,
      grayscale: true
    }

    this.printer.print(this.content, options).then(this.onSuccess, this.onError);
  }

  onSuccess() {
    console.log('imprimindo...');
    
  }
  
  onError() {
    console.log('error...');
  }
}
