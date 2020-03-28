import { Component } from '@angular/core';
// creating component from angular core
@Component({
   selector: 'app-server', // selector name prefixed with app
   templateUrl : './server.component.html'// template url mandatory
})
export class ServerComponent {
    title = 'Sever Componentw    ';
}