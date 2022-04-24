import React, { useEffect, useState } from "react"
import { Prompt } from "react-router-dom"

const Important = () => {
  let initialValue = "Initial value"

  const [data, setData] = useState(initialValue)
  const [dirty, setDirty] = useState(false)

  useEffect(() => {
    if (data !== initialValue) {
      setDirty(true)
    }
  }, [data, initialValue])
  return (
    <div>
      <textarea
        defaultValue={initialValue}
        onChange={(e) => setData(e.target.value)}
        cols={40}
        rows={12}
      />
      <button onClick={() => setDirty(false)} disabled={!dirty}>
        Save
      </button>
      <Prompt when={dirty} message={() => "Do you really want to leave"} />
    </div>
  )
}

export default Important
