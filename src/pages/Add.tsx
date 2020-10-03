import React, { useState } from 'react';
import { Measurement } from '../data/measurements';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonPage,
  IonToolbar,
  IonInput,
  IonButton,
} from '@ionic/react';

import './Add.css';

interface AddProps {
  measurements: Array<Measurement>;
  setMeasurements: Function;
}

const Add: React.FC<AddProps> = ({ measurements, setMeasurements }) => {
  const [measurement, setMeasurement] = useState<string>('');

  return (
    <IonPage id="view-measurement-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons>
            <IonBackButton text="Measurements" defaultHref="/home"></IonBackButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton>Save</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <>
          <IonItem>
            <IonInput
              value={measurement}
              placeholder="Enter Measurement"
              onIonChange={(e) => setMeasurement(e.detail.value!)}
            ></IonInput>
          </IonItem>
        </>
      </IonContent>
    </IonPage>
  );
};

export default Add;
