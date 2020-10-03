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
            {measurement.weight}
            <span className="date">
              <IonNote>{measurement.date}</IonNote>
            </span>
          </h2>
        </IonLabel>
      </IonItem>
    </IonItemSliding>
  );
};

export default MeasurementListItem;
