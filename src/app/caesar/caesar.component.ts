import { Component } from '@angular/core';

@Component({
  selector: 'app-caesar',
  templateUrl: './caesar.component.html',
  styleUrls: ['./caesar.component.css']
})
export class CaesarComponent {
  ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  ALPHABETmin = 'abcdefghijklmnopqrstuvwxyz';
  row2: string[] = this.ALPHABET.split('');
  row1: string[] = this.ALPHABET.split('');
  inputText: string = '';
  outputText: string = '';
  shift = 0;

  updatePlainText() {
    this.inputText = this.decrypt(this.outputText, this.shift);
  }

  updateCipher() {
    this.outputText = this.encrypt(this.inputText, this.shift);
  }

  encrypt(text: string, shift: number) {
    return text.replace(/[A-Z]/g, (char) => {
      const currentIndex = this.ALPHABET.indexOf(char);
      let encryptedIndex = (currentIndex + shift) % 26;
      while (encryptedIndex < 0) {
        encryptedIndex += 26;
      }
  
      return this.ALPHABET.charAt(encryptedIndex);
    });
  }
  
  decrypt(text: string, shift: number) {
    return text.replace(/[A-Z]/g, (char) => {
      const currentIndex = this.ALPHABET.indexOf(char);
      const decryptedIndex = (currentIndex - shift + 26) % 26;
      return this.ALPHABET.charAt(decryptedIndex);
    });
  }


  moveRow(direction: 'left' | 'right') {
    const offset = direction === 'left' ? -1 : 1;
    this.row2 = this.shiftArray(this.row2, offset);
    this.shift+=offset;
    console.log(this.shift);
    this.outputText=this.encrypt(this.inputText,this.shift);
  }

  private shiftArray(array: string[], offset: number): string[] {
    const newArray = [...array];
    if (offset < 0) {
      for (let i = 0; i < Math.abs(offset); i++) {
        const removed = newArray.pop();
        newArray.unshift(removed!);
      }
    } else if (offset > 0) {
      for (let i = 0; i < offset; i++) {
        const removed = newArray.shift();
        newArray.push(removed!);
      }
    }
    return newArray;
  }
  

}

