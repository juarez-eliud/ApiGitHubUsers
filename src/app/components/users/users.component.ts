import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { InfoUser, User } from 'src/app/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  @Input() dataUser!: User;
  @Output() followers: EventEmitter<InfoUser> = new EventEmitter();

  constructor() { }
 
  ngOnInit(): void { }

  viewFollowers(usuario: User) {
    const _infoUser: InfoUser = {
      login: usuario.login,
      followers_url: usuario.followers_url
    }
    this.followers.emit(_infoUser);
  }

}
