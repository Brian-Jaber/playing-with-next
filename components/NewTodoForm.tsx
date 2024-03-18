'use client'

import { useState } from "react";

const NewTodoForm = () => {
  const [state, updateState] = useState('');
  return (
  <div>
    <form>
      <input type="text" className="border border-black/25"/>
    </form>
  </div>)
}

export default NewTodoForm;