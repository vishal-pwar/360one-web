"use client";

type PopupDetails = {
  popup: {
    [key: string]: any;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

const Popup = (props: PopupDetails) => {
  const { popup } = props;
  return (
    <div>
      <div>{popup?.title}</div>
    </div>
  );
};

export default Popup;
