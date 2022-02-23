import { Component } from '@angular/core';
import { InfoUser, User } from './models/user';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users!: User[];
  type = 'Usuarios';
  showHome = false;
  userName = '';

  constructor(private usersService: UsersService) {
    this.showHome = false;
    this.loadUsers();
  }

  loadUsers() {
    this.usersService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  loadFollowers(event: InfoUser) {    
    this.usersService.getFollowers(event.followers_url).subscribe(followers => {
      this.users = [...followers];
      this.userName = event.login;
      this.type = 'Seguidores de';
      this.showHome = true;
    });
  }

  goHome() {
    this.loadUsers();
    this.type = 'Usuarios';
    this.userName = '';
    this.showHome = false;
  }
}
