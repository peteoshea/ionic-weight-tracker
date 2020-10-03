import MeasurementListItem from '../components/MeasurementListItem';
import React from 'react';
import { Measurement } from '../data/measurements';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import './Home.css';

interface HomeProps {
  measurements: Array<Measurement>;
  setMeasurements: Function;
}

const Home: React.FC<HomeProps> = ({ measurements, setMeasurements }) => {

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
          <IonButtons slot="end">
            <IonButton routerLink={`/add`}>Add</IonButton>
          </IonButtons>
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
