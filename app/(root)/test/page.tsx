"use client";
import React, { useState, useEffect } from "react";

const Test = () => {
  interface initialData {
    id: number;
    title: string;
    body: string;
  }

  const [data, setData] = useState<initialData[]>([]);
  const [newPost, setNewPost] = useState<any>({
    id: "",
    title: "",
    body: "",
  });

  const initialData: initialData[] = [
    { id: 1, title: "First Post", body: "body of first post " },
    { id: 2, title: "Second Post", body: "body of second post " },
    { id: 3, title: "Third Post", body: "body of third post " },
  ];

  // Get data

  const fetchData = async (): Promise<void> => {
    try {
      // const response = await fetch("url API");
      //const fetchData = await response.json();
      setData(initialData);
      // Instead of fetching from an external API, use the initialData array directly
    } catch (error) {
      console.log("getting data is error", error);
    }
  };

  // set use Effect to get fetch data

  useEffect(() => {
    fetchData();
    [];
  }, []);

  // Post new data

  const handleNewPost = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setNewPost(() => {
      return { ...newPost, [name]: value };
    });
  };

  const handleAddNewPost = () => {
    if (!newPost.id || !newPost.title || !newPost.body) {
      return "please input value ";
    }
    setNewPost({
      id: "",
      title: "",
      body: "",
    });
    console.log(newPost, "new post");
  };

  return (
    <div>
      <p></p>
    </div>
  );

  return (
    <div className="text-black">
      {data.map((getData, index) => (
        <div key={index} className="flex gap-2">
          <p>Title :{getData.id}</p>
          <p>Title :{getData.title}</p>
          <p>Body :{getData.body}</p>
        </div>
      ))}
      <div>
        <input
          type="text"
          name="id"
          placeholder="add id"
          value={newPost.id}
          onChange={handleNewPost}
        />
        <input
          type="text"
          name="title"
          placeholder="add title"
          value={newPost.title}
          onChange={handleNewPost}
        />
        <input
          type="text"
          name="body"
          placeholder="add body"
          value={newPost.body}
          onChange={handleNewPost}
        />
        <button
          onClick={handleAddNewPost}
          className="bg-red-400 px-2 py-2 rounded-md text-white"
        >
          Add Data
        </button>
      </div>
    </div>
  );
};

export default Test;
