import React, { useState } from "react";

const MessageCard = ({ message }) => {
  const [viewDetails, setViewDetails] = useState(false);
  const formattedDate = new Date(message.date.toString())
    .toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
    })
    .toString()
    .split(",")[0];

  return (
    <article
      className="flex flex-col gap-2 bg-slate-300 rounded-md p-2"
    >
      <section className="flex justify-between items-center ">
        <h2 className="text-[16px]">{message.name}</h2>
        <span className="text-sm">{message.title.substring(0, 20)}</span>
        <span className="text-sm">{formattedDate}</span>
        <button onClick={() => setViewDetails((prevViewDetails) => !prevViewDetails)} className="px-3 py-1">{viewDetails ? "Close Details": "View Details"}</button>
      </section>

      {viewDetails && (
        <div className="flex flex-col gap-2 ">
          <section>
            <h4>Body: </h4>
            <p>{message.body}</p>
          </section>

          {/* Contact Details */}
          <section className="flex justify-between">
            <div>
              <h4>Phone Number</h4>
              <span>{message.tele}</span>
            </div>
            <div>
              <h4>Email</h4>
              <span>{message.tele}</span>
            </div>
          </section>

          <button className="py-1 mt-10">Delete</button>
        </div>
      )}
    </article>
  );
};

export default MessageCard;
