import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showFiller = false;
  current = {
    "sheet":"",
    "note":""
  };
  loadContent(Sheet,Note){
      
  }  
  notes ;
  dataList = ["ff*()ff","hhk"];
  doc = {
    "sheets": [
        {
            "name"  : "first sheet",
            "notes" : [
                "Noteggggggggggggg1",
                "Note2",
                "Note3",
                "Note4"
            ]
        },
        {
            "name"  : "second sheet",
            "notes" : [
                "Note1",
                "Notggge2",
                "Noggggggggte3",
                "Note4"
            ]
        }
    ]
}
onSheet(sheetName){
  this.notes = this.doc.sheets.find(c => c.name === sheetName).notes;;
  console.log(this.notes);

}
onNote(n){
  console.log(n);
}
leaveSheetList(sheet){
    // console.log(sheet,"leave");
}
overSheetList(sheet){
// console.log(sheet,"over");
}


}
