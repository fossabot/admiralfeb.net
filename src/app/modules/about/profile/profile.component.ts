import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private profileJson: string;
  constructor() { }

  ngOnInit() {
    const profilePromise = this.getProfileJson;
    profilePromise('Zachary@admiralfeb.net').then(function (response) {
      alert(response);
    });
  }

  getProfileJson(email: string) {
    // Return a new promise.
    return new Promise(function (resolve, reject) {
      try {
        const gravatarURL = 'https://www.gravatar.com/';
        email = email.toLowerCase().trim();
        const md5z = require('md5');
        const hash = md5z(email);
        const profileURL = gravatarURL + hash + '.json';

        // Do the usual XHR stuff
        const req = new XMLHttpRequest();
        req.open('GET', profileURL);

        req.onload = function () {
          // This is called even on 404 etc
          // so check the status
          if (req.status === 200) {
            // Resolve the promise with the response text
            resolve(req.response);
          } else {
            // Otherwise reject with the status text
            // which will hopefully be a meaningful error
            reject(Error(req.statusText));
          }
        };

        // Handle network errors
        req.onerror = function () {
          reject(Error('Network Error'));
        };

        // Make the request
        req.send();
      } catch (error) {
        reject(error);
      }
    });
  }
}
