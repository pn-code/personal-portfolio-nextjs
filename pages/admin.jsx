import React, { useState } from "react";
import axios from "axios";
import MessageCard from "../components/MessageCard";

const Admin = ({ messages }) => {
  const [messagesArray, setMessagesArray] = useState(messages);
console.log(messages)
  return (
    <div className="pt-[90px] mx-2">
      {/* Messages Container */}
      <div className="flex flex-col gap-2">
        {messagesArray.length === 0 && <span className="text-center mt-10">There are no messages at this time.</span>}
        {messagesArray.map((message) => (
          <MessageCard key={message._id} message={message} setMessagesArray={setMessagesArray}/>
        ))}
      </div>
    </div>
  );
};

export default Admin;

export const getServerSideProps = async (ctx) => {
  const res = await axios.get(`${process.env.HOST_URL}/api/messages`);
  const myCookie = ctx.req?.cookies || "";

  if (myCookie.token !== process.env.SESSION_TOKEN) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: {
      messages: res.data.data,
    },
  };
};
