import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  length: any = '';
  checkBox1:any;
  checkBox2:any;
  checkBox3:any;

  onChangeLength(value:string) {
    const intValue = parseInt(value);

    if (!isNaN(intValue)) {   //checking if the input is a valid number
      this.length = intValue;
    }

  }

  //password generating process on button click
  onButtonGenerate() {
    this.checkBox1 = (document.querySelector('#checkbox1') as HTMLInputElement);
    this.checkBox2 = (document.querySelector('#checkbox2') as HTMLInputElement);
    this.checkBox3 = (document.querySelector('#checkbox3') as HTMLInputElement);
    let passString = '';

    if(this.checkBox1.checked) {
      passString += 'abcdefghijklmnopqrstuvwxyz';
    }
    
    if(this.checkBox2.checked) {
      passString += '1234567890';
    }
    
    if(this.checkBox3.checked) {
      passString += '!@#$%^&*()';
    }

    let generatedPassword = '';

    for (let i = 0; i < this.length; i++){
      generatedPassword += passString[Math.floor(Math.random() * passString.length)];
    }
    

    this.password = generatedPassword;

  }

  onButtonReset() {
    this.password = '';
    this.length = '';
    this.checkBox1.checked = false;
    this.checkBox2.checked = false;
    this.checkBox3.checked = false;
  }

  onButtonClipboard() {
    const copyText = document.getElementById('myOutput') as HTMLInputElement;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert('Copied to clipboard');
  }
}

