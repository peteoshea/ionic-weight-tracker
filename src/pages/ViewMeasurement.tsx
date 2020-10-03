import React, { useState } from 'react';
import { Measurement, getMeasurement } from '../data/measurements';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import { RouteComponentProps } from 'react-router';
import './ViewMeasurement.css';

interface ViewMeasurementProps extends RouteComponentProps<{ id: string }> {}

const ViewMeasurement: React.FC<ViewMeasurementProps> = ({ match }) => {
  const [measurement, setMeasurement] = useState<Measurement>();

  useIonViewWillEnter(() => {
    const msg = getMeasurement(parseInt(match.params.id, 10));
    setMeasurement(msg);
  });

  return (
    <IonPage id="view-measurement-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons>
            <IonBackButton text="Inbox" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {measurement ? (
          <>
            <IonItem>
              <IonIcon icon={personCircle} color="primary"></IonIcon>
              <IonLabel className="ion-text-wrap">
                <h2>
                  {measurement.weight}
                  <span className="date">
                    <IonNote>{measurement.date}</IonNote>
                  </span>
                </h2>
                <h3>
                  To: <IonNote>Me</IonNote>
                </h3>
              </IonLabel>
            </IonItem>
          </>
        ) : (
          <div>Measurement not found</div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default ViewMeasurement;
