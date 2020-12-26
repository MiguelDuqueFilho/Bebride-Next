export type PlanType = {
  id: number;
  title: string;
  resume: string;
  icon: string;
  url: string;
  show: boolean;
};

export type DepositionItem = {
  id: number;
  eventId: number;
  depositionTitle: string;
  depositionDescription: string;
  depositionFilename: string;
  uploadId: number;
  depositionShow: boolean;
  updatedAt: string;
  Events: [
    {
      eventName: string;
    }
  ];
};
