import React from "react";
import axios from "axios";
import MessageCard from "../components/MessageCard";

const Admin = ({ messages }) => {
  return (
    <div className="pt-[90px] mx-2">
      {/* Messages Container */}
      <div>
        {messages.map((message) => (
          <MessageCard key={message._id} message={message} />
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
