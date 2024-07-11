import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useMutation } from '@apollo/client';

// Définir la requête GraphQL pour récupérer les messages
const GET_MESSAGES = gql`
  query GetMessages($conversationId: String!) {
    messages(conversationId: $conversationId) {
      id
      content
      sender {
        username
      }
      createdAt
    }
  }
`;

// Définir la mutation GraphQL pour la connexion
const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      access_token
    }
  }
`;

interface MessageProps {
  msg?: string;
  time: string;
  isLink?: boolean;
  img?: string;
  sent: boolean;
}

const Message: React.FC<MessageProps> = ({ msg, time, isLink, img, sent }) => {
  return (
    <div
      className={`flex justify-center items-center rounded-md w-fit my-1 ${
        sent ? 'bg-[#AB47A3] ml-auto' : 'bg-[#282E2E] mr-auto'
      }`}
    >
      {img ? (
        <div className="relative w-full p-2">
          <img
            src={img}
            alt="img_message"
            className="rounded-md max-w-[270px] w-full"
          />
          <p className="absolute right-2 bottom-3 text-white text-[10px] min-w-[50px]">
            {time}
          </p>
        </div>
      ) : (
        <div
          className="flex justify-between items-end max-w-[410px] p-2"
          style={{ wordBreak: 'break-word' }}
        >
          {isLink ? (
            <a
              href={msg}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#53beec] hover:text-[#53beec] focus:text-[#53beec] active:text-[#53beec] text-sm underline hover:underline mr-2"
            >
              {msg}
            </a>
          ) : (
            <p className="text-white text-sm mr-2">{msg}</p>
          )}
          <p className="text-[#a9c9e0] text-[10px] min-w-[50px]">{time}</p>
        </div>
      )}
    </div>
  );
};

interface MessagesListProps {
  conversationId: string;
}

const MessagesList: React.FC<MessagesListProps> = ({ conversationId }) => {
  const { loading, error, data } = useQuery(GET_MESSAGES, {
    variables: { conversationId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {error.message}</p>;

  return (
    <div>
      {data.messages.map((message: any) => (
        <Message
          key={message.id}
          msg={message.content}
          time={new Date(message.createdAt).toLocaleTimeString()}
          sent={message.sender.username === 'your-username'} // Remplacez par la logique pour vérifier si l'utilisateur est l'expéditeur
        />
      ))}
    </div>
  );
};

const Login: React.FC = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [login] = useMutation(LOGIN);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await login({ variables: { username, password } });
    localStorage.setItem('token', response.data.login.access_token);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

const App: React.FC = () => {
  const conversationId = 'your-conversation-id';
  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <div className="App">
      <h1>Messages</h1>
      {isLoggedIn ? (
        <MessagesList conversationId={conversationId} />
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
