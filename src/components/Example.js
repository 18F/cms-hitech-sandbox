import React from 'react';

const Example = () => (
  <div className="p2 container">
    <h1>Hello hamburger quick brown fox jumped over the lazy dog.</h1>
    <p>Hello hamburger quick brown fox jumped over the lazy dog.</p>
    <form onSubmit={e => e.preventDefault()}>
      <div>
        <label className="label">Foo</label>
        <input type="text" className="input" />
      </div>
      <div>
        <label className="label">Bar</label>
        <input type="text" className="input" />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  </div>
);

export default Example;
