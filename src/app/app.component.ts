import { Component, ViewChild, NgZone, ViewEncapsulation, OnInit, AfterViewInit } from '@angular/core';
import { MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { AgmMap } from '@agm/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dialog: MatDialog, private zone: NgZone) {
  }


  openDialog() {
    this.zone.run(() => {
      const dialogRef = this.dialog.open(ConfirmationDialog,{
        width: '400px',
        data: {
          confirmation: true,
          message: 'test',
          title: 'X'
        }});
    });
  }
}


@Component({
  selector: 'confirmation-dialog',
  templateUrl: 'map-dialog.html'
})
export class ConfirmationDialog implements AfterViewInit {

  @ViewChild('map') public map: AgmMap;
  
  title: string = 'AGM';
  lat: number = 23.0225;
  lng: number = 72.5714;
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialog>) { }

  ngAfterViewInit(){
    this.map.triggerResize();
  }
  onYesClick(): void {
    this.dialogRef.close(true);
  }

}
