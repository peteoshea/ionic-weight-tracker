import React from 'react';
import {
  IonItem,
  IonLabel,
  IonNote,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
} from '@ionic/react';
import { Measurement } from '../data/measurements';
import './MeasurementListItem.css';

interface MeasurementListItemProps {
  measurement: Measurement;
  setMeasurements: Function;
  measurements: Array<Measurement>;
}

const MeasurementListItem: React.FC<MeasurementListItemProps> = ({
  measurement,
  setMeasurements,
  measurements,
}) => {
  const removeItem = (measurement: Measurement) => {
    setMeasurements(measurements.filter((item) => item.id !== measurement.id));
  };

  return (
    <IonItemSliding>
      <IonItemOptions side="end">
        <IonItemOption color="danger" expandable onClick={() => removeItem(measurement)}>
          Delete
        </IonItemOption>
      </IonItemOptions>
      <IonItem detail={false}>
        <div slot="start" className="dot dot-unread"></div>
        <IonLabel className="ion-text-wrap">
          <h2>
            {measurement.fromName}
            <span className="date">
              <IonNote>{measurement.date}</IonNote>
            </span>
          </h2>
          <h3>{measurement.subject}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </IonLabel>
      </IonItem>
    </IonItemSliding>
  );
};

export default MeasurementListItem;
