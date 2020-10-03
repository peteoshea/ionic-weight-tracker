import MeasurementListItem from '../components/MeasurementListItem';
import React, { useState } from 'react';
import { Measurement, getMeasurements } from '../data/measurements';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  const [measurements, setMeasurements] = useState<Measurement[]>([]);

  useIonViewWillEnter(() => {
    const msgs = getMeasurements();
    setMeasurements(msgs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inbox</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Inbox</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {measurements.map((m) => (
            <MeasurementListItem
              key={m.id}
              measurement={m}
              setMeasurements={setMeasurements}
              measurements={measurements}
            />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
