import {
  chat1,
  chat10,
  chat11,
  chat12,
  chat13,
  chat2,
  chat3,
  chat4,
  chat5,
  chat6,
  chat7,
  chat8,
  chat9,
  cs2,
} from '../assets/nuntia';

export interface MessageData {
  msg?: string;
  time: string;
  isLink?: boolean;
  img?: string;
  sent: boolean;
}
export interface ChatData {
  pp: string;
  contact: string;
  msg: string;
  time: string;
  unreadMsgs: number | null;
}

export const chatsData: ChatData[] = [
  {
    pp: chat4,
    contact: 'Kevin',
    msg: 'Awesome, thank for your support! 🙌',
    time: '1:15 pm',
    unreadMsgs: null,
  },
  {
    pp: chat1,
    contact: 'JayJay',
    msg: 'Nuntia is fire! 🔥',
    time: '12:15 pm',
    unreadMsgs: 2,
  },
  {
    pp: chat2,
    contact: 'Mom ❤️',
    msg: 'I need to tell u sum!',
    time: '11:11 am',
    unreadMsgs: 4,
  },
  {
    pp: chat3,
    contact: 'Dad',
    msg: 'Hey dad, need you asap!!',
    time: '11:04 am',
    unreadMsgs: null,
  },
  {
    pp: chat4,
    contact: '+33 6 73 34 16 17',
    msg: 'Who are you???',
    time: '10:58 am',
    unreadMsgs: null,
  },
  {
    pp: chat5,
    contact: 'Coders </>',
    msg: 'Help me with this bug!! 😭😭',
    time: '10:50 am',
    unreadMsgs: 23,
  },
  {
    pp: chat6,
    contact: 'Mom',
    msg: 'Call me son, love you. ❤️',
    time: '10:35 am',
    unreadMsgs: 2,
  },
  {
    pp: chat7,
    contact: 'Johnny',
    msg: 'hahhahhaha lol 😂😂😂',
    time: '10:18 am',
    unreadMsgs: null,
  },
  {
    pp: chat8,
    contact: 'Boss',
    msg: 'Meeting in 2 hours.',
    time: '10:02 am',
    unreadMsgs: null,
  },
  {
    pp: chat9,
    contact: 'Sarah',
    msg: 'The test was sooo hard 😓',
    time: '9:47 am',
    unreadMsgs: 3,
  },
  {
    pp: chat10,
    contact: 'Doc 🏥',
    msg: 'Hey doc, waitng for the results',
    time: '9:41 am',
    unreadMsgs: null,
  },
  {
    pp: chat11,
    contact: 'Best Friend',
    msg: 'Wanna hang out? 🍺🍻',
    time: 'yesterday',
    unreadMsgs: 3,
  },
  {
    pp: chat12,
    contact: 'Little Bro',
    msg: 'I love this videogame 🕹🎮',
    time: 'yesterday',
    unreadMsgs: 6,
  },
  {
    pp: chat13,
    contact: 'Professor Elizabeth',
    msg: 'Forgot to send the task 😭',
    time: 'yesterday',
    unreadMsgs: null,
  },
];

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
