import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const MessagePage = () => {
  return (
    <section>
    <div className="flex justify-center items-center">
      <div className="flex bg-primarydarkgrey items-center p-5 rounded-xl gap-5">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p>provider sent a message</p>
      </div>
    </div>
  </section>
  
  );
};

export default MessagePage;
