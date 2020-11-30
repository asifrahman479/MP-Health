import { render } from "react-dom";
import * as React from "react";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject
} from "@syncfusion/ej2-react-schedule";

import { SampleBase } from "./sample-base";
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";
/**
 * Schedule remote data sample
 */
export class TempDoctor extends SampleBase {
  constructor() {
    super(...arguments);
    this.dataManger = new DataManager({
      url:
        "https://ej2services.syncfusion.com/production/web-services/api/Schedule",
      adaptor: new WebApiAdaptor(),
      crossDomain: true
    });
  }
  render() {
    return (
      <div className="schedule-control-section">
        <div className="control-section">
          <div className="control-wrapper">
            <ScheduleComponent
              width="100%"
              height="650px"
              eventSettings={{ dataSource: this.dataManger }}
              readonly={false}
            >
              <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
            </ScheduleComponent>
          </div>
        </div>
      </div>
    );
  }
}

export default TempDoctor;

