import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { CobraService } from './cobra.service';

// TODO: create CobraService for fetching markdown
// TODO: update this resolverService for passing respective data

@Injectable()
export class CobraResolverService implements Resolve<string> {
  constructor(private cobraService: CobraService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): string | Observable<string> | Promise<string> {
    const id = route.paramMap.get('id');

    if (!id) {
      this.router.navigate(['personnel']);
      return EMPTY;
    }

    return;

    // return this.cobraService.getPersonnelDetails(id).pipe(
    //   take(1),
    //   mergeMap((displayedPersonnel) => {
    //     if (displayedPersonnel) {
    //       return of(displayedPersonnel);
    //     } else {
    //       this.router.navigate(['personnel']);
    //       return EMPTY;
    //     }
    //   })
    // );
  }
}
