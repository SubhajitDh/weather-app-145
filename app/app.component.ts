import {Component} from '@angular/core';
import {VERSION} from '@angular/material';

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html'
})
export class AppComponent { 
  version = VERSION;
  panels = [
    {
    title: 'city 1',
    content: 'content 1'
  },
  {
    title: 'city 2',
    content: 'content 2'
  },
  {
    title: 'city 3',
    content: 'content 3'
  },
  {
    title: 'city 3',
    content: 'content 3'
  },
  {
    title: 'city 4',
    content: 'content 4'
  },
  {
    title: 'city 5',
    content: 'content 5'
  },
  {
    title: 'city 6',
    content: 'content 6'
  },
  {
    title: 'city 7',
    content: 'content 7'
  },
  {
    title: 'city 8',
    content: 'content 8'
  },
  {
    title: 'city 9',
    content: 'content 9'
  },
}
