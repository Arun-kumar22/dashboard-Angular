import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: any[] = [];

  constructor() { }
   // Fetch all data
   getData(): any[] {
    return this.data;
  }

  // Save new data
  saveData(newData: any): void {
    this.data.push(newData);
  }

  // Delete data at index
  deleteData(index: number): void {
    this.data.splice(index, 1);
  }
}