import * as React from 'react';

import {RouteComponentProps}  from 'react-router';
import { Car } from '../../Models/common';
import {
    DatePicker,
    DayOfWeek,
    IDatePickerStrings
  } from 'office-ui-fabric-react/lib/DatePicker';

  const DayPickerStrings: IDatePickerStrings = {
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ],
  
    shortMonths: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
  
    days: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ],
  
    shortDays: [
      'S',
      'M',
      'T',
      'W',
      'T',
      'F',
      'S'
    ],
  
    goToToday: 'Go to today',
    prevMonthAriaLabel: 'Go to previous month',
    nextMonthAriaLabel: 'Go to next month',
    prevYearAriaLabel: 'Go to previous year',
    nextYearAriaLabel: 'Go to next year',
  
    isRequiredErrorMessage: 'Field is required.',
  
    invalidInputErrorMessage: 'Invalid date format.'
  };

export interface RentFormProps extends RouteComponentProps<any>{ 
    Id:number
}
export interface RentFormState {
    car:Car,
    firstDayOfWeek?: DayOfWeek;
}

export class RentForm extends React.Component<RentFormProps, RentFormState> {

    constructor(prop:RentFormProps, state:RentFormState){
        super(prop,state);
        this.state={ car:new Car(),
            firstDayOfWeek: DayOfWeek.Sunday
        };
        
    }

    render(){

        return(
        <div className="col-md-11">

            <div>
                <p>Validation will happen when Date Picker loses focus.</p>
                <DatePicker label='Date required' isRequired={ true } firstDayOfWeek={ this.state.firstDayOfWeek } strings={ DayPickerStrings } placeholder='Select a date...' />
            </div>
        </div>
        )
    }
}