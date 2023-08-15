import React from 'react';

function AddNewBookForm() {
  return (
    <div className="main-container">
      <p>Add a New Book </p>
      <form action="" className="add-book-form">

        <label htmlFor="title">
          Title
          <input
            type="text"
            placeholder="Add a title"
            id="title"
          />
        </label>

        <label htmlFor="author">
          Author
          <input
            type="text"
            placeholder="Add the book author"
            id="author"
          />
        </label>

        <button
          type="button"
        >
          Submit
        </button>

      </form>
    </div>
  );
}

export default AddNewBookForm;
