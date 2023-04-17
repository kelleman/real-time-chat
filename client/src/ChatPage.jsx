import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";

const ChatPage = (props) => {
    const chatProps  = useMultiChatLogic ('d7cd64e1-0a9b-4bd8-9cc8-3f13fd7b5a66', props.user.username, props.user.secret)
  return (
      <div style={{ height: '100vh' }}>
          <MultiChatSocket {...chatProps} />
          <MultiChatWindow {...chatProps} style={{height: '100vh'}} />
          
    </div>
  );
};

export default ChatPage;