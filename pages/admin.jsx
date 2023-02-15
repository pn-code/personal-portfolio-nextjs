import React from "react";
import axios from "axios";

const Admin = ({ messages }) => {
    console.log(messages)
  return (<div>admin</div>);
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
      messages: res.data,
    },
  };
};
