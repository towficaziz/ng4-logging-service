import { AccountsService } from './../accounts.service';
import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  constructor(private loggingService: LoggingService,
    private AccountsService: AccountsService){
  }

  onCreateAccount(accountName: string, accountStatus: string){
    this.AccountsService.addAccount(accountName, accountStatus)
    this.loggingService.logStatusChange(accountStatus);
  }

}
