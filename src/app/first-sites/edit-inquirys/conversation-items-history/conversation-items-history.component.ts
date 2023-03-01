import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversation-items-history',
  templateUrl: './conversation-items-history.component.html',
  styleUrls: ['./conversation-items-history.component.scss'],
})
export class ConversationItemsHistoryComponent implements OnInit {
  @Input() conversationItems: any;
  newMsg: string;

  constructor() { }

  ngOnInit() {}

  sendMessage(){
    
  }

}
