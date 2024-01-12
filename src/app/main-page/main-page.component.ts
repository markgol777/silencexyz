import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
    public spotify!:any;
    public showSpotify:boolean = false;
    constructor(private http: HttpClient) {

    }

    async ngOnInit() {
      const url = "https://api.lanyard.rest/v1/users/1122222248447717437";

      await this.http.get(url).subscribe((data:any) => {
        if (data.data.spotify) {
          this.showSpotify = !this.showSpotify;

          this.spotify = data.data.spotify;
          console.log(this.spotify);
        }


      })
    }
}
