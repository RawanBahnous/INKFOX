import { CanActivateFn } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthusersService } from './authusers.service';

export const authGuard: CanActivateFn = (route, state) => {
  // return true;
  const authServ = new AuthusersService();
  return authServ.isLoggedIn();
};
