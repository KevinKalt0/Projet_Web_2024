import { cs2 } from '../assets/nuntia';

export interface MessageData {
  msg?: string;
  time: string;
  isLink?: boolean;
  img?: string;
  sent: boolean;
}

export const messagesData: MessageData[] = [
  {
    msg: 'Hey wassupp bro!',
    time: '10:58 am',
    sent: true,
  },
  {
    msg: 'This Messenger App is firee 🔥',
    time: '10:58 am',
    sent: true,
  },
  {
    msg: 'Keep it up! 👍👍👍',
    time: '10:59 am',
    sent: true,
  },
  {
    msg: 'Thanks a lot! 😀',
    time: '11:15 am',
    sent: false,
  },
  {
    msg: 'Make sure to follow all my socials! 👌👌',
    time: '11:15 am',
    sent: false,
  },
  {
    msg: "I will! what's your Github?",
    time: '11:28 am',
    sent: true,
  },
  {
    msg: 'AlejoG10',
    time: '11:36 am',
    sent: false,
  },
  {
    msg: 'https://github.com/AlejoG10',
    isLink: true,
    time: '11:36 am',
    sent: false,
  },
  {
    msg: 'And your YouTube channel?',
    time: '11:47 am',
    sent: true,
  },
  {
    msg: 'Coding Spot',
    time: '11:55 am',
    sent: false,
  },
  {
    msg: 'https://www.youtube.com/channel/UCLqXQLK6zKZg0trhanjAkkQ',
    isLink: true,
    time: '11:55 am',
    sent: false,
  },
  {
    img: cs2,
    time: '11:56 am',
    sent: false,
  },
  {
    msg: 'Niceeee channel! 🔥💯',
    time: '12:35 pm',
    sent: true,
  },
  {
    msg: 'I will see all of your videos 😉',
    time: '12:35 pm',
    sent: true,
  },
  {
    msg: 'Awesome, thank for your support! 🙌',
    time: '1:15 pm',
    sent: false,
  },
];
