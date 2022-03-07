import { HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeaderInterceptor implements HttpHeaderInterceptor {
  constructor() {}

  intercept (
    req: HttpRequest<any>,
    next: HttpHandler ):
    Observable<HttpEvent<any>> {
      req = req.clone({
        setHeaders: {
          'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
          'x-rapidapi-key': '7162aa1690mshb439f702697184fp1f372bjsn0ff2b83594a2',
        },
        setParams: {
          key: 'c37790e0ff3b4716b3cd9e4d09d2d3b6',
        }
      });
      return next.handle(req);
    }
}
