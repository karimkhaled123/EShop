import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `<p>servers worksw!</p>  `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  newServerStatus = 'No server was created yet!';
  constructor() { }

  ngOnInit(): void {
  }
  onCreateServer() {
    this.allowNewServer = false;
    this.newServerStatus = 'server Created!'; // create new server 
  }
  onUpdateServerInput(event: Event) {
    this.newServerStatus = (event.target as HTMLInputElement).value;
  }
}
