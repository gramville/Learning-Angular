import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServerComponent } from './server/server.component';
import { SuccessAlertComponent } from './SuccessAlert/success.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ServerComponent, SuccessAlertComponent, WarningAlertComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  })
export class AppComponent {
    title = "first"
}
 