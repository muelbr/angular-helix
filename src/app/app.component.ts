import { Component, OnInit } from '@angular/core';
import { GraphEngine } from 'hedwig-monitoring-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-demo';
  graphType = 'cpu-average-usage';
  dataStuff = JSON.stringify([
    {
        "usage_average": .37,
        "time": "2018-11-24T18:58:21Z"
    },
    {
        "usage_average": 0.50,
        "time": "2018-11-25T23:58:21Z"
    },
    {
        "usage_average": .80,
        "time": "2018-11-26T02:58:21Z"
    },
    {
        "usage_average": 0.12,
        "time": "2018-11-27T10:58:21Z"
    }]);

    // TODO: attempt to move this logic to a route resolve as opposed
  // to making the request within the component
  ngOnInit() {
    new GraphEngine();

  }
}
