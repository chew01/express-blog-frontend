import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function Composer(props) {
  const { reloader } = props;
  const params = useParams();
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [titleInput, setTitleInput] = useState('');
  const [contentInput, setContentInput] = useState('');
  const [errors, setErrors] = useState(null);

  const nameHandler = (e) => {
    setNameInput(e.target.value);
  };

  const emailHandler = (e) => {
    setEmailInput(e.target.value);
  };

  const titleHandler = (e) => {
    setTitleInput(e.target.value);
  };

  const contentHandler = (e) => {
    setContentInput(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const form = document.getElementById('compose-comment');
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        commenter_name: nameInput,
        commenter_email: emailInput,
        title: titleInput,
        content: contentInput,
      }),
      params: JSON.stringify(params),
    };
    const response = await fetch(
      `http://localhost:3000/api/posts/${params.postLink}/comments`,
      requestOptions
    );
    const data = await response.json();
    if (data.status === 'fail') {
      setErrors(data.data.errors);
    }
    if (data.status === 'success') {
      setErrors(null);
      form.reset();
      reloader();
    }
  };

  return (
    <section className="p-4">
      <h4 className="font-medium text-xl mb-4">Add new comment</h4>
      <form
        id="compose-comment"
        onSubmit={submitHandler}
        className="flex flex-col gap-4 items-start"
      >
        <div className="flex gap-4 w-full">
          <label htmlFor="commenter_name">
            <span className="block font-medium pl-2 pb-1">Name</span>
            <input
              type="text"
              id="commenter_name"
              name="commenter_name"
              className="rounded px-2 py-1 bg-gray-200 border-transparent focus:bg-white focus:border-gray-500 focus:ring-0"
              placeholder="Name (e.g. John Doe)"
              onChange={nameHandler}
              required
            />
          </label>
          <label htmlFor="commenter_email" className="flex-grow">
            <span className="block font-medium pl-2 pb-1">Email</span>
            <input
              type="email"
              id="commenter_email"
              name="commenter_email"
              className="rounded px-2 py-1 w-full bg-gray-200 border-transparent focus:bg-white focus:border-gray-500 focus:ring-0"
              placeholder="Email (e.g. johndoe@gmail.com)"
              onChange={emailHandler}
              required
            />
          </label>
        </div>
        <label htmlFor="title" className="w-full">
          <span className="block font-medium pl-2 pb-1">Title</span>
          <input
            type="text"
            id="title"
            name="title"
            className="rounded px-2 py-1 w-full bg-gray-200 border-transparent focus:bg-white focus:border-gray-500 focus:ring-0"
            placeholder="Untitled"
            onChange={titleHandler}
            required
          />
        </label>
        <label htmlFor="content" className="w-full">
          <span className="block font-medium pl-2 pb-1">Content</span>
          <textarea
            id="content"
            name="content"
            className="rounded px-2 py-1 w-full bg-gray-200 resize-none border-transparent focus:bg-white focus:border-gray-500 focus:ring-0"
            rows={6}
            placeholder="Type comment here!"
            onChange={contentHandler}
            required
          />
        </label>
        <button
          type="submit"
          className="px-5 py-1 rounded-xl bg-slate-600 font-medium text-slate-50 hover:bg-slate-800"
        >
          Submit
        </button>
      </form>
      <ul className="p-4">
        {errors?.length > 0
          ? errors.map((err) => (
              <li key={err.value} className="text-red-600 list-disc">
                {err.msg}
              </li>
            ))
          : ''}
      </ul>
    </section>
  );
}

export default Composer;
