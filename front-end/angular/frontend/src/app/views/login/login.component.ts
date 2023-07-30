import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/components/user/auth/AuthService';
import { UserData } from '../../components/user/user-data.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) {}

  user: UserData = {
    username: '',
    password: ''
  };

  createUser(): void {
    this.router.navigate(['/register']);
  }

  login(): void {
    // Chamar o serviço de autenticação
    this.authService.login(this.user.username, this.user.password).subscribe(
      (response) => {
        // Verificar se o login foi bem-sucedido (aqui você pode analisar a resposta da API)
        if (response.success) {
          // Redirecionar para as rotas dentro do router-outlet após o login
          this.router.navigate(['/home']);
        } else {
          // Exibir mensagem de erro de login inválido (opcional)
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
