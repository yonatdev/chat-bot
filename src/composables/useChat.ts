import { sleep } from "../helpers/sleep";
import { ChatMessage } from "@/interfaces/chat-message.interface";
import { YesNoResponse } from "@/interfaces/yes-no.response";
import { ref } from "vue";

export const useChat = () => {
  const messages = ref<ChatMessage[]>([]);

    const getFriendResponse = async () => {
      const respose = await fetch("https://yesno.wtf/api");
      const data = (await respose.json()) as YesNoResponse;

      return data;
    }

  const onMessage = async (text: string) => {
    if(text.length === 0) return
    messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: text,
    });
    if (!text.endsWith("?")) return;
    await sleep(1.5);
    const { answer, image } = await getFriendResponse();

    messages.value.push({
      id: new Date().getTime(),
      itsMine: false,
      message: answer,
      image,
    });
  };

  return {
    //properties
    messages,

    //Methods
    onMessage,
  };
};
