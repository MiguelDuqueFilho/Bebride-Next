import { PlanType } from '../interfaces';

export const PlanTypes: PlanType[] = [
  {
    id: 1,
    title: 'Assessoria do Dia',
    resume:
      'Nossa Assessoria do Dia foi pensada com muito carinho para atender os noivos no dia do seu evento.',
    icon: 'GoChecklist',
    url: '/advice_day',
    show: false
  },
  {
    id: 2,
    title: 'Assessoria Final',
    resume:
      'O serviço de assessoria final começa a 60 dias (2 meses) antes do evento.',
    icon: 'GoBook',
    url: '/advice_final',
    show: false
  },
  {
    id: 3,
    title: 'Assessoria Completa',
    resume:
      'Sinônimo de tranquilidade. Nossa Assessoria Completa é um serviço desenvolvido desde o início dos preparativos.',
    icon: 'GoCalendar',
    url: '/advice_completed',
    show: false
  },
  {
    id: 4,
    title: 'Consultoria',
    resume:
      'Nossa Consultoria é o serviço ideal para o casal que deseja planejar e organizar seu próprio casamento.',
    icon: 'GoBrowser',
    url: '/advice_consulting',
    show: false
  }
];
