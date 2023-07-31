import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/components/user/user.service';
import { UserData } from '../../components/user/user-data.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private userService: UserService) {}

  user: UserData = {
    username: '',
    password: ''
  };

  createUser(): void {
    this.router.navigate(['/register']);
  }

  login(): void {
    this.userService.readByUsername(this.user.username).subscribe(
      (user) => {
        if (user && user.password === this.user.password) {
          // Credenciais válidas, fazer o redirecionamento
          this.router.navigate(['/home']);
        } else {
          // Credenciais inválidas, exibir mensagem de erro (opcional)
          alert('Login inválido. Verifique suas credenciais.');
        }
      },
      (error) => {
        // Tratar erros de chamada HTTP (opcional)
        console.error('Erro na autenticação:', error);
      }
    );
  }
}
