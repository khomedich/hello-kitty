import React, { useState } from 'react'
import Switch from '@mui/material/Switch'


const oleksaBanner = 
"  ____  _\n" +
" / __ \\| |\n" +
"| |  | | | ___ __  __ __ _\n" + 
"| |  | | |/ _ \\  \\/  / _` |\n" +
"| |__| | |  __/ >  <  (_| |\n" +
" \\____/|_|\\___/__/\\__\\__,_|\n" +
"\n"

const homenkoBanner = 
" _    _                            _\n" +
"| |  | |                          | |\n" +
"| |__| | ___  _ __ ___   ___ _ __ | | _____\n" + 
"|  __  |/ _ \\| '_ ` _ \\ / _ \\ '_ \\| |/ / _ \\\n" +
"| |  | | (_) | | | | | |  __/ | | |   < (_) |\n" +
"|_|  |_|\\___/|_| |_| |_|\\___|_| |_|_|\\_\\___/\n" +
"\n"

const hiThere = "Hi, ..."

const prompt = ">"

function App() {
  const [checked, setChecked] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  }

  return (
    <div className="app bg-base-400">
      {/* <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    /> */}
      <div className="flex flex-wrap text-green-500 font-bold">
        <pre className="overflow-auto test-left">{oleksaBanner}</pre>
        <pre className="overflow-auto">{homenkoBanner}</pre>
      </div>
      <div className="text-green-500 font-bold">
      </div>
      <div className="ml-1 text-green-500">{hiThere}</div>
      <span className="w-1/12">{prompt}</span>{" "}
      <input className="mt-4 bg-transparent text-green-500 outline-none w-11/12"
        type="text"
      ></input>
    </div>
  )
}

export default App
